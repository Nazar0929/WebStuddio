

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
  
  
  