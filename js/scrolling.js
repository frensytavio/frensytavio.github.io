window.onscroll = function(){

    // Get the header
    var header = document.getElementById("bg-raw");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
}