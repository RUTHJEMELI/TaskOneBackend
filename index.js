const express = require('express');
const app = express();
app.use(express.json())


app.get('/api',  (req, res) => {

   const {slack_name, track} = req.query 
    

  // Get the current UTC time
  const currentUTC = new Date();

  // Get a random offset between -2 and +2 minutes
  const offsetMinutes = Math.floor(Math.random() * 5) - 2;


  currentUTC.setUTCMinutes(currentUTC.getUTCMinutes() + offsetMinutes);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[currentUTC.getUTCDay()];

  const response = {
    "utc_time": currentUTC.toISOString(),
    "current-day": currentDayOfWeek,
    "slack_name": slack_name,
    "track": track,
    "github_repo_url": "https://github.com/RUTHJEMELI/task_one",
    "github_file_url": 'https://github.com/RUTHJEMELI/task_one',
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
