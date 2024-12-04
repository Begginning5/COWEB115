document.getElementById("popup").addEventListener('click',myWindow);
document.getElementById("printl").addEventListener('click',myWindowl);
document.getElementById("clear").addEventListener('click',clearForm);

// Clear the value of each input or text area. **Both of these functions should be clearing out both forms. 
function clearForm() {
  var form = document.getElementById("signup");
  var forml = document.getElementById("plan");
  var inputs = form.querySelectorAll('input');
  var inputsl = forml.querySelectorAll('input');
  inputs.forEach(function(input) {
     input.value = ''; 
    });
  inputsl.forEach(function(input) {
    input.value = ''; 
  });
  }

//Print the signup
function myWindow() {
  var visitorName = document.getElementById("name").value;
  var emailTxt = document.getElementById("email").value;
  var when = document.getElementById("goal").value;
  var bMon = document.getElementById("dMon").value;
  var s1Mon = document.getElementById("s1Mon").value;
  var lMon = document.getElementById("lMon").value;
  var s2Mon = document.getElementById("s2Mon").value;
  var dMon = document.getElementById("dMon").value;
  var bTue = document.getElementById("bTue").value;
  var s1Tue = document.getElementById("s1Tue").value;
  var lTue = document.getElementById("lTue").value;
  var s2Tue = document.getElementById("s2Tue").value;
  var dTue = document.getElementById("dTue").value;
  var bWed = document.getElementById("bWed").value;
  var s1Wed = document.getElementById("s1Wed").value;
  var lWed = document.getElementById("lWed").value;
  var s2Wed = document.getElementById("s2Wed").value;
  var dWed = document.getElementById("dWed").value;
  var bThu = document.getElementById("bThu").value;
  var s1Thu = document.getElementById("s1Thu").value;
  var lThu = document.getElementById("lThu").value;
  var s2Thu = document.getElementById("s2Thu").value;
  var dThu = document.getElementById("dThu").value;
  var bFri = document.getElementById("bFri").value;
  var s1Fri = document.getElementById("s1Fri").value;
 // var lFri = document.getElementById("lFre").value;
  //var s2Fri = document.getElementById("s2Fri").value;
 // var dFri = document.getElementById("dFri").value;
 // var bSat = document.getElementById("bSat").value;
  //var s1Sat = document.getElementById("s1Sat").value;
 // var lSat = document.getElementById("lSat").value;
 // var s2Sat = document.getElementById("s2Sat").value;
 // var dSat = document.getElementById("dSat").value;
 // var bSun = document.getElementById("bSun").value;
 // var s1Sun = document.getElementById("s1Sun").value;
 // var lSun = document.getElementById("lSun").value;
  //var s2Sun = document.getElementById("s2Sun").value;
 // var dSun = document.getElementById("dSun").value;

  myText =  ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
  myText += ("Hello " + visitorName + ", lets work this out! \n I will contact you at " + emailTxt + " after I have review your goal." + "<br><br>" + "To: " + when);
  
  myText += ("<br>");
  myText += ("<br>");

  myText += ("<p>Monday:|" + bMon + "  |" + s1Mon + "  |" + lMon + "  |" + s2Mon + "  |" + dMon + "</p" ); 
  myText += ("<br>");
  myText += ("<p>Tuesday:|" + bTue + "  |" + s1Tue + "  |" + lTue + "  |" + s2Tue + "  |" + dTue + "</p>" ); 
 // myText += ("<br>");
  myText += ("<p>Wednesday:|" + bWed + "  |" + s1Wed + "  |" + lWed + "  |" + s2Wed + "  |" + dWed + "</p>" );
 // myText += ("<br>");
  myText += ("<p>Thusrsday:|" + bThu + "  |" + s1Thu + "  |" + lThu + "  |" + s2Thu + "  |" + dThu + "</p>" );
 // myText += ("<br>");
  myText += ("<p>Friday:   |" + bFri + "  |" + s1Fri + "  |" + lFri + "  |" + s2Fri + "  |" + dFri + "</p>" );
 // myText += ("<br>");
  //myText += ("<p>Saturday: |" + bSat + "  |" + s1Sat + "  |" + lSat + "  |" + s2Sat + "  |" + dSat + "</p>");
  //myText += ("<br>");
  //myText += ("<p>Sunday:   |" + bSun + "  |" + s1Sun + "  |" + lSun + "  |" + s2Sun + "  |" + dSun + "</p>" );
  
  myText += ("</body>\n</html>");
  flyWindow = window.open('about:blank','myPop','width=550,height=234,left=200,top=200');
  flyWindow.document.write(myText);
  console.log(when);

  if (document.getElementById("email").value.trim() === '') {
    alert('Email is required!');
    document.getElementById("email").focus();
    event.preventDefault(); }

}

//Print the full plan
function myWindowl() {
    var bMon = document.getElementById("dMon").value;
    var s1Mon = document.getElementById("s1Mon").value;
    var lMon = document.getElementById("lMon").value;
    var s2Mon = document.getElementById("s2Mon").value;
    var dMon = document.getElementById("dMon").value;
    var bTue = document.getElementById("bTue").value;
    var s1Tue = document.getElementById("s1Tue").value;
    var lTue = document.getElementById("lTue").value;
    var s2Tue = document.getElementById("s2Tue").value;
    var dTue = document.getElementById("dTue").value;
    var bWed = document.getElementById("bWed").value;
    var s1Wed = document.getElementById("s1Wed").value;
    var lWed = document.getElementById("lWed").value;
    var s2Wed = document.getElementById("s2Wed").value;
    var dWed = document.getElementById("dWed").value;
    var bThu = document.getElementById("bThu").value;
    var s1Thu = document.getElementById("s1Thu").value;
    var lThu = document.getElementById("lThu").value;
    var s2Thu = document.getElementById("s2Thu").value;
    var dThu = document.getElementById("dThu").value;
    var bFri = document.getElementById("bFri").value;
    var s1Fri = document.getElementById("s1Fri").value;
    var lFri = document.getElementById("lFre").value;
    var s2Fri = document.getElementById("s2Fri").value;
    var dFri = document.getElementById("dFri").value;
    var bSat = document.getElementById("bSat").value;
    var s1Sat = document.getElementById("s1Sat").value;
    var lSat = document.getElementById("lSat").value;
    var s2Sat = document.getElementById("s2Sat").value;
    var dSat = document.getElementById("dSat").value;
    var bSun = document.getElementById("bSun").value;
    var s1Sun = document.getElementById("s1Sun").value;
    var lSun = document.getElementById("lSun").value;
    var s2Sun = document.getElementById("s2Sun").value;
    var dSun = document.getElementById("dSun").value;
  
    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("Hello " + visitorName + ", lets work this out! ");
    myText += ("<br>");
    myText += ("I will contact you at " + emailTxt + " after I have review your goal.");
    myText += ("<br>");
    myText += ("<br>");
    myText += ("Monday:   |" + bMon + "  |" + s1Mon + "  |" + lMon + "  |" + s2Mon + "  |" + dMon ); 
    myText += ("<br>");
    myText += ("Tuesday:  |" + bTue + "  |" + s1Tue + "  |" + lTue + "  |" + s2Tue + "  |" + dTue ); 
    myText += ("<br>");
    myText += ("Wednesday:|" + bWed + "  |" + s1Wed + "  |" + lWed + "  |" + s2Wed + "  |" + dWed );
    myText += ("<br>");
    myText += ("Thusrsday:|" + bThu + "  |" + s1Thu + "  |" + lThu + "  |" + s2Thu + "  |" + dThu );
    myText += ("<br>");
    myText += ("Friday:   |" + bFri + "  |" + s1Fri + "  |" + lFri + "  |" + s2Fri + "  |" + dFri );
    myText += ("<br>");
    myText += ("Saturday: |" + bSat + "  |" + s1Sat + "  |" + lSat + "  |" + s2Sat + "  |" + dSat );
    myText += ("<br>");
    myText += ("Sunday:   |" + bSun + "  |" + s1Sun + "  |" + lSun + "  |" + s2Sun + "  |" + dSun );
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=550,height=400,left=200,top=200');
    flyWindow.document.write(myText);
  }
