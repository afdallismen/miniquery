window.onload = (function ($) {
  $('.btn')
  $('#eyed')
  $('a')

  $('.btn').hide()
  $('.btn').show()
  $('.btn').addClass('big', 'bigger', 'biggest')
  $('.btn').removeClass('bigger')

  $('.btn').on('shadi', function () { console.log('awesome')})
  $('.btn').trigger('shadi')

  $().ajax({
    url: 'https://google.com',
    type: 'GET',
    success: function () {
      console.log('bomb has ben planted!')
    },
    fail: function () {
      console.log('counter terrorist win!')
    }
  })
})(miniquery)