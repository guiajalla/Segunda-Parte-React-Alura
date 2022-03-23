export default class NotesArray{
    constructor(){
        this.notes = [];
        this._enrolled = [];
    }
    
    addNote(title, text, category){
        const newNote = new Note(title, text, category);
        this.notes.push(newNote); 
        this.notify();
    }

    deleteNote(index){
        this.notes.splice(index, 1);
        this.notify();
    }

    enroll(func){
        this._enrolled.push(func);
    }

    dismiss(func){
        this._enrolled = this._enrolled.filter(f => f !== func);
    }

    notify(){
        this._enrolled.forEach(func =>{ 
            func(this.notes);
        });
    }
}

class Note{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
    }
}