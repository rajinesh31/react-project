 document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".Portfolio-menu button");
    const items = document.querySelectorAll(".portfolio-custom-row .col");

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");

        // Update active class
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        // Filter portfolio items
        items.forEach(item => {
          if (filter === "*" || item.classList.contains(filter.slice(1))) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });