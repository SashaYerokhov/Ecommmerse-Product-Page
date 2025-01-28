const bigImg = document.querySelectorAll(
    ".main__images-default .img__big-product img"
  );
  // console.log(bigImg.length); // 4
  // console.log(bigImg.length-1); // 3
  const smallImg = document.querySelectorAll(
    ".main__images-default .img__small img"
  );
  // console.log(smallImg);
  
  let currentIndex = 0;
  // let counter = 0;
  
  // создаем функцию измения картинок добавив в параметры
  // счетчик индекса картинки, большие и маленькие картинки
  function chageImage(counter, bigImg, smallImg) {
      // перебираем большие картинки и удаляем класс active
    bigImg.forEach((big) => {
      big.classList.remove("active");
    });
  
    smallImg.forEach((small) => {
      // перебираем маленькие картинки и удаляем класс active
      small.classList.remove("active");
    });
    // в большие и маленькие картинки добавляем класс active
    // так чтобы индексы картинок были одинаковы
    bigImg[counter].classList.add("active");
    smallImg[counter].classList.add("active");
    currentIndex = counter;
  }
  
  smallImg.forEach((small, counter) => {
      // добавляем мальньким картинкам событие клик 
      // и вызываем функцию изменения картинок
    small.addEventListener("click", () => {
      chageImage(counter, bigImg, smallImg);
    });
  });
  
  
  // LightBox - кода при нажатии большой картинки открывается новое окно
  const lightbox = document.querySelector(".lightBox");
  // console.log(lightbox);
  const closeBtn = lightbox.querySelector(".close");
  const prevBtn = lightbox.querySelector(".prev");
  const nextBtn = lightbox.querySelector(".next");
  // console.log(closeBtn, prevBtn, nextBtn);
  const lightboxBigImages = lightbox.querySelectorAll(".img__big img");
  // console.log(lightboxBigImages);
  const lightboxSmallImages = lightbox.querySelectorAll(".img__small img");
  // console.log(lightboxSmallImages);
  
      // добавляем мальньким картинкам событие клик 
      // и вызываем функцию изменения картинок,
      // только добавляем в параметры функции переменные больших
      // и маленьких картинок в новом окне(LightBox)
  lightboxSmallImages.forEach((small, counter) => {
    small.addEventListener("click", () => {
      chageImage(counter, lightboxBigImages, lightboxSmallImages);
    });
  });
  
  // добвляем большим картинкам событие клик, которое
  // открывает новое окно (LightBox) и чтобы соответствующая
  // картинка на которую кликнули открылась в новом окне
  bigImg.forEach((big, counter) => {
    big.addEventListener("click", () => {
      lightbox.classList.add("active");
      chageImage(counter, lightboxBigImages, lightboxSmallImages);
    });
  });
  
  // событие кнопки назад
  // если индекс картинок меньше или равен нулю(0)
  // посмотреть на ютуб это объяснение
  // 
  prevBtn.addEventListener("click", () => {
    // Если индекс картинки меньше или равен 0 - мы дошли до 
    // начала, 0-индекс имеет первая картинка
    // вычитаем единицу(1) из индекса и идем к предыдущему индексу
    // картинки, в параметры функции передаем большие и маленькие
    // картинки, при переключении большой меняется и меньшая картинка
    if (currentIndex <= 0) {
      chageImage(bigImg.length - 1, lightboxBigImages, lightboxSmallImages);
    } else {
      chageImage(currentIndex - 1, lightboxBigImages, lightboxSmallImages);
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentIndex >= bigImg.length - 1) {
      // первое изображение всегда будет иметь индекс - 0
      // здесь мы прибавляем 1, чтобы двигаться вперед по индексам
      chageImage(0, lightboxBigImages, lightboxSmallImages);
    } else {
      chageImage(currentIndex + 1, lightboxBigImages, lightboxSmallImages);
    }
  });
  
  // Закрытие страницы lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
/*
/////////////////////////////////////////////////////////////////
const smallImage = document.querySelectorAll('.img__small button img');
const bigImage = document.querySelectorAll('.img__big button img');
// console.log(smallImage, bigImage);
const btnClose = document.querySelector('.popup__images button');
// console.log(btnClose);


let counter = 0;

smallImage[0].classList.add('small-active');
bigImage[0].classList.add('big-active');

for (let i = 0; i < smallImage.length; i++) {
    smallImage[i].addEventListener('click', () => {
        for (let k = 0; k < bigImage.length; k++) {
            bigImage[k].classList.remove('big-active');
            smallImage[k].classList.remove('small-active');
        }
        counter = i;
        bigImage[counter].classList.add('big-active');
        smallImage[counter].classList.add('small-active');
    })
}

/////////////////////////////////////////////////////////////////
bigImage.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector('.popup__images').style.display = 'block';
        // document.querySelector('.popup__images-big .slide img') = img.getAttribute('src');
    })
})

btnClose.addEventListener('click', () => {
    document.querySelector('.popup__images').style.display = 'none';
})

///////////////////////////////////////////////////////////////////

const slides = document.querySelectorAll('.slide');
// console.log(slides);
const prvent = document.querySelector('.prev');
const next = document.querySelector('.next');
// console.log(prvent, next);
const lightboxSmall = document.querySelectorAll('.popup__images-small button');
// console.log(lightboxSmall);



let currentSlide = 0;

function currentImage() {
    lightboxSmall.forEach((small, index) => {
        if (index === currentSlide) {
            small.classList.add('active');
        } else {
            small.classList.remove('active')
        }
    })
}

prvent.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function showSlide() {
    slides.forEach(slide => slide.style.display = 'none');
    slides[currentSlide].style.display = 'block';

    currentImage();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

showSlide();
*/