import { wish  , dateOfDay } from './sample.mjs';

import { wish as hai , dateOfDay as date } from './sample.mjs'; // we can rename the imported members
// we are importing the file for reuse of code by using the import keyword

console.log(hai("issach"));

console.log('Today Date :',date);







// default export function 

import come from './sample.mjs'; // we can change name of  default function which imported

console.log(come("issach"));








// we can import all at a time like follow syntax 

import * as codeReuse from './sample.mjs'

console.log(codeReuse.dateOfDay); // not a default export 

console.log(codeReuse.default("issach")); //default export