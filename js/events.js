//define functions here
function getIt() {
  // set up event handler to pay attention to p tag
  $( "p" ).click(function() {
    alert( "Hey!" );
  });
}

function frameIt(){
// bind the load event that adds the class tasty to the image to add a red frame to the image
   $("img").on('load', function() {
        $(this).attr('tasty').css('border', "solid 2px red");
    });
}


$(document).ready(function(){

// call functions here

});
