$(document).ready(function(){
    $('#websiteAddress').keypress(function(e){
      if(e.keyCode==13)
      $('#subUrl').click();
    });
});