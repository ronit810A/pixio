


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* Toggle Mobile Menu */
menuToggle.addEventListener("click", function () {

  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

});


/* Close Menu After Clicking Link */
document.querySelectorAll(".nav a").forEach(function (link) {

  link.addEventListener("click", function () {

    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");

  });

});

/* ================
     map-slider
   ================*/
$('.map-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.deal-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
});

$('.featured-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.post-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





/*======================
        faq-page         
  ======================*/

let question = document.querySelectorAll(".faq-page-right-question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".faq-page-right-question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})



/*===============
  filter-tab
  ===============*/



document.addEventListener("DOMContentLoaded", function () {

  // Filter buttons
  const filterTabs = document.querySelectorAll(
    ".product-content-text li"
  );

  // All products
  const products = document.querySelectorAll(
    ".product-item"
  );


  filterTabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

      // Remove active class from all tabs
      filterTabs.forEach(function (item) {
        item.classList.remove("active");
      });


      // Add active class to clicked tab
      this.classList.add("active");


      // Get selected category
      const filterValue = this.getAttribute(
        "data-filter"
      );


      // Filter products
      products.forEach(function (product) {

        const productCategory =
          product.getAttribute("data-category");


        if (
          filterValue === "all" ||
          productCategory === filterValue
        ) {

          // Show product
          product.style.display = "block";

        } else {

          // Hide product
          product.style.display = "none";

        }

      });

    });

  });

});






/*====================
   shop-now-dropdowns
  ====================*/


const dropdown = document.querySelector("#custom-dropdown-a");
const dropdownBtn = document.querySelector("#dropdown-btn-a");
const options = document.querySelectorAll("#dropdown-menu-a a");
const selectedText = document.querySelector("#selected-text-a");

dropdownBtn.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});

options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    e.preventDefault();

    selectedText.textContent = this.textContent;
    dropdown.classList.remove("active");
  });
});

document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});


const dropdowna = document.querySelector("#custom-dropdown");
const dropdownBtna = document.querySelector("#dropdown-btn");
const optionsa = document.querySelectorAll("#dropdown-menu a");
const selectedTexta = document.querySelector("#selected-text");

dropdownBtna.addEventListener("click", function () {
  dropdowna.classList.toggle("active");
});

optionsa.forEach(function (option) {
  option.addEventListener("click", function (e) {
    e.preventDefault();

    selectedTexta.textContent = this.textContent;
    dropdowna.classList.remove("active");
  });
});

document.addEventListener("click", function (e) {
  if (!dropdowna.contains(e.target)) {
    dropdowna.classList.remove("active");
  }
});






/*=======================
   cart-page
   ====================*/

document.addEventListener("DOMContentLoaded", function () {

  const quantityBoxes = document.querySelectorAll(".product-quantity-box");

  quantityBoxes.forEach(function (box) {

    const minusBtn = box.querySelector(".minus");
    const plusBtn = box.querySelector(".plus");
    const quantityNum = box.querySelector(".product-quantity-num");

    plusBtn.addEventListener("click", function () {

      let quantity = parseInt(quantityNum.textContent);

      quantity = quantity + 1;

      quantityNum.textContent = quantity;

    });


    minusBtn.addEventListener("click", function () {

      let quantity = parseInt(quantityNum.textContent);

      if (quantity > 0) {
        quantity = quantity - 1;
      }

      quantityNum.textContent = quantity;

    });

  });

});
