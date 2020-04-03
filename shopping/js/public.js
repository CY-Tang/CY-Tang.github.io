
$(window).scroll(function () {
  header()
  Return()
})
header()
function header() {
  var a = $(window).scrollTop()
  if (a > 5) {
    $('header').css({ 'background-color': 'white', 'box-shadow': ' 0 0 10px rgba(0,0,0,.15)' })
    $('.logo-pic img').attr('src', './img/logo2.png')
  }
  else {
    $('header').css({ 'background-color': 'transparent', 'box-shadow': 'none' })
    $('.logo-pic img').attr('src', './img/logo.png')
  }
}
function Return() {
  var b = $(window).scrollTop()
  if (b > 500) {
    $('.returnTop').css({ 'visibility': 'visible', 'opacity': 1 })
  }
  else {
    $('.returnTop').css({ 'visibility': 'hidden', 'opacity': 0 })
  }
}
function goBack() {
  $('body,html').animate({
    scrollTop: 0,
  }, 300)
}
$('.returnTop').click(function () {
  goBack()
})
$('.icon-menu1').click(function () {
  $('.offcanvas-overlay').fadeIn(400)
  $('.offcanvas').animate({ 'right': 0 }, 300)
})
$('.close-btn,.offcanvas-overlay').click(function () {
  $('.offcanvas').animate({ 'right': -350 }, 300)
  $('.offcanvas-overlay').fadeOut(400)
})
$('.header-two .head-main ul li').mouseenter(function () {
  $(this).addClass('active')
})
$('.header-two .head-main ul li').mouseleave(function () {
  $(this).removeClass('active')
})
$('.has-sub-item:nth-child(6)').find('a').click(function () {
  alert("有待开发")
})
