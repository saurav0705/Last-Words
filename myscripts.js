
    $(window).resize(function(){
        var x=$(window).width();
        
        if(x<=620)
        {
        $("#mobile").css("display","block");
        $("#bigger-screens").css("display","none");
        $("#signin-form").css("left","7%");
    $("#signup-form").css("left","7%");
    $("#decoy").css("height","50px");
    $("#signin-form").css("left","7%");
    $("#create-new").css("left","7%");
    $("#video-container").css("left","1%");    
} 
        else
        {
        $("#mobile").css("display","none");
        $("#bigger-screens").css("display","block");
        $("#signin-form").css("left","40%");
    $("#signup-form").css("left","40%");
    $("#decoy").css("height","123.2px");
    $("#video-container").css("left","25%");
    $("#create-new").css("left","40%");
        } 
        });
        function detect(){
        var x=$(window).width();
        
        if(x<=620)
        {
        $("#mobile").css("display","block");
        $("#bigger-screens").css("display","none");
        $("#signin-form").css("left","7%");
    $("#signup-form").css("left","7%");
    $("#decoy").css("height","50px");
    $("#video-container").css("left","1%");
    $("#create-new").css("left","7%");
        } 
        else
        {
        $("#mobile").css("display","none");
        $("#bigger-screens").css("display","block");
        $("#signin-form").css("left","40%");
    $("#signup-form").css("left","40%");
    $("#decoy").css("height","123.2px");
    $("#video-container").css("left","25%");
    $("#create-new").css("left","40%");
        } 
        }   
    
        function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){
$(".libutton").click(function(){
    $("#contain").css("pointer-events","none");
    $("#contain").css("overflow","hidden");
    document.getElementById('contain').style.filter='blur(5px)'
    document.getElementById('signin-form').style.display='block';
    
});
});
$(document).ready(function(){
$(".subutton").click(function(){
    $("#contain").css("pointer-events","none");
    closeNav();
    document.getElementById('contain').style.filter='blur(15px)'
    document.getElementById('signup-form').style.display='block';
});
});
function show()
{
    document.getElementById('contain').style.filter='blur(5px)';
    document.getElementById('signin-form').style.display='block';
}
$(document).ready(function(){
$(".close").click(function(){
    document.getElementById('contain').style.filter='none'
    $("#signin-form").css("display","none");
    $("#signup-form").css("display","none");
    $("#create-new").css("display","none");
    $("#contain").css("pointer-events","all");
});
});
$(document).ready(function(){
$("a").click(function(){
    $("a").css("border-bottom","none"); 
    $(this).css("border-bottom","2px solid white");
   
});
});
$(document).ready(function(){
    $(".home").click(function(){
        document.getElementById("mySidenav").style.width = "0";
       $("#content").css("display","block");
       $("#creator").css("display","none");
       $("#about").css("display","none");
       $("#userdata").css("display","none");
    });
    });
    $(document).ready(function(){
        $(".creator").click(function(){
            document.getElementById("mySidenav").style.width = "0";
           $("#content").css("display","none");
           $("#creator").css("display","block");
           $("#about").css("display","none");
           $("#userdata").css("display","none");
        });
        });
        $(document).ready(function(){
            $(".about").click(function(){
                document.getElementById("mySidenav").style.width = "0";
               $("#content").css("display","none");
               $("#creator").css("display","none");
               $("#about").css("display","block");
               $("#userdata").css("display","none");
            });
            });
            $(document).ready(function(){
                $(".user").click(function(){
                    document.getElementById("mySidenav").style.width = "0";
                   $("#content").css("display","none");
                   $("#creator").css("display","none");
                   $("#about").css("display","none");
                   $("#userdata").css("display","block");
                });
                });
            function login()
            {
                $("#contain").css("position","none");
    $("#contain").css("overflow","none");
                    document.getElementById('contain').style.filter='none'
                    $("#signin-form").css("display","none");
                    $("#signup-form").css("display","none");
                    $("#contain").css("pointer-events","all");
                    document.getElementById("mySidenav").style.width = "0";
                $(".LI").css("display","block");
                $(".notLI").css("display","none");
                $(".logged-in").css("display","block");
            }
            $(document).ready(function(){
                $(".logout").click(function(){
                    document.getElementById("mySidenav").style.width = "0";
                    $(".LI").css("display","none");
                $(".notLI").css("display","block");
                $(".logged-in").css("display","none");
                $("#userdata").css("display","none");
                $("#content").css("display","block");
                $(".home").css("border-bottom","2px solid white");
            });
                });
                $(document).ready(function(){
                    $(".add").click(function(){
                        var x=document.getElementById("add_n").style.display;
                        if(x=="none"){
                        $("#add_n").fadeIn();
                        $(".add").css("filter","grayscale(100%)");
                        }
                        else
                        {
                            $("#add_n").css("display","none");
                            $(".add").css("filter","grayscale(0%)");
                        }
                    });
                    });
                    $(document).ready(function(){
                        $(".f1st").click(function(){
                            $("#contain").css("pointer-events","none");
                            document.getElementById('contain').style.filter='blur(5px)'
                            document.getElementById('create-new').style.display='block';
                            $(".new").css("display","none");
                            $(".upload").css("display","block");
                        });
                        $(".s2nd").click(function(){
                            $("#contain").css("pointer-events","none");
                            document.getElementById('contain').style.filter='blur(5px)'
                            document.getElementById('create-new').style.display='block';
                            $(".new").css("display","block");
                            $(".upload").css("display","none");
                        });
                        $(".cr").click(function(){
                            $("#video-container").css("display","none");
                            $("#create-new").css("filter","none");
       
                        });
                    });
                    function submit()
                    {
                        document.getElementById("upnav").style.height = "0";
                        document.getElementById('contain').style.filter='none';
                        $("#signin-form").css("display","none");
                        $("#signup-form").css("display","none");
                        $("#create-new").css("display","none");
                        $("#contain").css("pointer-events","all");
                        alert("success");
                    }
                    function cr(){
                        $("#video-container").css("display","none");
                        $("#create-new").css("filter","none");
                     document.getElementById("video-container").pause();
                    }
                    function add_rec(){
                        var x=document.getElementById("recipients");
                        var y=document.createElement("input");
                        x.appendChild(y);
                    }
                    function open_Nav() {
                        document.getElementById("upnav").style.height = "100%";
                        var d = new Date();
                        document.getElementById("message_recorded").innerHTML = d.toDateString();
                        var z=document.getElementById("time").value;
                        var days=z/24;
                        var hrs=z%24;
                        
                        var x=document.getElementById("title").value;
                        document.getElementById("show_title").innerHTML =x;
                        var y=document.getElementById("summ").value;
                        document.getElementById("show_summ").innerHTML = y;
                    }
                    
                    function close_Nav() {
                        document.getElementById("upnav").style.height = "0";
                    }
                    function verify()
                    {
                        $("#verification-page").css("display","none");
                        $("#contain").css("filter","blur(0px)");
                        $("#contain").css("overflow","auto");
                        $("#contain").css("pointer-events","all");
                        confirm1();
                    }
                    function sup()
                    {
                        $("#verification-page").css("display","block");
                        $("#signup-form").css("display","none");
                        $("#contain").css("filter","blur(10px)");
                        $("#contain").css("pointer-events","none");
                        var verify=Math.random();
                        verify=parseInt(verify*1000000);
                        alert(verify);
                        

                    }
                    function confirm1()
                    {
                        $("#contain").css("filter","blur(5px)");
                        $("#contain").css("pointer-events","none");
                        $(".confirmation").css("display","block");
                    }

                    function ok()
                    {
                        alert("working");
                            $("#contain").css("filter","grayscale(100%)");
                            alert("kdn");
                            $("#contain").css("pointer-events","all");
                            $(".confirmation").css("display","none");
                        }