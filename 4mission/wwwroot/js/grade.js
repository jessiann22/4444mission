//document.getElementById("btnSend").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txtFrom").value +
//        " , Subject: " + document.getElementById("txtSubject").value +
//        " , Message: " + document.getElementById("txtMessage").value);

//})

$("#submit").click(function () {

    let result;
    let letter = "";
    //push all the inputs to variables
    let input1 = parseInt($('#input1').val());
    let input2 = parseInt($('#input2').val());
    let input3 = parseInt($('#input3').val());
    let input4 = parseInt($('#input4').val());
    let input5 = parseInt($('#input5').val());
    let input6 = parseInt($('#input6').val());

    result = input1 + input2 + input3 + input4 + input5 + input6;
    
    answers.innerHTML = result
    //if statement to see what your percentage equates to with a letter grade
    if (result >= 94) {
        letter = "A"
    }
    else if (result >= 90) {
        letter = "A-"
    }
    else if (result >= 87) {
        letter = "B+"
    }
    else if (result >= 84) {
        letter = "B"
    }
    else if (result >= 80) {
        letter = "B-"
    }
    else if (result >= 77) {
        letter = "C+"
    }
    else if (result >= 74) {
        letter = "C"
    }
    else if (result >= 70) {
        letter = "C-"
    }
    else if (result >= 67) {
        letter = "D+"
    }
    else if (result >= 64) {
        letter = "D"
    }
    else if (result >= 60) {
        letter = "D-"
    }
    else {
        letter = "E"
    }

    //print your results on the page
    answers.innerHTML = "You received a(n) " + letter + " with a final percentage of " + result + "!";
})
