(() => {
  const element = document.querySelector('[data-trigger]');
  if (!element) return;

  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });
})
  ();
