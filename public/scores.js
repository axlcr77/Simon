// function loadScores() {
//     let scores = [];  //You want to make the id of stuff you want to interact the same as the variables
//     const scoresText = localStorage.getItem('scores');
//     if (scoresText) {
//       scores = JSON.parse(scoresText);
//     }
  
//     const tableBodyEl = document.querySelector('#scores');
  
//     if (scores.length) {
//       for (const [i, score] of scores.entries()) {
//         const positionTdEl = document.createElement('td');
//         const nameTdEl = document.createElement('td');
//         const scoreTdEl = document.createElement('td');
//         const dateTdEl = document.createElement('td');
  
//         positionTdEl.textContent = i + 1;
//         nameTdEl.textContent = score.name;
//         scoreTdEl.textContent = score.score;
//         dateTdEl.textContent = score.date;
  
//         const rowEl = document.createElement('tr');
//         rowEl.appendChild(positionTdEl);
//         rowEl.appendChild(nameTdEl);
//         rowEl.appendChild(scoreTdEl);
//         rowEl.appendChild(dateTdEl);
  
//         tableBodyEl.appendChild(rowEl);
//       }
//     } else {
//       tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
//     }
//   }
  
//   loadScores();
  

async function loadScores() {
  const response = await fetch("/api/scores")
  const scores = await response.json()
}
  // Modify the DOM to display the scores