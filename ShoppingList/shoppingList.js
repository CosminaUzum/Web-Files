var slider = document.getElementById("slider");
var test = document.getElementsByClassName("test");
var status = true;
slider.addEventListener("change", function() {
  if (this.checked) {
    for (var i = 0; i < test.length; i++) {
      test[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < test.length; i++) {
      test[i].style.display = "none";
    }
  }
});
