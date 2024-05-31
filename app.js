document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementsByClassName("question-bloc");
  for (i = 0; i < el.length; i++) {
    el[i].addEventListener("click", function (e) {
      let txt = this.firstElementChild.nextElementSibling;
      let image =this.closest('.question-bloc').querySelector('.plus')
      if (txt.style.display === "block") {
        txt.style.display = "none";
      } else {
        txt.style.display = "block";
      }
      if (image.tagName === 'IMG') {
        if (image.src.includes('assets/images/icon-plus.svg')) {
            image.src = 'assets/images/icon-minus.svg';
        } else {
            image.src = 'assets/images/icon-plus.svg';
        }
    }
    });
  }
});
