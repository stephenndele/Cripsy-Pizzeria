
function getSizeCost() {
  var selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}

function getCrustCost() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getNumber() {
  var selectedNumber = document.getElementById("numberofpizza").value;
  return parseInt(selectedNumber);
}
function mushrooms() {
  var mushroom = 0;
  var addMushroom = document.getElementById("toppingone");
  if (addMushroom.checked === true) {
      mushroom = 200;
  }
  return parseInt(mushroom);
}

function sausages() {
  var sausage = 0;
  var addsausage = document.getElementById("toppingone");
  if (addsausage.checked === true) {
      sausage = 180;
  }
  return parseInt(sausage);
}
function onions() {
  var onion = 0;
  var addonions = document.getElementById("toppingone");
  if (addMushroom.checked === true) {
      onion = 150;
  }
  return parseInt(onion);
}
function tikkaSaucee() {
  var tikkaSauce = 0;
  var addtikkaSauce = document.getElementById("toppingone");
  if (addtikkaSauce.checked === true) {
      tikkaSauce = 100;
  }
  return parseInt(tikkaSauce);
}
function mozarellaCheese() {
  var cheese = 0;
  var addmozarellaCheese = document.getElementById("toppingone");
  if (addmozarellaCheese.checked === true) {
      cheese = 110;
  }
  return parseInt(cheese);
}

function calctotalPrice(e) {
  event.preventDefault();
  var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
  
      console.log(totalPrice);
  alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +" Kindly fill in delivery details." )

}



// Delivery form inputs and alerts



$(document).ready(function () {
  $("#delivery").submit(function () {

      var name = $("input#name").val();
      var number = $("input#number").val();
      var location = $("input#location").val();

      alert("Hello " + name + ". Your order of " + getNumber() + " pizzas has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria Kitchen.");
      // $(this).get(0).reset();
      //  event.preventDefault();
  });
  
});
$(document).ready(function() {
  

  
  

  $("form#contact-form").on("submit", function(event) {
    event.preventDefault();
    let name = $("input#form_name").val();
    let email= $("input#form_email").val();
    let message = $("input#form_message").val();
    let result = ("Hello " + name + " we received your feedback. Thank you for taking your time to tell us about ours services");

    $("#output").text(result);

    // if($("input#form_name").val() && $("input#form_email").val() && $("input#form_message").val() ){
    //   alert("Hello" + name + "Thanks for reaching, we'll reach out to you soon! ");
    // }
    // else if ($("input#form_name").val() && $("input#form_email").val() ){
    //   alert("Kindly leave a message");
    // }

  });



  });


