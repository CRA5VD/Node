const fs = rewuire('fs');

const readStream = fs.creatReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWrite

//readStream.on('data', (chunk) => {
//    console.log('----NEW CHUNK ----')
//    console.log(chunk);
//    writeStream.write('\nNEW CHUNK\n');
//    writeStream.write(chunk);
//});

// piping
readStream.pipe(writeStream);