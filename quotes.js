const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      quote: "Don’t be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    // Add more quotes as needed
  ];
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = randomQuote.quote;
    document.getElementById('quote-author').innerText = randomQuote.author;
  }
  
  displayRandomQuote();
  setInterval(displayRandomQuote, 10000); // Change quote every 10 seconds
  