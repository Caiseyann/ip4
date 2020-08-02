$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});

function myFunction() {
    alert("To order fill the order box at the bottom of the page!");
  }

  $(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var pizza = $("input#pizzatype").val();
        var topping = $("input#topping").val();
        var crust = $("input#crusttype").val();
        var quanity = $("input#quantity").val();
        $("#pizza").text(pizzaInput);
        $("#topping").text(toppingInput);
        $("#crust").text(crustInput);
        $("#quantity").text(quantityInput);

        $("#story").show();

        event.preventDefault();
    });
});