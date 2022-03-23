import React, { Component } from "react";
import "./style.css";

export default class FormRegister extends Component{
    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
        this.category = "No Category";
        this.state = {categories: []}

        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount(){
        this.props.categories.enroll(this._newCategories);
    }

    componentWillUnmount(){
        this.props.categories.dismiss(this._newCategories);
    }

    _newCategories(categories){
        this.setState({...this.state, categories})
    }

    _createCard(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.addNote(this.title, this.text, this.category)
    }

    _handleChangeTitle(event){
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleChangeText(event){
        event.stopPropagation();
        this.text = event.target.value;
    }

    _handleChangeCategory(event){
        event.stopPropagation();
        this.category = event.target.value;
    }

    render(){
        return (
            <form className="form-register" onSubmit={this._createCard.bind(this)}>
                <select 
                    className="form-register_input"
                    onChange={this._handleChangeCategory.bind(this)}>
                    <option>Select category...</option>
                    {this.state.categories.map((category, index) => {
                        return <option key={index}>{category}</option>
                    })}
                </select>
                <input 
                    type="text" 
                    placeholder="title" 
                    className="form-register_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea 
                    rows={15} 
                    placeholder="Write a note..." 
                    className="form-register_input" 
                    onChange={this._handleChangeText.bind(this)}
                    />
                <button className="form-register_input form-register_submit">New note</button>
            </form>
        );
    }
}