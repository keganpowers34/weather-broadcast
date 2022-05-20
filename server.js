var weather = require('weather-js');
var express = require('express');

var app = express();
app.get('/api/:cs&:dt', async (req, res) => {
  const cs = req.params.cs;
  const dt = req.params.dt;

  weather.find({ search: cs, degreeType: dt }, function(err, result) {
    if(err) console.log(err);

    res.send(JSON.stringify(result));
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
 });