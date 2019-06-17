const express = require('express');
const router = express.Router();
var fs = require('fs');


UserData ={
    UserName: [ "admin", "editor", "contributor" ],
    PassWord: [ "admin1", "editor1", "contributor1" ],
    ID:       [ "1", "2", "3" ],
};

router.get('/',(req,res,next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://99.245.132.174');
  res.setHeader('Access-Control-Allow-Origin', 'http://schoolrover.ca');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.status(200).send(UserData) 
  console.log("User API has Been Acctived")
  res.end();
  Save();
});

router.post('/',(req,res,next) =>{ //this is the API to Hendel Login Reuquest
    console.log("Some One trying to Login in")
    const GetLogin = {
        UserName: req.body.UserName,
        PassWord: req.body.PassWord,
    }
    console.log(CheckLogin(GetLogin.UserName , GetLogin.PassWord));
    if(CheckLogin(GetLogin.UserName , GetLogin.PassWord)){res.sendFile(path.join(__dirname,'./Admin.html'));}
   //if it ture then do Somethink 
    res.end("not right login ");
   // SetWifi(sendata);
    //SmartRover();
    
});
function CheckLogin(UserName ,PassWord)
{
    NumCheck = 0;
    for(i = 0 ; i < UserData.UserName.length; i++)
    {
      if(UserName == UserData.UserName[i]){NumCheck++;}
      if(PassWord == UserData.PassWord[i]){NumCheck++;}
    }
//well i figher now that the server has to Send the Page to user you get it wait a sec, but in the code, didn't he switch the language to javascript so shouldnt
//window.open work here? ye it well work like this nono ok what needs to hppen is the server sends the Page to the user like this  
    if(NumCheck == 2){return true;w}else{return false;}
}
function Save()
{
  var jsonData = JSON.stringify(UserData);
  fs.writeFile("data.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});

}


module.exports = router;