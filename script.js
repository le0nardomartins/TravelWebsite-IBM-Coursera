const filterButtons = document.querySelectorAll(".filter-button");
const heroButtons = document.querySelectorAll(".hero-actions button");
const recommendationSections = document.querySelectorAll(
  ".recommendation-section"
);

const setActiveButton = (selectedButton) => {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button === selectedButton);
  });
};

const filterRecommendations = (filterValue) => {
  recommendationSections.forEach((section) => {
    const matches =
      filterValue === "all" || section.dataset.category === filterValue;
    section.classList.toggle("hidden", !matches);
  });
};

const handleFilterClick = (event) => {
  const filterValue = event.currentTarget.dataset.filter;
  setActiveButton(event.currentTarget);
  filterRecommendations(filterValue);
};

filterButtons.forEach((button) => {
  button.addEventListener("click", handleFilterClick);
});

heroButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const filterValue = event.currentTarget.dataset.filter;
    filterRecommendations(filterValue);
    const matchingButton = Array.from(filterButtons).find(
      (item) => item.dataset.filter === filterValue
    );
    if (matchingButton) {
      setActiveButton(matchingButton);
    }
    const recommendationTop = document.querySelector(".recommendations");
    if (recommendationTop) {
      recommendationTop.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    if (status) {
      status.textContent =
        "Thanks! Your message has been sent. We'll reply soon.";
    }
    contactForm.reset();
  });
}

