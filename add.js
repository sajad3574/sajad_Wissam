const swiper = new Swiper('.swiper', {
    // Optional parameters
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });






  function myFunction() {
    var x = document.getElementById("mymenu");
    if (x.className === "menu") {
        x.className += " responsive";  // Note the space before "responsive"
    } else {
        x.className = "menu";
    }
}


 