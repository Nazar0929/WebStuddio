document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    // Если секция полностью или частично в области видимости
    if (sectionTop < windowHeight && sectionBottom > 0) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});








document.addEventListener("scroll", () => {
  const headers = document.querySelectorAll("header");
  const footers = document.querySelectorAll("footer");
  const windowHeight = window.innerHeight;

  // Для header
  headers.forEach((header) => {
    const headerTop = header.getBoundingClientRect().top;
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerTop < windowHeight && headerBottom > 0) {
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
    }
  });

  // Для footer
  footers.forEach((footer) => {
    const footerTop = footer.getBoundingClientRect().top;
    const footerBottom = footer.getBoundingClientRect().bottom;

    if (footerTop < windowHeight && footerBottom > 0) {
      footer.classList.add("visible");
    } else {
      footer.classList.remove("visible");
    }
  });
});





  let styleMode = localStorage.getItem('styleMode');
  const styleToggle = document.querySelector('.header__button');
  
  const enableDarkStyle = () => {
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
  };
  
  const disableDarkStyle = () => {
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', 'light');
  };
  
  styleToggle.addEventListener('click', () => {
    if (styleMode !== 'dark') {
      enableDarkStyle();
    } else {
      disableDarkStyle();
    }
  });
  
  if (styleMode === 'dark') {
    enableDarkStyle();
  }
  
  

const checkbox = document.getElementById('checkbox');

// Перевіряємо, чи є збережений стан в localStorage
if (localStorage.getItem('isChecked') === 'true') {
  checkbox.checked = true;
}

// Додаємо обробник події, який змінює стан зберігання при кліку
checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', checkbox.checked);
});









(() => {

  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter__btn");
    const projects = document.querySelectorAll(".project__item");
  
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filterValue = button.getAttribute("data-filter");
  
        projects.forEach(function (project) {
          const projectClasses = project.classList;
          if (filterValue === "all" || projectClasses.conta
  );
      });
    });
  })})})