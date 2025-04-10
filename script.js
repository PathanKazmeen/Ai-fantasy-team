function getTeam() {
    const sampleTeam = [
      "Ruturaj Gaikwad",
      "Shubman Gill",
      "Virat Kohli",
      "Suryakumar Yadav",
      "Hardik Pandya",
      "MS Dhoni (WK)",
      "Ravindra Jadeja",
      "Rashid Khan",
      "Jasprit Bumrah",
      "Mohammed Shami",
      "Yuzvendra Chahal"
    ];
  
    let output = "<h2>🏆 AI Suggested Team:</h2><ul>";
    sampleTeam.forEach(player => {
      output += `<li>${player}</li>`;
    });
    output += "</ul>";
  
    document.getElementById("team-output").innerHTML = output;
  }
  