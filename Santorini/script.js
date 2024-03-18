const abilities = [
  { name: "Swapper", description: "Your token may move into an opponent token's space by forcing their token to the space yours just left." },
  { name: "Speedster", description: "Your token may move one additional time but not back to its initial space." },
  { name: "Leader", description: "If one of your tokens moved up a color level on your last turn, opponent tokens cannot move up this turn." },
  { name: "Stopper", description: "Your token may play a sun card at any color level." },
  { name: "Doubler", description: "Your token may play a card one additional time, but not on the same space." },
  { name: "Stacker", description: "Your token may play one additional card (not sun) on top of your first card following all placement rules." },
  { name: "Skater", description: "If your tokens do not move up or down a color level, they may each move any number of times (even zero), and then play a card for one of them." },
  { name: "Charger", description: "Your token may move into an opponent token's space, their token can be forced one space straight backwards to an unoccupied space at any color level." },
  { name: "Faller", description: "You also win if your token moves down two or more color levels." },
  { name: "Sandwich", description: "If your token does not move up a color level, you may play a card both before and after moving." },
  { name: "Influencer", description: "If an opponent token starts its turn next to one of your tokens, its last move must be to a space next to one of your tokens." },
  { name: "Demolitionist", description: "You can skip your move, if you do, you may remove an unoccupied card (not sun) next to your unmoved token." },
  { name: "Sniper", description: "Place your tokens first during setup. If your token moves into a space and the next space in the same direction is occupied by an opponent token, the opponent's token is removed from the game." },
  { name: "Flipper", description: "Before your token moves, you may force a neighboring opponent token to the space directly on the other side of your token, if unoccupied." },
  { name: "Completionist", description: "You also win when there are at least five completed color stacks on the table." },
  { name: "Manipulator", description: "Each time a token you control creates a completed color stack, you may take an additional turn using an opponent token instead of your own." },
  { name: "Lovers", description: "Place your tokens on opposite edges during setup. You win if your tokens are next each other, with each token being on a moon card." },
  { name: "Edger", description: "An opponent cannot win by moving into a space on the edge." },
  { name: "Centrist", description: "You may play one additional time, but not on an edge space." },
  { name: "Underdog", description: "If one of your opponent's tokens are higher than the others, it cannot move." },
  { name: "Homesteader", description: "Opponent tokens cannot play next to your tokens, unless creating a completed set." },
  { name: "Tyrant", description: "At the end of your turn, if possible, remove opponent tokens occupying lower color levels next to your tokens." },
  { name: "Collector", description: "At the start of your turn, add any card to your collection. On your turn, play only using cards in your collection." },
  { name: "Fundamentalist", description: "If your token is on the bottom layer and it doesn't move, it may play up to 3 cards." },
  { name: "Outsider", description: "Each time a token moves into the edge, it may immediately move again." },
  { name: "Investor", description: "Your token may play a card under itself." }
];

const abilitiesContainer = document.getElementById('abilities-container');
const randomizeButton = document.getElementById('randomize-button');

function getRandomAbility() {
  return abilities[Math.floor(Math.random() * abilities.length)];
}

function displayRandomAbilities() {
  const randomAbilities = [];
  while (randomAbilities.length < 2) {
    const ability = getRandomAbility();
    if (!randomAbilities.includes(ability)) {
      randomAbilities.push(ability);
    }
  }
  abilitiesContainer.innerHTML = randomAbilities.map(({ name, description }) => `<div class="ability-box"><h3><strong>${name}</strong></h3><p>${description}</p></div>`).join('');
}

randomizeButton.addEventListener('click', displayRandomAbilities);
