$(document).ready(function() {
  $("#formOne").submit(function(event) {
event.preventDefault();
    var person1Input = $("input#person1").val().toUpperCase();
    var person2Input = $("input#person2").val().toUpperCase();
    $("h1").text(person1Input);
    $("#story p").text(person2Input);


    $("#story").show();

  });
});
