function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }
  let options = { threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elementss = document.querySelectorAll('.container');
  for (let elm of elementss) {
    observer.observe(elm);
  }


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