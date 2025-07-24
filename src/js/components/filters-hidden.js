document.addEventListener('DOMContentLoaded', function () {
  const filterTitles = document.querySelectorAll('.filters__item-title');
  if (filterTitles) {
    filterTitles.forEach(title => {
      title.addEventListener('click', function () {
        title.classList.toggle('isClose')
        const options = this.nextElementSibling;
        options.classList.toggle('filters__options--hidden');
      });
    });
  }
});
