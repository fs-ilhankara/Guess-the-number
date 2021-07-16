let number = Math.floor(Math.random() * 100)
console.log(number);

let btn = document.getElementById("btn");
let enter = document.getElementById("userinput");
let result = document.getElementById("result");

//Enter ile giriş kodu
enter.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
})

var count = 6;

function guess (){
    let input = enter.value;
    document.getElementById("userinput").value = "";    
    // count --
    document.getElementById("attemptcount").innerHTML = count;
    
    if (number == input){
        result.innerHTML = `Congrats guess right: ${number} `
        result.style.color = "green"
        
    } else if (number > input){
        if (count >= 1){
            result.innerHTML = "Too Low! UP"
            result.style.color = "red"
            count --
            document.querySelector(".attemptcount").innerHTML = count

        }else {
            result.innerHTML = "Game over"
            document.querySelector(".attemptcount").innerHTML = 0;
        }
    }else if (number < input){
        if (count >= 1){
            result.innerHTML = "Too High! DOWN"
            result.style.color = "red"
            count --
            document.querySelector(".attemptcount").innerHTML = count
        }else {
            result.innerHTML = "Game over"
            document.querySelector(".attemptcount").innerHTML = 0;
        }
    }
    else {
        if (count >= 1){
        result.innerHTML = "Please enter a valid number !!"
        result.style.color = "red"
        count --
        document.querySelector(".attemptcount").innerHTML = count
        }else{
            result.innerHTML = "Game over"
            document.querySelector(".attemptcount").innerHTML = 0;
        }
        
    }
    

}

// btn.addEventListener("click", guess());


