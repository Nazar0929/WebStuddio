


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const headers = document.querySelectorAll("header");
  const footers = document.querySelectorAll("footer");
  const windowHeight = window.innerHeight;

  // Функція для перевірки видимості елементів
  const checkVisibility = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < windowHeight && sectionBottom > 0) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });

    headers.forEach((header) => {
      const headerTop = header.getBoundingClientRect().top;
      const headerBottom = header.getBoundingClientRect().bottom;

      if (headerTop < windowHeight && headerBottom > 0) {
        header.classList.add("visible");
      } else {
        header.classList.remove("visible");
      }
    });

    footers.forEach((footer) => {
      const footerTop = footer.getBoundingClientRect().top;
      const footerBottom = footer.getBoundingClientRect().bottom;

      if (footerTop < windowHeight && footerBottom > 0) {
        footer.classList.add("visible");
      } else {
        footer.classList.remove("visible");
      }
    });
  };

  // Перевірка видимості елементів при завантаженні сторінки
  checkVisibility();

  // Додаємо обробник прокручування для динамічної перевірки
  window.addEventListener("scroll", checkVisibility);
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
    const filterButtons = document.querySelectorAll(".main__link");
    const projects = document.querySelectorAll(".d");

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filterValue = button.getAttribute("data-filter");

        projects.forEach(function (project) {
          const projectClasses = project.classList;
          // Перевірка: якщо фільтр "all" або проект містить клас із фільтром
          if (filterValue === "all" || projectClasses.contains(filterValue)) {
            project.style.display = "block"; // Показати
          } else {
            project.style.display = "none"; // Сховати
          }
        });
      });
    });
  });
})();




(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  // Скидання стану меню при завантаженні сторінки
  window.addEventListener("load", () => {
    menuBtnRef.setAttribute("aria-expanded", "false");
    menuBtnRef.classList.remove("is-open");
    mobileMenuRef.classList.remove("is-open");
  });

  // Логіка відкриття/закриття меню
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true";

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();




