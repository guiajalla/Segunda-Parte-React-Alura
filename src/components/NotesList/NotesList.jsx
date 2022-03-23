import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

export default class NotesList extends Component {

  constructor(){
    super();
    
    this.state = {notes: []}

    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount(){
    this.props.notes.enroll(this._newNotes);
  }

  componentWillUnmount(){
    this.props.notes.dismiss(this._newNotes);
  }

  _newNotes(notes){
    this.setState({...this.state, notes})
  }

  render() {
    return (
      <ul className="notes-list">
        {this.state.notes.map((note, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <NoteCard 
                title={note.title} 
                text={note.text}
                deleteCard={this.props.deleteCard}
                index={index}
                category={note.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}