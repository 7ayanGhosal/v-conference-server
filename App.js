var request = require('request')
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(process.env.PORT||5000, process.env.IP, ()=>{
  console.log("Server has started");
})


app.get("/", (req, res)=>{
    res.redirect('https://www.google.com/');
})

app.post("/join-meeting", (req, res)=>{
    var userName = req.body.userName;
    var meetingID = req.body.meetingId.replace(/-/g, "");;
    var app_num = req.body.app;
    switch(Number(app_num)) {
      case 1:
        res.redirect('https://us04web.zoom.us/wc/join/'+meetingID);
        break;
      case 2:
        res.redirect('https://jiomeetpro.jio.com/guest?meetingId='+meetingID);
        break;
      case 3:
        res.redirect('https://meetingsapac37.webex.com/join/pr'+meetingID);
        break;
      case 4:
        res.redirect('https://meet.google.com/'+meetingID);
        break;
      case 5:
        res.redirect('https://join.skype.com/'+meetingID);
        break;
      case 6:
        res.redirect('https://global.gotomeeting.com/join/'+meetingID);
        break;
      case 7:
        res.redirect('https://www.gotomeeting.com/en-in/webinar/join-webinar');
        break;
      case 8:
        res.redirect('https://m.teamlink.co/'+meetingID);
        break;
      case 9:
        res.redirect('https://www.saynamaste.in/join/'+meetingID);
        break;
      case 10:
        res.redirect('https://meetinglab.zoho.in/meeting/participant.do?key='+meetingID+'&uname='+userName);
        break;
      case 11:
        res.redirect('https://www.3cx.com/');
        break;
      case 12:
        res.redirect('https://app.henlo.in/'+meetingID);
        break;
      default:
        res.send("Something Went Wrong !!!");
    }
})