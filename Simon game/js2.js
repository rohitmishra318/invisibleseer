var audio3=new Audio("3.mp3");
var audio1=new Audio("1.mp3");    //b1=3
var audio2=new Audio("2.mp3");     //b2=1
var audio4=new Audio("4.mp3");     //b3=3
var count1=0;
var count2=0;
var count3=0;
var count4=0;
let fruits = ["green", "red", "yellow"];
var sequence=Math.floor(Math.random()*3);



                      //b4=3
$(document).keypress(function(){

    $("h1").text("LEVEL 1");
    $("h2").text("");

    $(".b1").click();//count1=1
                     //onclicking count1=2
    setTimeout(function () {if(count1==2)     //level 2
        {
            $("h1").text("LEVEL 2");
            $(".b1").click();   
            setTimeout( function(){$(".b1").click();
            },4000) ;  //count1=4
      
        }

},9000);   
      
           //onclicking count1=6
   setTimeout(function(){

         if(count1==6)
            {
                $("h1").text("LEVEL 3");
                $(".b1").click();   
                setTimeout( function(){$(".b1").click();
                },4000) ; //count1=8
                setTimeout( function(){$(".b2").click();
                },8000) ; //count2=1
                
            }
            else{

            }

   },16000);
     
   setTimeout(function (){
       if(count1==10&&count2==2)
        {
    $("h1").text("LEVEL 4");
    $(".b1").click();   
    setTimeout( function(){$(".b1").click();
    },4000)   //count1=12
    setTimeout( function(){$(".b2").click();
    },4000)    //count2=3
    setTimeout( function(){$(".b3").click();
    },4000)    //count3=1
    
        }


   },12000);

     
    
    


    
})

function sound1()
{    count1++;  
    document.querySelector(".b1").classList.add("clicked");
      setTimeout(function (){
        document.querySelector(".b1").classList.remove("clicked");

      },2000);
     
    audio1.play();
}


function sound2()
{   count2++;
    document.querySelector(".b2").classList.add("clicked");
      setTimeout(function (){
        document.querySelector(".b2").classList.remove("clicked");

      },2000);
    audio2.play();
}

function sound3()
{   count3++;
    document.querySelector(".b3").classList.add("clicked");
      setTimeout(function (){
        document.querySelector(".b3").classList.remove("clicked");

      },2000);
    audio3.play();
}

function sound4()
{   count4++;
    document.querySelector(".b4").classList.add("clicked");
      setTimeout(function (){
        document.querySelector(".b4").classList.remove("clicked");

      },2000);
    audio4.play();
}