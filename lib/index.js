'use strict';

const children = [];

const nrg = { name: 'Natalie', age: 9, favoriteColor: 'pink' };
const ncg = { name: 'Nora',	age: 5, favoriteColor: 'purple' };

children.push(nrg);
children.push(ncg);

var hello = (child) => {
	return `Hello ${child.name}. You are ${child.age} years old and your favorite color is ${child.favoriteColor}.`;
};

console.log('Greetings, I am here tell you some things...\n');

for (var child of children) {
	console.log(hello(child));
}
