var playing=false;
var score;
var action;
var time;
var correctanswer;
var jai=0;
hide("gameOver");
document.getElementById("startreset").onclick=
function(){
    if(playing==true)
    {   
        
        location.reload();
    
    }else{
            score=0;
            playing=true;
            show("timeremaining");
            time=60;
            document.getElementById("time").innerHTML=time;
            hide("gameOver");
            document.getElementById("startreset").innerHTML="Reset Game";
            startcountdown();

            generateQA();

    }

}


function generateQA()
{
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctposition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctanswer;

    var answers=[correctanswer];
    for(i=1;i<5;i++){
        if(i!==correctposition){
            var wronganswer;
            
            do{
                wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            
            }while(answers.indexOf(wronganswer)>-1)

            document.getElementById("box"+i).innerHTML=wronganswer;
            answers.push(wronganswer);
        }

    }
        

}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=
function(){
    if(playing==true)
    {
        if(this.innerHTML==correctanswer){
            score++;
            document.getElementById("score").innerHTML=score;
            
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQA();
        }else{
            jai++;
            if(jai==2){
                score-=1;
                document.getElementById("score").innerHTML=score;
                jai=0;

            }
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);

        }
    }
}

}


function startcountdown(){
    action=setInterval(function(){
        time-=1;
        document.getElementById("time").innerHTML=time;
        if(time==0)
        {
           stopcountdown(); 
           show("gameOver");
           document.getElementById("gameOver").style.visibility="visible";
           document.getElementById("gameOver").innerHTML="<p>game over</p><p>Score is "+score+".</p>";
           hide("timeremaining");
           hide("correct");
           hide("wrong");         
           playing=false;
           document.getElementById('startreset').innerHTML="Start Game";
        }

    },1000)
}



function hide(id){
    document.getElementById(id).style.display="none";
}


function show(id){
    document.getElementById(id).style.display="block";
}

function stopcountdown(){
    clearInterval(action);


}