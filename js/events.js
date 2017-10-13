//define functions here
function getIt() {
  // set up event handler to pay attention to p tag
  $('p').on('click',function(clicked){
    if (clicked.which === true){
      alert('Hey!');
    }
  });
}



$(document).ready(function(){

// call functions here

});
