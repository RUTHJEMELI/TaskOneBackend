const express = require('express');
const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  // Get the current UTC time
  const currentUTC = new Date().toISOString().substring(0, 19) + "Z";

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[new Date(currentUTC).getUTCDay()];

  const response = {
    "utc_time": currentUTC,
    "current_day": currentDayOfWeek,
    "slack_name": slack_name,
    "track": track,
    "github_repo_url": "https://github.com/RUTHJEMELI/TaskOneBackend.git",
    "github_file_url": 'https://github.com/RUTHJEMELI/TaskOneBackend/blob/master/index.js',
    "status_code": 200,
  };

  // Send the response
  res.json(response);
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
