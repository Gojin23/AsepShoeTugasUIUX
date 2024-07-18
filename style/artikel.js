document
.getElementById("read-more-btn")
.addEventListener("click", function (event) {
  event.preventDefault();
  var card = document.getElementById("article-card");
  card.classList.toggle("card-expanded");
  this.textContent =
    this.textContent === "read more" ? "read less" : "read more";
});