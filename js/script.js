(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
    const modalBackdrop = document.getElementById('modalBackdrop');
  })();

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







  // Получаем все элементы с классом 'item'
const items = document.querySelectorAll('.item');

// Функция для проверки видимости элементов
function checkVisibility() {
    items.forEach(item => {
        const rect = item.getBoundingClientRect(); // Получаем положение элемента относительно окна
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Если элемент видим на экране
            if (item.classList.contains('left-item')) {
                item.style.animation = 'slideInLeft 1s ease-in-out forwards';
            } else if (item.classList.contains('right-item')) {
                item.style.animation = 'slideInRight 1s ease-in-out forwards';
            } else if (item.classList.contains('center-item')) {
                item.style.animation = 'fadeIn 1s ease-in-out forwards';
            }
            item.classList.add('visible'); // Добавляем класс для обозначения видимости
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', checkVisibility);

// Проверяем видимость при загрузке страницы
document.addEventListener('DOMContentLoaded', checkVisibility);



