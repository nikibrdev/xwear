import { disableScroll } from '../functions/disable-scroll.js';
import { enableScroll } from '../functions/enable-scroll.js';

(function () {
  const filtresBtn = document?.querySelector('.filters__inner-btn--filters');
  const filtresBtnClose = document?.querySelector('.filters__items-btn');
  const menuFiltres = document?.querySelector('[data-menu-filtres]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  filtresBtn?.addEventListener('click', (e) => {
    filtresBtn?.classList.toggle('filtresBtn--active');
    menuFiltres?.classList.toggle('menuFiltres--active');
    overlay?.classList.toggle('overlay--active');

    if (menuFiltres?.classList.contains('menuFiltres--active')) {
      filtresBtn?.setAttribute('aria-expanded', 'true');
      filtresBtn?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      filtresBtn?.setAttribute('aria-expanded', 'false');
      filtresBtn?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  filtresBtnClose?.addEventListener('click', (e) => {
    filtresBtn?.classList.toggle('filtresBtn--active');
    menuFiltres?.classList.toggle('menuFiltres--active');
    overlay?.classList.toggle('overlay--active');

    if (menuFiltres?.classList.contains('menuFiltres--active')) {
      filtresBtn?.setAttribute('aria-expanded', 'true');
      filtresBtn?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      filtresBtn?.setAttribute('aria-expanded', 'false');
      filtresBtn?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });



  overlay?.addEventListener('click', () => {
    filtresBtn?.setAttribute('aria-expanded', 'false');
    filtresBtn?.setAttribute('aria-label', 'Открыть меню');
    filtresBtn.classList.remove('filtresBtn--active');
    menuFiltres.classList.remove('menuFiltres--active');
    overlay?.classList.toggle('overlay--active');
    enableScroll();
  });


})();
