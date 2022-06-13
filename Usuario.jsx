class Usuario{
    constructor(name,lastName,books,pets){
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }
    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
    addPets(pet){
        this.pets.push(pet);
    }
    countPets(){
        return this.pets.length;
    }
    addBook(name,author){
        this.books.push({name:name,author:author})
    }
    getBooksNames(){
        let names=[];
        for (const book of this.books) {
            names.push(book.name);
        }
        return names;
    }
}

let books =[
    {
        name:'Foundation',
        author:'Juan'
    },
    {
        name:'Civ',
        author:'Fran'
    },
]
let pets=['Perro','Gato'];

let person = new Usuario('Stefano','Carbajal',books,pets);

console.log(person.getFullName());
console.log(person.countPets());
person.addPets('Pez');
console.log(person.countPets());
console.log(person.getBooksNames());
person.addBook('El señor de los anillos','Tolkien');
console.log(person.getBooksNames());
console.log(typeof person.books);