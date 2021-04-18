const popup = (title: string, text: string) => {
  const schemaPopup = `
  <div class="popup_box" style="top: ${document.documentElement.scrollTop}px;">
    <div>
      <header class="popup_box_header">
        <h3>${title}</h3>
        <button class="popup_box_header_close">X</button>
      </header>

      <div class="popup_box_content">${text}</div>
    </div>
  </div>
  `;

  const popupSection = document.createElement('section');
  popupSection.className = 'popup';
  popupSection.innerHTML = schemaPopup;

  const popupBackground = document.createElement('div');
  popupBackground.className = 'popup_background';

  // Push to HTML
  document.body.appendChild(popupSection);
  popupSection.appendChild(popupBackground);

  const querySelectorPopup = document.querySelector('.popup');

  // Remove popup when click outside div
  querySelectorPopup?.addEventListener('click', () => {
    querySelectorPopup.remove();
  });

  // Remove popup when click X (exit) button
  querySelectorPopup?.querySelector('.popup_box_header_close')?.addEventListener('click', () => {
    querySelectorPopup.remove();
  });

  // Disable remove popup in popup_box
  querySelectorPopup?.querySelector('.popup_box > div')?.addEventListener('click', e => {
    e.stopPropagation();
  });
};

export default popup;
