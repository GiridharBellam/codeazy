const people=[
    {age:9,colour:"green",alive:true},
    {age:10,colour:"red",alive:false},
    {age:14,colour:"blue",alive:true},
    {age:28,colour:"yellow",alive:false},    
];
const agelessthanten= people.filter(item=> item.age<10);
console.log("age is <10",agelessthanten);
const agegreaterthanten= people.filter(item=> item.age>10);
console.log("age >10",agegreaterthanten);
//fielter is used to keep only items matching the condition..
const firstitem= people.find(item=> item.colour ==="green");
console.log("coloue",firstitem);
// find() stops after finding the first match
const newproperty= people.map(item=> {return{people,city:"any"}});
console.log("added property",newproperty);
// map() creates a new array keeping original unchanged
const deletepropert=people.map(item=> {
    let copy ={people};
    delete copy.alive;
    return copy;
});
console.log("deleted property",deletepropert);
// Using map() to create new array wuth copy without modifying the original
people.forEach(item=> console.log(item));
console.log("print each item");
// forEach is used only for looping
const totalvalue= people.reduce((sum,item)=>sum + item.age,0);
console.log("total age",totalvalue);
const sortdata=people.sort((a,b)=> a.age - b.age);
console.log("sorteddata",sortdata);
//sort() is used to arrange items in an array and sort items
const colourname= people.map(item=> {
return{name:item.name, colour:item.colour};});
console.log("property",colourname);
const conditonmeet= people.every(item=> item.alive==true);
console.log("match every condition",conditonmeet);
const someitem= people.some(item=> item.age >10);
console.log("condition met",someitem);
const jointforms= people.join("😁");
console.log("joined",jointforms);
const extraPeople= [
    {age:30,colour:"white",alive:true}
];
const combine=[...people,extraPeople];
console.log("combined",combine);
//spread operator is used to copy or keep the original safe.🙌
