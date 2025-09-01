const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Hard‑coded reserved dates for demo
const events = [
  { title: 'Reserved', start: '2025-06-14' },
  { title: 'Soirée privée', start: '2025-08-16' },
  { title: 'Soirée privée', start: '2025-09-13' },
  { title: 'Soirée privée', start: '2025-09-27' },
  { title: 'Soirée privée', start: '2025-10-25' }
];

app.get('/events', (req, res) => {
  res.json(events);
});

// Serve static files
app.use(express.static('public'));

app.listen(PORT, () => console.log("port 3002"));
