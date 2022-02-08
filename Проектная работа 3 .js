$(document).ready(function() {
    let hiddenRow = $(".expandable");
    $(".btn").click(function() {
        hiddenRow.toggleClass("hidden");
    })

})