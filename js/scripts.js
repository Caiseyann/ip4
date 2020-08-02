
function myFunction() {
    alert("To order fill the order box at the bottom of the page!");
  }
  function display_alert()
 {
 alert("Thank you for ordering through the Pizza Tag, your balance is $10 and your order is being processed and will be delivered shortly. Kindly note that orders outside Nairobi will not be delivered but ignored to order outside Nairobi contact us as thepizzatag@gmail.com");
 }

  $(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);
        $("#story").show();

        event.preventDefault();
    });
});

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});





