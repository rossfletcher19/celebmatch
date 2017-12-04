$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name1 = $("input#name1").val();
    var age1 = parseInt($("input#age1").val());

    i

    // user logic
    $(".name1").text(name1);


    event.preventDefault();
  });
});
