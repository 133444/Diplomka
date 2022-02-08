"use strict";

$(document).ready(function () {
  var hiddenrow = $(".expandable");
  $(".btn").click(function () {
    hiddenrow.toggleClass("hidden");
  });
});
$(document).ready(function () {
  var hiddennow = $(".expand");
  $(".btn").click(function () {
    hiddennow.toggleClass("hid");
  });
});
$(document).ready(function () {
  var hiddenbow = $(".exp");
  $(".btn").click(function () {
    hiddenbow.toggleClass("hin");
  });
});
$(document).ready(function () {
  $(".images").click(function () {
    $(".before").prepend("  <img src='./free-icon-play-1073777.png'>");
  });
});