  // JavaScript code for form validation

  /*This should be the basic form of the function*/
  document.getElementById('btnClk').addEventListener('click',
  function () {
    console.log("Chxs!");
    let inputString = document.forms["inputField"].value;
    //I am experiencing an issue with line 7.  The value isn't the correct "type?" is my current understanding.  
    //I was sent a reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/forms
    let regex = /^[a-zA-Z0-9]+$/; 
    
    if (!regex.test(inputString)) alert('Invalid input!');
    else if ((inputString == "")) alert("Name must be filled out");
    else if (regex.test(inputString)) alert('Valid input!');
    
    //submit to FTP
    return false;
    event.preventDefault();
  })