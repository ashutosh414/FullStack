// STring
let fname= "Ashutosh";
// Number
let age= 30;
// Boolean
let married = false;
// undefined
let firstname= undefined;
//object
let lastname= null;
console.log(fname);

//REFERENCE TYPE DATATYPE

//OBJECT
let person={
    name:"Ashutosh",
    ageofme:30
};
console.log(person);
    //Dot notation
person.name="RAM"
console.log(person);
    console.log(person['name']);
    console.log(person.name);

    //box notation
    changename='name'
    person[changename]="Hariom"
    console.log(person);
    console.log(person.name);
    console.log(person['name']);

//{name: 'Ashutosh', ageofme: 30}

//ARRAY
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log('value in array= ',selectedColors);
console.log('length of array =',selectedColors.length);


//FUNCTION
function detail(name,age){
    console.log('My name is '+ name +'. And I am '+ age +' old.')
}
detail(fname,age)