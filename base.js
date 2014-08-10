var index = 0;

function changeName() {

  var names = ['picnic', 'office party', 'boat ride', 'get together'];
  var total = names.length;
  index = (index+1)%(total);
  var word = names[index];
  $( "#changeplace" ).hide().html( word ).fadeIn("slow");

}

$( document ).ready(function() {

  $(function() {
    $( "#datepicker" ).datepicker();
  });
  var changed = setInterval(function(){changeName()},3000);

});

