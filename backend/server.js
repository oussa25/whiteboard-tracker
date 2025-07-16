const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;
const FILE_PATH = './clients.json';

app.use(cors());
app.use(express.json());

// Read data
app.get('/clients', (req, res) => {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      // If file doesn't exist, return empty array
      return res.json([]);
    }
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Could not read file' });
  }
});

// Save data
app.post('/clients', (req, res) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(req.body, null, 2), 'utf-8');
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Could not write file' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
