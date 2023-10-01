// exporting the class 


export default class User{

    constructor(name , email)
    {
        this._name=name;
        this._email=email;
    }

    greetings = ()=>{
        return`hello ${this._name} this is your email ${this._email}. `
    }
}