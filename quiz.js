const button = document.getElementById("submitButton");
button.addEventListener("click",quizSubmit);

let response1 = document.getElementById("q1");
let answer1 = response1.options[response1.selectedIndex].value ;

let response2 = document.getElementById("q2");
let answer2 = response2.value ;

let response3 = document.getElementById("q3");
let answer3 = response3.value ;

let response4 = document.getElementById("q4");
let answer4 = response4.value ;

let response5 = document.getElementById("q5");
let answer5 = response5.value ;

let response6 = document.getElementById("q6");
let answer6 = response6.value ;

let response7 = document.getElementById("q7");
let answer7 = response7.value ;

let response8 = document.getElementById("q8");
let answer8 = response8.value ;

let response9 = document.getElementById("q9");
let answer9 = response9.value ;

let response10 = document.getElementById("q10");
let answer10 = response10.value ;




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
        console.log(score)
    }
  
    if(response4.selectedIndex == 1){
        score++
        console.log(score)
    }
    if(response5.selectedIndex == 1){
        score++
        console.log(score)
    }
    if(response6.selectedIndex == 1){
        score++
        console.log(score)
    }
    if(response7.selectedIndex == 0){
        score++
        console.log(score)
    }
  if(response8.selectedIndex == 0){
        score++
        console.log(score)
    }
    if(response9.selectedIndex == 2){
        score++
        console.log(score)
    }
    if(response10.selectedIndex == 0){
        score++
        console.log(score)
    }
    let printScore = document.createElement('h1')
    printScore.innerHTML = 'You got ' + score+'/10 correct!'
    document.body.appendChild(printScore);
    
}