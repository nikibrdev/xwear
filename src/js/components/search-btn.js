document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.querySelector('.header__search-btn');
  const searchInput = document.querySelector('.header__search-input');
  const nav = document.querySelector('.nav');

  searchBtn.addEventListener('click', function() {
    searchInput.classList.toggle('header__search-input--active');
    nav.classList.toggle('hidden');

    if (searchInput.classList.contains('header__search-input--active')) {
      searchInput.focus();
    }
  });

  // Закрытие поиска при клике вне области
  // document.addEventListener('click', function(e) {
  //   if (!e.target.closest('.header__search') && searchInput.classList.contains('active')) {
  //     searchInput.classList.remove('active');
  //     nav.classList.remove('hidden');
  //   }
  // });
});
