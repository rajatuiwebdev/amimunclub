document.addEventListener("DOMContentLoaded", function () {
    // Array of quotes
    const quotes = [
      "Any man worth his salt will stick up for what he believes right, <br>but it takes a slightly better man to acknowledge instantly and without reservation <br> that he is in error. -Andrew Jackson",
      "A leader is one who knows the way, goes the way and shows the <br> way. —John C. Maxwell",
      "Leadership is the capacity to translate a vision into <br> reality. —Warren Bennis",
      "There are three essentials to leadership: humility, clarity and <br> courage. —Chan Master Fuchan Yuan",
      "Do not follow where the path may lead. Go instead where there is no path and <br> leave a trail. —Ralph Waldo Emerson",
      "Great leaders are not defined by the absence of weakness, but rather by the <br> presence of clear strengths. —John Peter Zenger",
      "More than ever before in human history, we share a common destiny. We can <br>master it only if we face it together. And that, my friends,<br> is why we have the United Nations. -Kofi Annan",
      "Innovation distinguishes between a leader and a follower. -Steve Jobs",
      "The very essence of leadership is that you have to have vision. You can't blow <br>an uncertain trumpet. -Theodore M. Hesburgh",
      "You gain strength, courage and confidence by every experience in which you really stop<br> to look fear in the face. You must do the thing you think you cannot do. -Eleanor Roosevelt",
      "In matters of style, swim with the current; in matters of principle,<br> stand like a rock. -Thomas Jefferson",
      "Never doubt that a small group of thoughtful, concerned citizens can<br> change the world. Indeed it is the only thing that ever has. -Margeret Mead",
      "A genuine leader is not a searcher for consensus but a molder<br> of consensus. -Martin Luther King Jr.",
      "It is not the strongest of the species that survive, nor the most intelligent,<br> but the one most responsive to change. -Charles Darwin"
    ];
  
    // Get the element with the class "random-quote"
    const quoteElement = document.querySelector(".random-quote");
  
    // Randomly select a quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    // Set the innerHTML of the quote element with the random quote
    quoteElement.innerHTML = randomQuote;
  });
  