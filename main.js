/*
  ----------------------
    S L I D E S H O W
  ----------------------
*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var bar = document.getElementsByClassName("bar");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = -2;
    slides[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < bar.length; i++) {
    bar[i].className = bar[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.zIndex = -1;
  slides[slideIndex - 1].style.opacity = 1;
  bar[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

/*
  -------------
    M O D A L
  -------------
*/

function toggleClass() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("activePopup");
}

/*
  -----------------------
    T Y P E W R I T E R
  -----------------------
*/

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // CURRENT WORD INDEX
    const current = this.wordIndex % this.words.length;
    // GET TEXT
    const fullTxt = this.words[current];

    // CHECK IF DELETING
    if (this.isDeleting) {
      // REMOVE CHARACTERS
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // ADD CHARACTERS
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // ADD TEXT TO ELEMEMT
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // TYPING SPEED
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // WORD COMPLETE
    if (!this.isDeleting && this.txt === fullTxt) {
      // PAUSE TYPING
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // NEXT WORD
      this.wordIndex++;
      // PAUSE TYPING
      typeSpeed = 350;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// LOAD TO DOM
document.addEventListener("DOMContentLoaded", init);

// START
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // CALL FUNCTION
  new TypeWriter(txtElement, words, wait);
}

$(window)
  .scroll(function() {
    // selectors
    var $window = $(window),
      $body = $("#about-me"),
      $panel = $(".panel");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function() {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        // Remove all classes on body with color-
        $body.removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        // Add class of currently active div
        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();

(function($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
  fnames[3] = "ADDRESS";
  ftypes[3] = "address";
  fnames[4] = "PHONE";
  ftypes[4] = "phone";
  fnames[5] = "BIRTHDAY";
  ftypes[5] = "birthday";
})(jQuery);
var $mcj = jQuery.noConflict(true);

// End mc_embed_signup
window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
  L.start({
    baseUrl: "mc.us4.list-manage.com",
    uuid: "bce0b8347be44f79d17f34ea1",
    lid: "57b32c7e47",
    uniqueMethods: true
  });
});
