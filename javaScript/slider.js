const bigImg = document.querySelectorAll(
    ".main__images-default .img__big-product img"
  );

  const smallImg = document.querySelectorAll(
    ".main__images-default .img__small img"
  );
  
  let currentIndex = 0;
  

  function chageImage(counter, bigImg, smallImg) {
    bigImg.forEach((big) => {
      big.classList.remove("active");
    });
  
    smallImg.forEach((small) => {
      small.classList.remove("active");
    });
    bigImg[counter].classList.add("active");
    smallImg[counter].classList.add("active");
    currentIndex = counter;
  }
  
  smallImg.forEach((small, counter) => {
    small.addEventListener("click", () => {
      chageImage(counter, bigImg, smallImg);
    });
  });
  

  const lightbox = document.querySelector(".lightBox");
  const closeBtn = lightbox.querySelector(".close");
  const prevBtn = lightbox.querySelector(".prev");
  const nextBtn = lightbox.querySelector(".next");
  const lightboxBigImages = lightbox.querySelectorAll(".img__big img");
  const lightboxSmallImages = lightbox.querySelectorAll(".img__small img");
  

  lightboxSmallImages.forEach((small, counter) => {
    small.addEventListener("click", () => {
      chageImage(counter, lightboxBigImages, lightboxSmallImages);
    });
  });
  

  bigImg.forEach((big, counter) => {
    big.addEventListener("click", () => {
      lightbox.classList.add("active");
      chageImage(counter, lightboxBigImages, lightboxSmallImages);
    });
  });
  


  prevBtn.addEventListener("click", () => {

    if (currentIndex <= 0) {
      chageImage(bigImg.length - 1, lightboxBigImages, lightboxSmallImages);
    } else {
      chageImage(currentIndex - 1, lightboxBigImages, lightboxSmallImages);
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentIndex >= bigImg.length - 1) {

      chageImage(0, lightboxBigImages, lightboxSmallImages);
    } else {
      chageImage(currentIndex + 1, lightboxBigImages, lightboxSmallImages);
    }
  });
  
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
