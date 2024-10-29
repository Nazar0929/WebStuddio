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


console.log("Скрипт загружен"); // Проверка загрузки скрипта

// Функция для проверки видимости элементов
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        // Проверка, виден ли элемент в области просмотра
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible'); // Добавляем класс для плавного появления
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Вызываем функцию сразу, чтобы обработать элементы, которые могут быть видны изначально
handleScroll();














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



