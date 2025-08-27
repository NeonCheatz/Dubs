<<<<<<< HEAD
const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON request bodies

// Your valid keys (you can replace this with a database or DataStore later)
const validKeys = new Set([
  'ABC123',
  'XYZ789',
  'MYSECRETKEY',
]);

app.post('/api/validatekey', (req, res) => {
  const key = req.body.key;

  if (!key) {
    return res.status(400).json({ success: false, message: 'No key provided' });
  }

  if (validKeys.has(key)) {
    return res.json({ success: true, message: 'Key is valid' });
  } else {
    return res.json({ success: false, message: 'Invalid key' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Key validation server running on port ${PORT}`);
});
=======
const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON request bodies

// Your valid keys (you can replace this with a database or DataStore later)
const validKeys = new Set([
  'ABC123',
  'XYZ789',
  'MYSECRETKEY',
]);

app.post('/api/validatekey', (req, res) => {
  const key = req.body.key;

  if (!key) {
    return res.status(400).json({ success: false, message: 'No key provided' });
  }

  if (validKeys.has(key)) {
    return res.json({ success: true, message: 'Key is valid' });
  } else {
    return res.json({ success: false, message: 'Invalid key' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Key validation server running on port ${PORT}`);
});
>>>>>>> 9f83ef11362da4fcace31f63c6624fed7bb0ab73
