
  document.addEventListener('DOMContentLoaded', function() {
    const playerName = localStorage.getItem('playerName');
    const gameLevel = localStorage.getItem('gameLevel');
    const mineCount = gameLevel === 'hard' ? 20 : 10;
    let attempts = 10;
  
    document.getElementById('playerNameDisplay').textContent = `Player: ${playerName}`;
    document.getElementById('attemptsDisplay').textContent = `Attempts left: ${attempts}`;
  
    const grid = document.querySelector('.grid');
    const buttons = [];
  
    // Initialize grid with buttons
    for (let i = 0; i < 64; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => handleButtonClick(button, i));
      grid.appendChild(button);
      buttons.push(button);
    }
  
    // Randomly assign mines, treasure, and safe buttons
    const indices = [...Array(64).keys()];
    shuffleArray(indices);
  
    const treasureIndex = indices.pop();
    const mineIndices = indices.splice(0, mineCount);
    const safeIndices = indices;
  
    function handleButtonClick(button, index) {
      if (index === treasureIndex) {
        button.textContent = '💎';
        // Play win sound, show message, etc.
      } else if (mineIndices.includes(index)) {
        button.textContent = '💣';
        // Play lose sound, show message, etc.
      } else {
        button.textContent = '✔️';
        button.disabled = true;
      }
      
      attempts--;
      document.getElementById('attemptsDisplay').textContent = `Attempts left: ${attempts}`;
      if (attempts === 0) {
        // End game, show lose message
      }
    }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  });
  
  