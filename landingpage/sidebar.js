// function myFunction() {
//     var x = document.getElementsByClassName("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   } 

function myFunction() {
  var x = document.getElementsByClassName("myLinks");

  // Loop through each element with class "myLinks"
  for (var i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
      x[i].style.display = "none"; // Hide the menu content
    } else {
      x[i].style.display = "block"; // Show the menu content
    }
  }
}