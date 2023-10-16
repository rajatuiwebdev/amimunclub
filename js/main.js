document.addEventListener('DOMContentLoaded', () => {
    var endDate = new Date('2024-01-21T00:00:00').getTime() / 1000;
    var flipdown = new FlipDown(endDate)
      .start()
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
    var ver = document.getElementById('ver');
    ver.innerHTML = flipdown.version;
});
