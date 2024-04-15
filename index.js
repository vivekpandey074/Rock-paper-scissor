

const crossBtn=document.querySelector(".crossBtn")
const ruleBox=document.querySelector(".ruleBox");
const btn_rules=document.querySelector(".btn_rules");
const uscore=document.getElementById("user_score");
const pcscore=document.getElementById("computer_score")
const btnContainer=document.querySelector(".btn-container")



const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");
const stone=document.querySelector(".stone");





let user_score=localStorage.getItem("user_score")?parseInt(localStorage.getItem("user_score")):0;
let computer_score=localStorage.getItem("computer_score")?parseInt(localStorage.getItem("computer_score")):0;

let user_choice=-1;
let computer_choice=-1;
let winner=-1;


//setting score on each time score change
function setScore(){

  
    uscore.innerText=user_score;
    pcscore.innerText=computer_score;
    localStorage.setItem("user_score",user_score);
    localStorage.setItem("computer_score",computer_score);
    
}


setScore();



//closing rulebox


function close(){
        ruleBox.classList.add("hidden")    
}
crossBtn.addEventListener("click",close);


btn_rules.addEventListener("click",()=>{
   const hasclass= ruleBox.classList.contains("hidden");
   if(hasclass){
    ruleBox.classList.remove("hidden");
   }
    else{
      ruleBox.classList.add("hidden")
    }
})



// user choice

stone.addEventListener("click",()=>{
   user_choice=0;
   renderResult();
})

scissor.addEventListener("click",()=>{
  user_choice=1;
 renderResult();
})


paper.addEventListener("click",()=>{
    user_choice=2;
    renderResult();
})

//rendering the result

function renderResult(){
    
 computer_choice=Math.floor(Math.random() * 3)


 if((computer_choice===0 && user_choice===0) || (computer_choice===1 &&  user_choice===1) || (computer_choice===2 && user_choice===2) ){
    winner=-1;
 }
 else if(user_choice===0 && computer_choice===1){
 winner=0;
 user_score+=1;
 }
 else if(user_choice===1 && computer_choice===2){
    winner=0;
    user_score+=1;
 }
 else if(user_choice===2 && computer_choice===0){
    winner=0;
    user_score+=1;
 }else{
    winner=1;
    computer_score+=1;
 }

 setScore();
 renderDiv();
}



//renderDiv()

function renderDiv(){
   const uchoice=user_choice===0?"stone":user_choice===1?"scissor":"paper";
   const pcchoice=computer_choice===0?"stone":computer_choice===1?"scissor":"paper";
    
   
    const newContent=`
    <section class="resultGame">
        <div class="resultBox">
            <p>YOU PICKED</p>
            <div class="resultCircles result${uchoice}  ${winner===0?"rippleAnimation":" "}"><img src="./${uchoice}.png" alt="${uchoice}"></div>
        </div>
        <div class="middle">
        <p class="resultText">${winner===-1?'TIE':winner===0?'YOU WIN':'YOU LOST'}</p>
        <p class="resultAgainstText ${winner===-1? "hidden":" "}" >AGAINST PC</p>
        <button class="btnPlay" onclick="renderHomePage()">${winner===-1? "REPLAY" :"PLAY AGAIN"}</button>
        </div>


       <div class="resultBox">
        <p>PC PICKED</p>
        <div class="resultCircles result${pcchoice} ${winner===1?"rippleAnimation":" "}"><img src="./${pcchoice}.png" alt="${pcchoice}"></div>
       
       </div>
      
    </section>`

 const chooseGame=document.querySelector(".chooseGame")
 const newElement=document.createElement('div');
 newElement.innerHTML=newContent;
 newElement.id="resultBoxID"
 chooseGame.replaceWith(newElement)
 
// document.body.append(newElement)
 //adding next button upon winnig

 if(winner===0){
    
    const nextBtn=document.createElement("div");
    nextBtn.id="nextBtnID";
    nextBtn.className="btn_rules";
    nextBtn.innerHTML= `<p onclick="finalPage()">NEXT</p>`
   
    btnContainer.append(nextBtn)
 }

}






//play again && replay button

function renderHomePage(){
    window.location.reload();
}




function finalPage(){
const  scoreBoard=document.querySelector(".scoreBoard");
const  resultGame=document.querySelector("#resultBoxID");
const  nextBtn=document.getElementById("nextBtnID");

btnContainer.removeChild(nextBtn)
document.body.removeChild(scoreBoard);
document.body.removeChild(resultGame);



const newElement=document.createElement('div');
const newContent=` <div class="hurrayBox">
<div class="trophyBox">
  <img src="./star.png"   class="smallestStar fifth_star" alt="star">
  <img src="./star.png" class="smallestStar sixth_star"  alt="star">
  <img src="./star.png" class="smallestStar seventh_star"  alt="star">
  <img src="./star.png" class="smallestStar eighth_star"  alt="star">
  <img src="./star.png"  class="first_star" alt="star">
  <img src="./star.png" class="second_star" alt="star">
  <img src="./star.png" class="third_star" alt="star">
  <img src="./star.png" class="fourth_star" alt="star">
  <img src="./trophy.png" class="trophy" alt="trophy">
</div>
<p class="hurrayText">HURRAY!!</p>
<p class="winningText">YOU WON THE GAME</p>
<button class="btnPlay margin_top_playbtn" onclick="renderHomePage()">PLAY AGAIN</button>

 </div>
`

newElement.innerHTML=newContent;

document.body.append(newElement)




}
