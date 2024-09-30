const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes for the bride and groom pages
app.get('/teambride', (req, res) => {
  res.sendFile('bride.html', { root: path.join(__dirname, '../public') });
});

app.get('/teamgroom', (req, res) => {
  res.sendFile('groom.html', { root: path.join(__dirname, '../public') });
});

// Handle 404
app.use((req, res) => {
  res.status(404).send('Page Not Found!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
