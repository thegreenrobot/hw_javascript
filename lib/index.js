'use strict';

const nrg = {};
const ncg = {};
const children = [];

children.push(nrg);
children.push(ncg);

nrg.name = 'Natalie';
nrg.age = 9;
nrg.favoriteColor = 'pink';

ncg.name = 'Nora';
ncg.age = 5;
ncg.favoriteColor = 'purple';

console.log('Greetings, I am here tell you some things...\n');

for (var child of children) {
	console.log(`Hello ${child.name}. You are ${child.age} years old and your favorite color is ${child.favoriteColor}.`);
}
