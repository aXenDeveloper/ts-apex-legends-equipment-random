import removePopup from './removePopup';

const popup = (title: string, text: string) => {
  const schemaPopup = `
  <div class="popup_box" style="top: ${document.documentElement.scrollTop}px;">
    <div class="animation_fadeInDown">
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
  popupBackground.className = 'popup_background animation_fadeIn';

  // Push to HTML
  document.body.appendChild(popupSection);
  popupSection.appendChild(popupBackground);

  const querySelectorPopup = document.querySelector('.popup');
  removePopup(querySelectorPopup);
};

export default popup;
