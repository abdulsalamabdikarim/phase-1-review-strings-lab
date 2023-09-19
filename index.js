// Write your code in this file!
const currentUser = "Grace Hopper";
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
//alt: const welcomeMessage = `Welcome to Flatbook, ` + currentUser + `!`;

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;
//alt: const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;