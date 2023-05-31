function addToCart(variantIds) {
  var formData = new FormData();
  variantIds.forEach(function (variantId) {
    formData.append("id[]", variantId);
  });

  fetch("/cart/add.js", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      // Handle the response as needed
      // For example, you can check if the variants were successfully added to the cart
      if (response.ok) {
        console.log("Variants added to the cart successfully!");
        // Proceed to the cart page
        window.location.href = "/cart";
      } else {
        console.error("Failed to add variants to the cart.");
        // Handle the error case as needed
      }
    })
    .catch(function (error) {
      console.error(
        "An error occurred while adding variants to the cart:",
        error
      );
      // Handle the error case as needed
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var addPairButtons = document.querySelectorAll(".add-pair-button");
  if (addPairButtons) {
    addPairButtons.forEach(function (addPairButton) {
      addPairButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Get the left and right variant IDs from the data attributes
        var leftVariantId = addPairButton.getAttribute("data-left-variant");
        var rightVariantId = addPairButton.getAttribute("data-right-variant");

        // Trigger addToCart function with both variant IDs
        var variantIds = [leftVariantId, rightVariantId];
        addToCart(variantIds);
      });
    });
  }
});
