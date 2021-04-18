const removePopup = (querySelectorPopup: Element | null) => {
  const removeWithAnimation = () => {
    const querySelectorPopupHTML = querySelectorPopup as HTMLElement;
    const querySelectorPopupHTMLDiv = querySelectorPopup?.querySelector(
      '.popup_box > div'
    ) as HTMLElement;

    querySelectorPopupHTMLDiv.classList.remove('animation_fadeInDown');
    querySelectorPopupHTMLDiv.classList.add('animation_fadeOutDown');

    if (querySelectorPopupHTML) querySelectorPopupHTML.classList.add('animation_fadeOut');

    setInterval(() => {
      querySelectorPopup?.remove();
    }, 300);
  };

  // Remove popup when click outside div
  querySelectorPopup?.addEventListener('click', removeWithAnimation);

  // Remove popup when click X (exit) button
  querySelectorPopup
    ?.querySelector('.popup_box_header_close')
    ?.addEventListener('click', removeWithAnimation);

  // Disable remove popup in popup_box
  querySelectorPopup?.querySelector('.popup_box > div')?.addEventListener('click', e => {
    e.stopPropagation();
  });
};

export default removePopup;
