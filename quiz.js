//function myFunction(){
    //var str ="wrong";
    //var result = str.link("https://www.w3schools.com/html/html_forms.asp");
    //document.getElementById("incorrect").innerHTML = result;
    //}
//document.getElementById("incorrect").innerHTML = result;
//result.display.style = "none";

const button = document.getElementById("submitButton");
button.addEventListener("click",quizSubmit);

let response1 = document.getElementById("q1");


let response2 = document.getElementById("q2");


let response3 = document.getElementById("q3");

let response4 = document.getElementById("q4");


let response5 = document.getElementById("q5");


let response6 = document.getElementById("q6");


let response7 = document.getElementById("q7");

let response8 = document.getElementById("q8");


let response9 = document.getElementById("q9");


let response10 = document.getElementById("q10");




function quizSubmit(event){
    event.preventDefault()

    var score = 0;
 
    if (response1.selectedIndex == 3){
        score++;
        console.log(score);
    }
   
    if(response2.selectedIndex == 1){
        score++;
        console.log(score);
    }
    if(response3.selectedIndex == 0){
        score++;
        console.log(score);
    }
  
    if(response4.selectedIndex == 1){
        score++;
        console.log(score);
    }
    if(response5.selectedIndex == 1){
        score++;
        console.log(score);
    }
    if(response6.selectedIndex == 1){
        score++;
        console.log(score);
    }
    if(response7.selectedIndex == 0){
        score++;
        console.log(score);
    }
  if(response8.selectedIndex == 0){
        score++;
        console.log(score);
    }
    if(response9.selectedIndex == 2){
        score++;
        console.log(score);
    }
    if(response10.selectedIndex == 0){
        score++;
        console.log(score);
    }
    let printScore = document.createElement('h1');
    printScore.innerHTML = 'You got ' + score +'/10 correct!';
    document.body.appendChild(printScore);

}
    //if(score != 10){
        //result.display.style = 'block';
    //}}
