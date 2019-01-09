// Get current year for copyright
$('#year').text(new Date().getFullYear());
// Init ScrollSpy
$('body').scrollspy({ target: '#main-nav' });
// Add smooth scrolling
$('#main-nav a').on('click', function(e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      500,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});
