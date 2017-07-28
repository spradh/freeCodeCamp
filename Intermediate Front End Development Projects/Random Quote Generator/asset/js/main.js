var currentQuote = '', currentAuthor = '';

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
        currentQuote=r.quote;
        currentAuthor=r.author;
        $('#quote').text('"'+currentQuote+'"');
        $('#author').html("- "+currentAuthor);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        
    }
  });
} 
$(document).ready(function() {
    getQuote();
    $('#new-quote').on('click', getQuote);
    $('#tweet-quote').on('click', function() {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor))
  });
    

});
    
