function moreDescription() {
  desc = document.getElementById("more-description").style;

  desc.display == "none" ? desc.display = "block" : desc.display = "none";
}

function addedToCartAlert(productName) {
  alert("Added " + productName + " to cart.");
}