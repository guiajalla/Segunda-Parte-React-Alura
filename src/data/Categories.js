export default class Categories{
    constructor(){
        this.categories = [];
        this._enrolled = [];
    }

    enroll(func){
        this._enrolled.push(func);
    }

    dismiss(func){
        console.log(this._enrolled.length)
        this._enrolled = this._enrolled.filter(f => f !== func);
        console.log(this._enrolled.length)
    }

    notify(){
        this._enrolled.forEach(func =>{ 
            func(this.categories);
        });
    }

    addCategory(newCategory){
        this.categories.push(newCategory);
        this.notify();
    }
}