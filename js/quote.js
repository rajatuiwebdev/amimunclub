document.addEventListener("DOMContentLoaded", function () {
    // Array of quotes
    const quotes = [
      "Any man worth his salt will stick up for what he believes right, <br>but it takes a slightly better man to acknowledge <br> instantly and without reservation that he is in error.<br> -Andrew Jackson",
      "A leader is one who knows the way,<br> goes the way and shows the way.<br> —John C. Maxwell",
      "Leadership is the capacity to<br> translate a vision into reality.<br> —Warren Bennis",
      "There are three essentials to leadership:<br> humility, clarity and courage.<br> —Chan Master Fuchan Yuan",
      "Do not follow where the path may lead.<br> Go instead where there is no path and leave a trail.<br> —Ralph Waldo Emerson",
      "Great leaders are not defined by the absence of weakness,<br> but rather by the presence of clear strengths.<br> —John Peter Zenger",
      "More than ever before in human history, we share a common destiny.<br> We can master it only if we face it together.<br> And that, my friends, is why we have the United Nations.<br>  -Kofi Annan",
      "Innovation distinguishes between a leader and a follower.<br>  -Steve Jobs",
      "The very essence of leadership is that you have to have vision.<br>  You can't blow an uncertain trumpet.<br> -Theodore M. Hesburgh",
      "You gain strength, courage and confidence by every experience in which you really stop<br> to look fear in the face. You must do the thing you think you cannot do.<br> -Eleanor Roosevelt",
      "In matters of style, swim with the current;<br> in matters of principle,stand like a rock.<br> -Thomas Jefferson",
      "Never doubt that a small group of thoughtful, concerned citizens can change the world.<br> Indeed it is the only thing that ever has.<br> -Margeret Mead",
      "A genuine leader is not a searcher for consensus<br> but a molder of consensus.<br> -Martin Luther King Jr.",
      "It is not the strongest of the species that survive,<br> nor the most intelligent,<br> but the one most responsive to change.<br> -Charles Darwin"
    ];
  
    // Get the element with the class "random-quote"
    const quoteElement = document.querySelector(".random-quote");
  
    // Randomly select a quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    // Set the innerHTML of the quote element with the random quote
    quoteElement.innerHTML = randomQuote;
  });
  