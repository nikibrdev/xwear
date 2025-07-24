document.addEventListener('DOMContentLoaded', function() {
  const faqContainer = document.querySelector('[data-faq]');

  // Если компонента FAQ нет на странице - выходим
  if (!faqContainer) return;

  const faqItems = faqContainer.querySelectorAll('[data-faq-item]');
  const activeClass = 'is-active';

  // Инициализация - закрываем все ответы
  const closeAllItems = () => {
    faqItems.forEach(item => {
      item.querySelector('[data-faq-content]').style.maxHeight = '0';
      item.querySelector('[data-faq-toggle]').classList.remove(activeClass);
    });
  };

  // Обработчик клика
  const handleItemClick = (item) => {
    const toggle = item.querySelector('[data-faq-toggle]');
    const content = item.querySelector('[data-faq-content]');
    const isActive = toggle.classList.contains(activeClass);

    closeAllItems();

    if (!isActive) {
      toggle.classList.add(activeClass);
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };

  // Навешиваем обработчики
  faqItems.forEach(item => {
    const toggle = item.querySelector('[data-faq-toggle]');

    toggle.addEventListener('click', () => handleItemClick(item));

    // Инициализируем все ответы как закрытые
    item.querySelector('[data-faq-content]').style.maxHeight = '0';
  });

  // Опционально: открыть первый элемент по умолчанию
  // if (faqItems.length > 0) {
  //   handleItemClick(faqItems[0]);
  // }
});
