$(document).ready(function() {
  // version naïve
  // $("#red-titles").on('click', function(e){
  //   $("a").css({"color": "red"})
  //   e.preventDefault()
  // })
  $("#red-titles").on('click', function(e){
    $("a").toggleClass('red-titles')
    e.preventDefault()
  })
})
