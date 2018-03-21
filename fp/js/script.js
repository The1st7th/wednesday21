
$(document).ready(function() {
  $("form#schedule").submit(function(event){
    event.preventDefault();
    var firstName =$("#firstName").val();
    var lastName =$("#lastName").val();
    var email =$("#email").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var zip = $("#zip").val();

  });

  $("form#conversion").submit(function(event) {
    event.preventDefault();
    console.log("Form submitted");
    //var flavor = $("input:radio[name=conversionUnitOne]:checked").val();
    var flavor2 = $("input:radio[name=conversionUnitTwo]:checked").val();
    console.log("I AM FALVOR2" + flavor2);
    var flavor = $("input:radio[name=conversionUnitOne]:checked").val();
    console.log("i am flavor" + ", " + flavor);
    var converter= parseInt($("#convertOne").val());
    console.log(converter);
    var converted = function(converter) {
    return converter/3;
  };

  $("#convertTwo").text(converted(converter));


  });
});
//'#filterDay input:radio:checked'
