function cloackTab(){
   $('#title').html('Home');
   $("#favicon").attr("href","/img/gclassroom.png");
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});


function openGame() {
    var win = window.open()
    var url = "https://useclassplay.github.io"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.src = url
    win.document.body.style.margin = "0";
    win.document.body.appendChild(iframe)
}

// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //// This is definitly human made //

function filterGames() {
  const searchTerm = document.getElementById("gameSearch").value.toLowerCase();
  const gameCards = document.querySelectorAll(".game-card");
  let hasVisibleGames = false; // Track if any game matches the search term

  gameCards.forEach(gameCard => {
      const gameTitle = gameCard.querySelector(".game-title-overlay span").textContent.toLowerCase();
      
      if (gameTitle.includes(searchTerm)) {
          gameCard.style.display = "block";
          hasVisibleGames = true; // A matching game is found
      } else {
          gameCard.style.display = "none";
      }
  });

  // Show or hide the "no games" message based on whether any games are visible
  const noGames = document.getElementById("noGames"); // Ensure you have this element in your HTML
  if (hasVisibleGames) {
      noGames.style.display = "none";
  } else {
      noGames.style.display = "block";
  }
}