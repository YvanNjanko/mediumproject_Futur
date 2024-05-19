// Sélection des éléments du DOM
const gameElement = document.getElementById('game');
const textElement = document.querySelector('.text') as HTMLDivElement;
const nextButton = document.querySelector('.next') as HTMLButtonElement;
const restartButton = document.querySelector('.restart') as HTMLButtonElement;

let step = 0;
let currentMessages: string[] = [];

// Blocs de messages
const message1 = [
    "Multiplie par 3 (*3)",
    "Ajoute 6 au resultat (+6)",
    "divise par 2 (/2)",
    "Retire ton nombre initial (-n).",
    "Ajoute 7 au resultat (+7)",
    "Multiplie par 2 (*2)",
    "Retire 20 (-20)",
    "Facile 😆, ton nombre est 10"
];

const message2 = [
    "Multiplie par 4 (*4)",
    "Retire 10 au resultat (-10)",
    "Maintenant ajoute 8 (+8)",
    "Divise le resultat par 2 (/2)",
    "retire 2 fois ton nombre initial (-2n)",
    "Ajoute 6 au resultat (+6)",
    "Maintenant retire 4 (-4)",
    "Multiplie par 5 le resultat obtenu (*5)",
    "😆😁 Tu obtiens 5 😆"
];

const message3 = [
    "Ton chiffre est un nombre premier.",
    "Ton chiffre est un multiple de 3.",
    "Le chiffre que tu as en tête est impair.",
    "Le chiffre que tu as en tête est pair.",
    "Ton chiffre est plus grand que 5.",
    "Ton chiffre est plus petit que 5."
];

// Liste des blocs de messages
const messageBlocks = [message1, message2, message3];

// Fonction pour choisir aléatoirement un bloc de messages
function selectRandomMessages() {
    const randomIndex = Math.floor(Math.random() * messageBlocks.length);
    currentMessages = messageBlocks[randomIndex];
}

// Afficher le message courant
function displayMessage() {
    if (step < currentMessages.length) {
        textElement.innerHTML = `<p>${currentMessages[step]}</p>`;
    }
}

// Gérer le clic sur le bouton "Suivant"
nextButton.addEventListener('click', () => {
    if (step < currentMessages.length - 1) {
        step++;
        displayMessage();
    } else {
        nextButton.disabled = true;
    }
});

// Gérer le clic sur le bouton "Recommencer"
restartButton.addEventListener('click', () => {
    step = 0;
    selectRandomMessages();
    displayMessage();
    nextButton.disabled = false;
});

// Initialiser l'affichage avec le premier message
selectRandomMessages();
displayMessage();