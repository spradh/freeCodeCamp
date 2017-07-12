
function getQuote() {
  $.get({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
    success: function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r); 
      }
      $('#quote').text(r.quote);
      $('#author').text(r.author);
    }
});

    
$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
    
});
    
