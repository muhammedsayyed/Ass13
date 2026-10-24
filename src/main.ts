class User {
    public notebooks: NoteBook[] = [];

    constructor(public id: number, public name: string, public email: string, private password: string, protected phone: string, private _age: number) {
        if (_age < 18 || _age > 60) {
            throw new Error("age must be bet 18 & 60");
        }
    }

    displayInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            age: this._age
        };
    }

    addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}

const user = new User(1, "Bebo", "bebo@gmail.com", "123456", "0123456788", 23);
console.log(user.displayInfo());


class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age);
    }

    manageNotes() {
        return "admin is managing notes";
    }
}

const admin = new Admin(2, "Admin", "admin@gmail.com", "admin123", "0123456789", 30);
console.log(admin.displayInfo());
console.log(admin.manageNotes());


class Note {
    constructor(public id: number, public title: string, public content: string, public userId: User) {}

    preview(): string {
        return this.content.slice(0, 30);
    }
}

const note = new Note(1, "typeScript", "learning OOP with typeScript", user);
console.log(note.preview());


class NoteBook {
    private notes: Note[] = [];

    constructor(public name: string) {}

    addNote(id: number, title: string, content: string, user: User): void {
        const note = new Note(id, title, content, user);
        this.notes.push(note);
    }

    removeNote(id: number): void {
        this.notes = this.notes.filter(note => note.id !== id);
    }
}

const notebook = new NoteBook("My Notes");
notebook.addNote(1, "OOP", "Learning TypeScript OOP concepts", user);
console.log(notebook);

notebook.removeNote(1);
console.log(notebook);


const notebook2 = new NoteBook("Work Notes");
user.addNotebook(notebook);
user.addNotebook(notebook2);
console.log(user);


class Storage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(ele => ele !== item);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

const storage = new Storage<string>();
storage.addItem("Bebo");
storage.addItem("Abanoub");
console.log(storage.getAllItems());

storage.removeItem("Bebo");
console.log(storage.getAllItems());