var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000
let smtpTransporter = nodemailer.createTransport('smtps://mounika.chitirala@gmail.com:AdhyanthaRahitham@smtp.gmail.com',{
  Service : "Gmail",
  auth : {
    user : "mounika.chitirala@gmail.com",
    pass : "AdhyanthaRahitham"
  }
});
var rand, mailOptions, host, link;
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());
 app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'public/html/index.html'));
 });

 app.post('/signup',function(req,res){
   rand = Math.floor((Math.random() * 100) + 54);
   // hash = bcrypt.hashSync(rand, 8);
   // console.log("hash key " + hash);
   host = req.get('host');
   console.log("Host -" + host);
   link = "http://" + req.get('host') + "/verify?id=" + rand;
   let emailid = req.body.email;
   console.log(req.body);
   console.log(link);
   mailOptions = {
        to: emailid,
        subject: "Verify your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    smtpTransporter.sendMail(mailOptions, function (error, response) {
         if (error) {
             console.log(error);
             res.end("error");
         } else {
             console.log("Message sent: " + response.message);
             res.end("sent");
         }
         smtpTransporter.close();
     });

 });

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
