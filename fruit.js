var playing=false;
var score;
var trailsleft;
var step;
var action;
var fruits=['apple','banana','cherries','grapes','mango','orange','peach','pear','watermelon'];

$(function(){
    $("#startreset").click(function(){
        if(playing==true){
            location.reload();

        }else{
            playing=true;
            score=0;
            $("#scorevalue").html(score);
            $("#trailsleft").show();
            trailsleft=3;
            addHearts();
            $("#gameOver").hide(); 
            $("#startreset").html("Reset Game");
            startAction();

        }
    });


$("#fruits").mouseover(function(){
    score++;
    $("#scorevalue").html(score);
    document.getElementById("slicesound").play();
    clearInterval(action);
    $("#fruits").hide("explode",500);
    setTimeout(startAction,500);
})

function addHearts(){
    $("#trailsleft").empty();
for(i=0;i<trailsleft;i++){
    $("#trailsleft").append('<img src="heart.png" class="life">');
    }

}


function startAction()
{
   $("#fruits").show();
   choosefruit();
   $("#fruits").css({'left':Math.round(550*Math.random()),'top':-50});
   step=1+Math.round(3*Math.random());
    action= setInterval(function(){
    $("#fruits").css('top',$("#fruits").position().top+step);
    if($("#fruits").position().top>$("#fruitcontainer").height()){

        if(trailsleft>1){
            $("#fruits").show();
            choosefruit();
            $("#fruits").css({'left':Math.round(550*Math.random()),'top':-50});
            step=1+Math.round(3*Math.random());

            trailsleft--;
            addHearts();
            startAction();
           
        }else{
            playing=false;
            $("#startreset").html("Start Game");
            $("#gameOver").show();
            $("#gameOver").html('<p>Game Over:</p><p>Your Score is '+score+'</p>');
            $("#trailsleft").hide();
            stopAction();

        }
    }
   },10);
}


function stopAction()
{
    clearInterval(action);
    $("#fruits").hide();
    
}



function choosefruit()
{
    $("#fruits").attr('src',fruits[Math.round(8*Math.random())]+'.png');

}

});