/*! =========================================================
 *
 * Material Kit Free - V1.1.0
 *
 * =========================================================
 *
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \\|     |// '.
 *                 / \\|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *               Buddha Bless:  "No Bugs"
 *
 * ========================================================= */

function debounce(a,r,t){var n;return function(){var e=this,o=arguments;clearTimeout(n),n=setTimeout(function(){n=null,t||a.apply(e,o)},r),t&&!n&&a.apply(e,o)}}var transparent=!0,transparentDemo=!0,fixedTop=!1,navbar_initialized=!1;$(document).ready(function(){$.material.init(),$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(),0!=$(".datepicker").length&&$(".datepicker").datepicker({weekStart:1}),0!=$(".navbar-color-on-scroll").length&&$(window).on("scroll",materialKit.checkScrollForTransparentNavbar),$('[data-toggle="popover"]').popover(),$(".carousel").carousel({interval:4e5})}),materialKit={misc:{navbar_menu_visible:0},checkScrollForTransparentNavbar:debounce(function(){$(document).scrollTop()>260?transparent&&(transparent=!1,$(".navbar-color-on-scroll").removeClass("navbar-transparent")):transparent||(transparent=!0,$(".navbar-color-on-scroll").addClass("navbar-transparent"))},17),initSliders:function(){$("#sliderRegular").noUiSlider({start:40,connect:"lower",range:{min:0,max:100}}),$("#sliderDouble").noUiSlider({start:[20,60],connect:!0,range:{min:0,max:100}})}};var big_image;materialKitDemo={checkScrollForParallax:debounce(function(){$(this).scrollTop();oVal=$(window).scrollTop()/3,big_image.css({transform:"translate3d(0,"+oVal+"px,0)","-webkit-transform":"translate3d(0,"+oVal+"px,0)","-ms-transform":"translate3d(0,"+oVal+"px,0)","-o-transform":"translate3d(0,"+oVal+"px,0)"})},6)};