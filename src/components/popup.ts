export default (title: string, text: string) => {
  const schemaPopup = `
  <div class="popup_box" style="top: ${document.documentElement.scrollTop}px;">
    <div>
      <header class="popup_box_header">
        <h3>${title}</h3>
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

  // Disable remove popup in popup_box
  querySelectorPopup?.querySelector('.popup_box > div')?.addEventListener('click', e => {
    e.stopPropagation();
  });
};
