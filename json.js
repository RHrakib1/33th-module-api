// javaScript Object Notation k json bole
// "JSON.stringify()" use krle kono obj k string a rupantorito kore kintu number and boulian value k string a convar kore na 

// jodi kthao json stringify theke asol obj a ante hoi tahole 
const performance1 = {
    name: 'rakib',
    job: 'junior developer',
    address:{
        preaent:'kurigram',
        address1:'gainbandha'
    },
    array:['hasan','habib','sabbir'],
    salary: 42000,
    isHonest: true
};
const stringify = JSON.stringify(performance1);

console.log('normal object');
console.log(performance1);

console.log('obj theke string number and boulean bade');
console.log(stringify);

console.log('jeson string theke obj kora');
const stringifyObj = JSON.parse(stringify);
console.log(stringifyObj);
