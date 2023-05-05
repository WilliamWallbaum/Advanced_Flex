const tabHeaders = document.querySelectorAll(".button-item");
const tabContents = document.querySelectorAll(".tab-content");

tabHeaders.forEach((tabHeader) => {
  tabHeader.addEventListener("click", () => {
    const targetContent = document.querySelector(
      tabHeader.querySelector("a").getAttribute("href")
    );

    tabHeaders.forEach((header) => header.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    tabHeader.classList.add("active");
    targetContent.classList.add("active");
  });
});