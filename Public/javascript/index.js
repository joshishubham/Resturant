console.log("Javascript is here ..")

$(document).ready(function(){
    $('#bars').click(function() {
        $('header li').css('display', 'block');
            $('#bars').addClass('fa-times ');
    });
});

$(function() {
    $('header ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  });
  
function Pwd() {
    var show= document.getElementById('pwd');
      console.log(show)
        if (show.type=== 'password') {
             show.type= 'text';
        } 
        else {
             show.type= 'password';
        } 
}