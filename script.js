document.addEventListener('DOMContentLoaded', function () {
    const domainSelect = document.getElementById('domainSelect');
    const gameLinksDiv = document.getElementById('gameLinks');
  
    // Define your games here, using only name and optionally a specific subdomain
    const games = [
      { name: "2048", subdomain: "games" }, // Specific subdomain example
      { name: "bitlife" },
      { name: "monkey-mart" },
      { name: "stickman-hook" },
      { name: "tunnel-rush" },
      { name: "pvz-2" },
      { name: "slope" },
      { name: "slope-2" },
      { name: "clicker-heroes" },
      { name: "retro-bowl" },
      { name: "subway-surfers", subdomain: "games" },
      { name: "soccer-random" },
      { name: "basket-random" },
      { name: "volley-random" },
      { name: "boxing-random" },
      { name: "superhot" },
      { name: "temple-run-2" },
      { name: "fbwg-1" },
      { name: "fbwg-2" },
      { name: "fbwg-3" },
      { name: "fbwg-4" },
      { name: "fbwg-5" },
      { name: "rooftop-snipers" },
      { name: "rooftop-snipers-2" },
      { name: "duck-life" },
      { name: "duck-life-2" },
      { name: "duck-life-3" },
      { name: "duck-life-4", subdomain: "games"  },
      { name: "duck-life-treasure-hunt", subdomain: "games"  },
      { name: "duck-life-6" },
      { name: "cookie-clicker" },
      { name: "geometry-dash" },
      { name: "friday-night-funkin" },
      { name: "getting-over-it-scratch-edition", subdomain: "games" },
      { name: "flappy-bird" },
      { name: "learn-to-fly" },
      { name: "learn-to-fly-2" },
      { name: "learn-to-fly-3" },
      { name: "learn-to-fly-idle" },
      { name: "moto-x3m" },
      { name: "moto-x3m-2" },
      { name: "moto-x3m-3" },
      { name: "moto-x3m-winter" },
      { name: "moto-x3m-pool-party" },
      { name: "motot-x3m-spooky-land" },
      { name: "boxel-rebound" },
      { name: "doodle-jump" },
      { name: "crossy-road" },
      { name: "little-alchemy" },
      { name: "doge-miner" },
      { name: "doge-miner-2" },
      { name: "bob-the-robber" },
      { name: "money-movers-3" },
      { name: "bloons-td" },
      { name: "bloons-td-2" },
      { name: "bloons-td-3" },
      { name: "bloons-td-4" },
      { name: "bloons-td-4-expansion-pack" },
      { name: "bloons-td-6" },
      { name: "idle-breakout" },
      { name: "worlds-hardest-game" },
      { name: "worlds-hardest-game-2" },
      { name: "run" },
      { name: "run-2" },
      { name: "jacksmith" },
      { name: "papas-scooperia" },
      { name: "papas-sushiria" },
      { name: "papas-cupcakeria" },
      { name: "papas-bakeria" },
      { name: "papas-burgeria" },
      { name: "papas-cheeseria" },
      { name: "papas-pastaria" },
      { name: "papas-hot-doggeria" },
      { name: "papas-panckaeria" },
      { name: "papas-donuteria" },
      { name: "papas-pizzeria" },
      { name: "papas-freezeria" },
      { name: "papas-taco-mia" },
      { name: "papas-wingeria" },
      { name: "papa-louie" },
      { name: "papa-louie-2" },
      { name: "papa-louie-3" },
      { name: "colour-switch" },
      { name: "" },
    ];
  
    function generatePathFromName(name) {
      // Replace spaces with hyphens and lowercase all letters
      return name.replace(/\s+/g, '-').toLowerCase();
    }
  
    function updateGameLinks(domain) {
      gameLinksDiv.innerHTML = ''; // Clear existing links
  
      games.forEach(game => {
        const link = document.createElement('a');
        // Use the game's subdomain if specified, otherwise use the default
        const subdomain = game.subdomain || "games-cloudflare";
        const path = generatePathFromName(game.name);
        const url = `https://${subdomain}.${domain}/${path}/`;
        link.href = url;
        link.textContent = game.name;
        link.target = "_blank"; // Open in a new tab
        gameLinksDiv.appendChild(link);
        gameLinksDiv.appendChild(document.createElement('br')); // New line
      });
    }
  
    // Listen for changes on the domain select dropdown
    domainSelect.addEventListener('change', function () {
      updateGameLinks(this.value);
    });
  
    // Initialize with the default domain
    updateGameLinks(domainSelect.value);
  });
  