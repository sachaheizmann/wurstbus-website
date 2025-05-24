document.addEventListener('DOMContentLoaded', () => {
  // Initialize FullCalendar
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: '/events'
  });
  calendar.render();

  // Initialize Instafeed (you'll need to set an accessToken)
  const feed = new Instafeed({
    accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN',
    target: 'instafeed',
    limit: 6,
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
  });
  feed.run();
});
