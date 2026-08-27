(() => {
  const slides = [...document.querySelectorAll('.slide')];

  slides.forEach((slide, index) => {
    const content = slide.querySelector('.content');
    if (!content || content.querySelector('.slide-head')) return;

    const pageText = (slide.querySelector('.page')?.textContent || String(index + 1).padStart(2, '0')).trim();
    slide.classList.add(`page-${pageText}`);

    // Remove one-off alignment hacks from the old deck. The new theme owns composition.
    content.removeAttribute('style');

    const children = [...content.children];
    const head = document.createElement('div');
    head.className = 'slide-head';
    const body = document.createElement('div');
    body.className = 'slide-body';

    let cursor = 0;
    const first = children[0];
    const firstIsHeaderGroup = first && first.matches('div') && first.querySelector(':scope > .eyebrow') && first.querySelector(':scope > h1, :scope > h2');

    if (firstIsHeaderGroup) {
      head.append(first);
      cursor = 1;
    } else {
      while (cursor < children.length) {
        const el = children[cursor];
        const isEyebrow = el.classList?.contains('eyebrow');
        const isTitle = el.matches?.('h1,h2');
        const isSubtitle = el.classList?.contains('subtitle') && head.querySelector('h1');
        if (!(isEyebrow || isTitle || isSubtitle)) break;
        head.append(el);
        cursor += 1;
      }
    }

    children.slice(cursor).forEach(el => body.append(el));
    content.replaceChildren(head, body);

    if (body.querySelector('.flow')) slide.classList.add('layout-flow');
    if (body.querySelector('.term')) slide.classList.add('layout-terminal');
    if (body.querySelector('.table')) slide.classList.add('layout-table');
    if (head.querySelector('h1')) slide.classList.add('layout-statement');
  });
})();
