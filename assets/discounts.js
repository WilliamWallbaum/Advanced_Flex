// Assuming you have the necessary authentication and Shopify API setup

// Make a request to the Discounts endpoint
fetch("/admin/api/2021-09/discounts.json")
  .then((response) => response.json())
  .then((data) => {
    // Access the list of discounts
    const discounts = data.discounts;

    // Iterate over the discounts and display the information
    discounts.forEach((discount) => {
      console.log("Title:", discount.title);
      console.log("Amount:", discount.amount);
      console.log("---");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
