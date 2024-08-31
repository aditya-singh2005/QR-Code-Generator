import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer    
  .prompt([ 
    {
        "message":"Type in your URL: ",
        "name": "URL"
    }
  ])
  .then((answers) => {
    const url=answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr-image.png'));
        fs.writeFile("url.txt",` the QR code conatins the link to: ${url}`,(err) => { 
            if(err) throw err;
            console.log("qr generated successfully !");
        })
       
    })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(err);
    } else {
      // Something else went wrong
    }
  });
