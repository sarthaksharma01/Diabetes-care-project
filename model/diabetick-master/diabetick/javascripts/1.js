var questions = [
   'Peeing more often and being thirstier? The average person usually has to pee between four and seven times in 24 hours, but people with diabetes may go a lot more. (yes/no)',
   'Dry mouth and itchy skin? Because your body is using fluids to make pee, there is less moisture for other things. You could get dehydrated, and your mouth may feel dry. Dry skin can make you itchy. (yes/no)',
   'Blurred vision? Changing fluid levels in your body could make the lenses in your eyes swell up. They change shape and lose their ability to focus. (yes/no)',
   'Slow-healing sores or cuts? Over time, high blood sugar can affect your blood flow and cause nerve damage that makes it hard for your body to heal wounds. (yes/no)',
   'It was nice interacting with you!! Click on the button to get results.'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];
var movebtn = document.querySelector("#movebtn");
var age;
var ya=0;
var na=0;

function showResponse() {
  var input = inputBox.value;
  if(!input) {
    
  }else {
  if(num == 0) {
      if(inputBox.value==='yes')
      {
    output.innerHTML = `You answered ${input}`;
    ya=ya+1;
    ++num;
    setTimeout(changeQuestion, 2000);
      }
      else if(inputBox.value==='no')
      {
        output.innerHTML = `You answered ${input}`;
        na=na+1;
        ++num;
    setTimeout(changeQuestion, 2000);
      }
      else{
        output.innerHTML = ' invalid answer !! ,you have to answer in yes or no only';
        num=0;
        setTimeout(changeQuestion, 2000);
      }
    inputBox.value = "";
    // document.body.style.backgroundColor = "url('../images/human-heart-gif-8.gif')";
    inputBox.setAttribute("placeholder", "");
    
  } else if(num == 1) {
    if(inputBox.value==='yes')
    {
  output.innerHTML = `You answered ${input}`;
  ya=ya+1;
  setTimeout(changeQuestion, 2000);
  ++num;
    }
    else if(inputBox.value==='no')
    {
      output.innerHTML = `You answered ${input}`;
      na=na+1;
      setTimeout(changeQuestion, 2000);
      ++num;
    }
    else{
      output.innerHTML = ' invalid answer !! ,you have to answer in yes or no only';
      num=1;
      setTimeout(changeQuestion, 2000);
    }
    age=inputBox.value;
    console.log('age------->'+ age);
    inputBox.value = "";
    //  document.body.style.backgroundImage = "url('../images/human-heart-gif-8.gif')";
    
    inputBox.setAttribute("placeholder", "");
    
   
  } else if(num == 2) {
    if(inputBox.value==='yes')
    {
  output.innerHTML = `You answered ${input}`;
  ya=ya+1;
  setTimeout(changeQuestion, 2000);
  ++num;
    }
    else if(inputBox.value==='no')
    {
      output.innerHTML = `You answered ${input}`;
      na=na+1;
      setTimeout(changeQuestion, 2000);
      ++num;
    }
    else{
      output.innerHTML = ' invalid answer !! ,you have to answer in yes or no only';
      num=2;
      setTimeout(changeQuestion, 2000);
    }
   
    
   
    inputBox.value = "";
    // document.body.style.backgroundImage = "url('../images/giphy (1).gif')";
    inputBox.setAttribute("placeholder", "");
  
  } else if(num == 3) {
    if(inputBox.value==='yes')
    {
  output.innerHTML = `You answered ${input}`;
  ya=ya+1;
  setTimeout(changeQuestion, 3000);
  ++num;
    }
    else if(inputBox.value==='no')
    {
      output.innerHTML = `You answered ${input}`;
      na=na+1;
      setTimeout(changeQuestion, 3000);
      ++num;
    }
    else{
      output.innerHTML = ' invalid answer !! ,you have to answer in yes or no only';
      num=3;
      setTimeout(changeQuestion, 3000);
    }
    
    
   
    inputBox.value = "";
    // document.body.style.backgroundImage = "url('../images/human-heart-gif-8.gif')";
    inputBox.setAttribute("placeholder", "");
  }
 
  }
}


var flex= document.querySelector('.flex');
function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num == 4) {
    inputBox.style.display = "none";
    movebtn.style.display = "block";
    if(na>ya){
        movebtn.addEventListener("click" , (e)=>{
            console.log('na greater');
            inputBox.style.display = "none";
            movebtn.style.display="none";
            output.style.display="none";
            var p1 = document.querySelector('#p1');
            var p2 = document.querySelector('#p2');
            p1.innerHTML="your number of NO's is greater than number of YES ,";
            p2.innerHTML="so according to symptoms you have less chances of having diabetes but still it's always good to visit a doctor";
        })
    }
    else if(na==ya)
    {
       
            movebtn.addEventListener("click" , (e)=>{
                console.log('na greater');
                inputBox.style.display = "none";
                movebtn.style.display="none";
                output.style.display="none";
                var p1 = document.querySelector('#p1');
                var p2 = document.querySelector('#p2');
                p1.innerHTML="your number of NO's is equal to number of YES ,";
                p2.innerHTML="so according to symptoms have chances of having diabetes so we advice you to visit a doctor";

        })
    }
    else if(na<ya)
    {
        movebtn.addEventListener("click" , (e)=>{
            inputBox.style.display = "none";
                movebtn.style.display="none";
                output.style.display="none";
                var p1 = document.querySelector('#p1');
                var p2 = document.querySelector('#p2');
                p1.innerHTML="your number of NO's is equal to number of YES ,";
                p2.innerHTML="so according to symptoms have chances of having diabetes so we advice you to visit a doctor";
    })
}
    else if(age>=65)
    {
        movebtn.addEventListener("click" , (e)=>{
            window.location.href="./senior.html";
        })
    }
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();
console.log(age);
