const {readFile, writeFile} = require('fs');
console.log('start');

// Using callback functions, the callback run when we are done.
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    // We get the buffer if we don't use an encoder as a parameter
    // console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result: ${first} + ${second + '\n'}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    })
});

console.log('starting next task');

