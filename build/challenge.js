// challenge.ts
class User {
    constructor(name, age, birthday) {
        this.name = name;
        this.age = age,
            this.birthday = birthday;
    }
}
const prettyPrintWilder = (users) => {
    users.map((user) => {
        console.log(`${user.name} is ${user.age} years old`);
    });
};
const wilders = [];
const user1 = new User("Pierre", 23);
const user2 = new User("Paul", undefined, "10/02/1990");
const user3 = new User("Jacques", 25);
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
