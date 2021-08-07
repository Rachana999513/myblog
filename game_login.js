function send() {
    number1 = document.getElementById("number1").Value;
    number2 = ducument.getElementById("number2").Value;
    actual_answer = parseInt(number1) * parseInt(number2);
}

question_number = "<h4>" + number1 + "X"+ number2 + "</h4>";
input_box = "<br>Answer : <input type= 'text' id='input_check_box'>";
check_button = "<br><br><utton class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ; 

document.getElementById("output").innerHtml = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";