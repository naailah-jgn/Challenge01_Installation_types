// challenge.ts

class User {
  name: string;
  age?: number;
  birthday?: string;

  constructor(name : string, age? : number, birthday? : string){
    this.name = name; 
    this.age = age, 
    this.birthday = birthday;
  }
}



const prettyPrintWilder = (users: User[]) => {
    users.map((user: User) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders: Array<User> = [];
  const user1 : User = new User ("Pierre", 23 );
  const user2 : User = new User ("Paul", undefined, "10/02/1990");
  const user3 : User = new User ("Jacques", 25);
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);