$(document).ready(function() {
  $.get("https://api.github.com/repos/yaoyao-liu/minimal-light/stargazers", function(data) {
    $("#github-stars").text(data.length);
  });
}); 