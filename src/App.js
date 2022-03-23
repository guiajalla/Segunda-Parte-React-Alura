import React, { Component } from "react";
import  NotesList from "./components/NotesList";
import FormRegister from "./components/FormRegister";
import CategoryList from "./components/CategoryList";
import "./assets/App.css"
import "./assets/index.css"
import Categories from "./data/Categories";
import NotesArray from "./data/Notes";

class App extends Component {
  constructor(){
    super();

    this.categories = new Categories();
    this.notes = new NotesArray();
  }

  render(){
    return (
    <section className="content">
      <FormRegister 
        addNote={this.notes.addNote.bind(this.notes)}
        categories={this.categories}  
      />
      <main className="principal-product">
        <CategoryList 
          categories={this.categories}
          addCategory={this.categories.addCategory.bind(this.categories)}
        />
        <NotesList 
          notes={this.notes}
          deleteCard={this.notes.deleteNote.bind(this.notes)}
        />
      </main>
    </section>
    );
  }
}

export default App;
