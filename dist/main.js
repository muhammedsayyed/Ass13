"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    _age;
    notebooks = [];
    constructor(id, name, email, password, phone, _age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this._age = _age;
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
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
const user = new User(1, "Bebo", "bebo@gmail.com", "123456", "0123456788", 23);
console.log(user.displayInfo());
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
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
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.slice(0, 30);
    }
}
const note = new Note(1, "typeScript", "learning OOP with typeScript", user);
console.log(note.preview());
class NoteBook {
    name;
    notes = [];
    constructor(name) {
        this.name = name;
    }
    addNote(id, title, content, user) {
        const note = new Note(id, title, content, user);
        this.notes.push(note);
    }
    removeNote(id) {
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
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(ele => ele !== item);
    }
    getAllItems() {
        return this.items;
    }
}
const storage = new Storage();
storage.addItem("Bebo");
storage.addItem("Abanoub");
console.log(storage.getAllItems());
storage.removeItem("Bebo");
console.log(storage.getAllItems());
