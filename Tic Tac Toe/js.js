var num=0;
$(document).keypress(function(){
    $("h2").text("");
})

function change()
{
    if ($(".b1").css("background-image") === $(".b2").css("background-image") &&
    $(".b2").css("background-image") === $(".b3").css("background-image")) {
    $("h3").text("You won");
    }

        if ($(".b1").css("background-image") === $(".b4").css("background-image") && 
            $(".b4").css("background-image") === $(".b7").css("background-image")) {
            $("h3").text("You won");
        }
    
        if ($(".b2").css("background-image") === $(".b5").css("background-image") && 
            $(".b5").css("background-image") === $(".b8").css("background-image")) {
            $("h3").text("You won");
        }
    
        if ($(".b3").css("background-image") === $(".b6").css("background-image") && 
            $(".b6").css("background-image") === $(".b9").css("background-image")) {
            $("h3").text("You won");
        }
    
        if ($(".b4").css("background-image") === $(".b5").css("background-image") && 
            $(".b5").css("background-image") === $(".b6").css("background-image")) {
            $("h3").text("You won");
        }
    
        if ($(".b7").css("background-image") === $(".b8").css("background-image") && 
            $(".b8").css("background-image") === $(".b9").css("background-image")) {
            $("h3").text("You won");
        }
    
        if ($(".b3").css("background-image") === $(".b5").css("background-image") && 
            $(".b5").css("background-image") === $(".b7").css("background-image")) {
            $("h3").text("You won");
        }
    
        if ($(".b1").css("background-image") === $(".b5").css("background-image") && 
            $(".b5").css("background-image") === $(".b9").css("background-image")) {
            $("h3").text("You won");
        }
}
function change1()
{

    if(num==0)
        {

            $(".b1").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b1").css("background-image","url(cross.png)");
        num--;
     }
     
     
     
}
function change2()
{

    if(num==0)
        {

            $(".b2").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b2").css("background-image","url(cross.png)");
        num--;
     }
    }
     function change3()
{

    if(num==0)
        {

            $(".b3").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b3").css("background-image","url(cross.png)");
        num--;
     }


      
}
function change4()
{

    if(num==0)
        {

            $(".b4").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b4").css("background-image","url(cross.png)");
        num--;
     }

     
}
function change5()
{

    if(num==0)
        {

            $(".b5").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b5").css("background-image","url(cross.png)");
        num--;
     }
    }
function change6()
{

    if(num==0)
        {

            $(".b6").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b6").css("background-image","url(cross.png)");
        num--;
     }
     
}
function change7()
{

    if(num==0)
        {

            $(".b7").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b7").css("background-image","url(cross.png)");
        num--;
     }
     
}
function change8()
{

    if(num==0)
        {

            $(".b8").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b8").css("background-image","url(cross.png)");
        num--;
     }
     
}
function change9()
{

    if(num==0)
        {

            $(".b9").css("background-image","url('zero.png')");
            num++;
        }
     else{

        $(".b9").css("background-image","url(cross.png)");
        num--;
     }
    
}
