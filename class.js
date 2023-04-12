class User {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name
    }
    getIntroduction(){
        return `Hi, my name is ${this.name}`
    }
}

class UserBase {
    constructor(name){
        this.name = name;
    }
    count(){
        return users.length;
    }
    getNames() {
        const array = [];
        for(let i = 0; i < users.length; i++){
            array.push(users[i].getName());
        }
        return array;
    }    
    getIntroductions(){
        const array = [];
        for(let i = 0; i < users.length; i++){
            array.push(`Hi, my name is ${users[i].getName()}`)
        }
        return array;
    }
}

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

  const userBase = new UserBase(users);