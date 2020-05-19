import fs from 'fs';
function cb(err, data){
    if(err) return err;
  console.log(data);
};


const filePath = () => {
  const fileName = 'C:\Users\jacob\lambda-projects\JS-Exercise-Functions-Arrays-Objects\file\my-file.txt';
  return fs.readFile(fileName, 'utf8', cb);
}

filePath();
console.log('done');