const {readFile} = require('fs');

console.log('started a first task');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        returnç
    }
    console.log(result);
    console.log('completed task');
});

console.log('starting next task');