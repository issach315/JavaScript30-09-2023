/*
Module is a file that contains code to perform a specific task. 
A module may contain variables, functions, classes etc.

*/

// we are exporting the function to required file  by using the keyword export 
 function wish(name){
    return `Good Morning ${name}`;
}

 let dateOfDay  = new Date();

// Multiple exports and imports 
export { wish , dateOfDay};

// we can export variables , objects , functions , class ..etc


/*
A few characteristics of default exports are the following:

Default exports are useful when you want to export only one main thing from a file. 
It is like marking that one thing as the most important to share.

When importing a default export in another file, you can give it any name you want during the import, and you don't need to use curly braces {}.

A file can have only one default export.
*/

let callingStd = (stdName) =>{
    return `${stdName} come here `
}

export default callingStd;


import User from './classExportImport.mjs'

let me = new User("issach","issachemani227@gmail.com");

console.log(me._name);
console.log(me._email);

console.log('------*****************--------');

console.log(me.greetings());