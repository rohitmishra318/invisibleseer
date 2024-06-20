
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage1="images/dice"+randomnumber1+".png";
var randomimage2="images/dice"+randomnumber2+".png";
document.getElementById("image1").setAttribute("src", randomimage1);
document.getElementById("image2").setAttribute("src", randomimage2);
if(randomnumber1>randomnumber2)
    document.getElementById("winner").innerHTML="the winner is 1st player";
else if(randomnumber1==randomnumber2)
    document.getElementById("winner").innerHTML="This is draw ";
else
document.getElementById("winner").innerHTML="the winner is 2nd player";