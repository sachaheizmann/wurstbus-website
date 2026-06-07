const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Hard‑coded reserved dates for demo
const events = [
  { title: 'Réservé', start: '2025-06-14' },
  { title: 'Réservé', start: '2025-08-16' },
  { title: 'Réservé', start: '2025-09-13' },
  { title: 'Réservé', start: '2025-09-27' },
  { title: 'Réservé', start: '2025-10-04' },
  { title: 'Réservé', start: '2025-10-11' },
  { title: 'Réservé', start: '2025-10-18' },
  { title: 'Réservé', start: '2025-10-26' },
  { title: 'Réservé', start: '2025-10-25' },
  { title: 'Réservé', start: '2026-06-06' },
  { title: 'Réservé', start: '2026-06-07' },
  { title: 'Réservé', start: '2026-06-19' },
  { title: 'Réservé', start: '2026-06-20' },
  { title: 'Réservé', start: '2026-06-21' },
  { title: 'Réservé', start: '2026-06-29' },
  { title: 'Venoge Fest.', start: '2026-08-11' },
  { title: 'Venoge Fest.', start: '2026-08-12' },
  { title: 'Venoge Fest.', start: '2026-08-13' },
  { title: 'Venoge Fest.', start: '2026-08-14' },
  { title: 'Venoge Fest.', start: '2026-08-15' },
  { title: 'L\'Isle', start: '2026-09-03' },
  { title: 'L\'Isle', start: '2026-09-04' },
  { title: 'L\'Isle', start: '2026-09-05' },
  { title: 'British car meet.', start: '2026-10-03' },
  { title: 'Brocante Morges', start: '2026-12-05' },
  { title: 'Brocante Morges', start: '2026-12-06' },

];

app.get('/events', (req, res) => {
  res.json(events);
});

// Serve static files
app.use(express.static('public'));

app.listen(PORT, () => console.log("port 3002"));
