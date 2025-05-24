const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Hard‑coded reserved dates for demo
const events = [
  { title: 'Reserved', start: '2025-06-14' },
  { title: 'Reserved', start: '2025-08-16' }
];

app.get('/events', (req, res) => {
  res.json(events);
});

// Serve static files
app.use(express.static('public'));

app.listen(PORT, () => console.log("port 3002"));
