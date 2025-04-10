function getTeam() {
  fetch("https://<your-replit-url>.repl.co/predict")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>🏆 AI Suggested Team:</h2><ul>";
      data.team.forEach(player => {
        output += `<li>${player}</li>`;
      });
      output += "</ul>";
      document.getElementById("team-output").innerHTML = output;
    })
    .catch(err => {
      document.getElementById("team-output").innerHTML = "Error loading team.";
      console.error(err);
    });
}
