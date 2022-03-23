import React, { Component } from 'react';
import "./style.css"

class CategoryList extends Component {

    constructor(){
        super();
        this.state = {categories: []}

        this._newCategoies = this._newCategoies.bind(this);
    }

    componentDidMount(){
        this.props.categories.enroll(this._newCategoies);
    }

    componentWillUnmount(){
        this.props.categories.dismiss(this._newCategoies);
    }

    _newCategoies(categories){
        this.setState({...this.state, categories});
    }

    _handleInputEvent(e){
        if (e.key == "Enter"){
            let valueCategory = e.target.value;
            this.props.addCategory(valueCategory);
        }
    }

    render() {
        return (
            <section className='category-list'>
                <ul className='category-list_list'>
                    {this.state.categories.map((category, index)=> {
                        return (
                            <li key={index} className='category-list_item'>{category}</li>
                        );
                    })}
                </ul>
                <input 
                    type="text" 
                    className='category-list_imput' 
                    placeholder='Add category' 
                    onKeyUp={this._handleInputEvent.bind(this)}
                />
            </section>
        );
    }
}
 
export default CategoryList;