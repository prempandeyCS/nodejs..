const fs = require ('fs');
// fs.writeFile('example.txt', "this is an example", (err) =>{
//     if (err)
//     console.log(err);
//     else 
//     console.log('file successfully created');
//     fs.readFile('example.txt','utf8',  (err, file)=>{
//         if (err)
//         console.log(err);
//         else
//         console.log(file);
//     })
// });
// fs.rename('example.txt', 'example2.txt', (err) =>{
//     if (err)
//     console.log(err);
//     else
//     console.log('file successfully renamed');
// });
// fs.appendFile('example2.txt', 'some data being appended', (err) =>{
//     if (err)
//     console.log(err);
//     else
//     console.log('successfully appended data to the file');
// });
fs.unlink('example2.txt', (err)=>{
    if (err)
    console.log(err);
    else
    console.log('successfullyu delated the file');
})