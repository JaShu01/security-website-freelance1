function initDesktop() {
  // Общий код для всех кнопок с классом rounded-button
  const buttons = document.querySelectorAll(".rounded-button");

  buttons.forEach(function (button) {
    button.addEventListener("mousedown", function () {
      button.style.backgroundColor = "#b37100";
    });

    button.addEventListener("mouseup", function () {
      button.style.backgroundColor = "#e68a00";
    });
  });

  // Код для кнопки отправки формы
  const submitButton = document.getElementById("submit-button");
  const nameInput = document.getElementById("name-input");
  const contactInput = document.getElementById("contact-input");
  const thankYouPopup = document.getElementById("thank-you-popup");
  const closeButton = document.getElementById("close-btn");

  const buttonBackground = document.createElement("div");
  buttonBackground.className = "button-background";
  submitButton.appendChild(buttonBackground);

  submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    if (nameInput.value.trim() === '' || contactInput.value.trim() === '') {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    const formData = new FormData();
    formData.append('contact', nameInput.value);
    formData.append('message', contactInput.value);

    fetch('https://formspree.io/f/xdoryoqr', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Добавляем эту строку
    })
    .then(() => {
        // Так как ответ непрозрачный, мы просто предполагаем, что форма была отправлена успешно
        nameInput.value = "";
        contactInput.value = "";
        thankYouPopup.style.display = "block";
    })
    .catch(error => {
        console.error("There was an error sending the form", error);
    });
});





  closeButton.addEventListener("click", function () {
    thankYouPopup.style.display = "none";
  });

  // Новый код для вашего поп-апа
  const newPopup = document.getElementById("new-popup");
  const closeNewPopup = document.getElementById("close-new-popup");
  const contactUsPopup = document.getElementById("contact-us-popup");
  const weContactPopup = document.getElementById("we-contact-popup");
  const closeContactUsPopup = document.getElementById("close-contact-us-popup");
  const closeWeContactPopup = document.getElementById("close-we-contact-popup");
  const contactUsBtn = document.getElementById("contact-us-btn");
  const weContactBtn = document.getElementById("we-contact-btn");
  const firstButton = document.querySelector(".rounded-button"); // предположим, что это ваша первая кнопка "Jetzt Kontakt aufnehmen"

  // Показываем новый поп-ап, когда пользователь кликает на "Jetzt Kontakt aufnehmen"
  firstButton.addEventListener("click", function () {
    newPopup.style.display = "block";
  });

  // Закрыть новый поп-ап
  closeNewPopup.addEventListener("click", function () {
    newPopup.style.display = "none";
  });

  // Показать поп-ап "Kontaktieren Sie uns gleich"
  contactUsBtn.addEventListener("click", function () {
    newPopup.style.display = "none";
    contactUsPopup.style.display = "block";
  });

  // Закрыть поп-ап "Kontaktieren Sie uns gleich"
  closeContactUsPopup.addEventListener("click", function () {
    contactUsPopup.style.display = "none";
  });

  // Новый код для открытия и закрытия нового модального окна
  const weContactPopupDetails = document.getElementById(
    "we-contact-popup-details"
  );
  const closeWeContactPopupDetails = document.getElementById(
    "close-we-contact-popup-details"
  );
  const submitButtonDetails = document.getElementById("submit-button-details");
  const nameInputDetails = document.getElementById("name-input-details");
  const contactInputDetails = document.getElementById("contact-input-details");

  // Показать новое модальное окно "Wir kontaktieren Sie gleich"
  weContactBtn.addEventListener("click", function () {
    newPopup.style.display = "none";
    weContactPopupDetails.style.display = "block";
  });

  // Закрыть новое модальное окно
  closeWeContactPopupDetails.addEventListener("click", function () {
    weContactPopupDetails.style.display = "none";
  });

  // Обработка нажатия на новую кнопку
  submitButtonDetails.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    if (nameInputDetails.value.trim() === '' || contactInputDetails.value.trim() === '') {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    const formDataDetails = new FormData();
    formDataDetails.append('contact', nameInputDetails.value);
    formDataDetails.append('message', contactInputDetails.value);

    fetch('', {
        method: 'POST',
        body: formDataDetails,
        mode: 'no-cors'
    })
    .then(() => {
        // Предполагаем, что форма была успешно отправлена
        nameInputDetails.value = "";
        contactInputDetails.value = "";
        thankYouPopup.style.display = "block";
        weContactPopupDetails.style.display = "none";
    })
    .catch(error => {
        console.error("There was an error sending the form", error);
    });
});

  const swiper = new Swiper(".swiper-container", {
    // Настройки Swiper здесь...
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      click: function (swiper, e) {
        const clickedIndex = swiper.clickedIndex;
        swiper.slideTo(clickedIndex);
      },
    },
  });
   // Добавьте этот код в конец вашего JS-файла
   
   const burgerMenu = document.querySelector('.burger-menu');
   const navbarMenu = document.querySelector('.navbar-menu');
   
   if (burgerMenu && navbarMenu) {
     burgerMenu.addEventListener('click', function() {
       navbarMenu.classList.toggle('active');
     });
   }
   
}
// Если вы хотите, чтобы функции выполнялись при загрузке страницы, то:
document.addEventListener('DOMContentLoaded', initDesktop);
