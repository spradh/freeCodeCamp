
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "mlYM7UoJzamshqbQAEk26WQp8QTwp1K0lGjjsn3d7qAi3Aq2Xg",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    success: function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r); 
      }
        $('#quote').html('"'+r.quote+'"');
        $('#author').html("- "+r.author);
    }
  });
} 
$(document).ready(function() {
    getQuote();
  $('#new-quote').on('click', getQuote);
    
});
    
