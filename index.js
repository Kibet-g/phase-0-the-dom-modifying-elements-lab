// Write your code here!
// Remove the <main> element
const main = document.getElementById('main');
main.remove(); // This will remove the <main> element

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement('h1');

// Set the id and text content of newHeader
newHeader.id = 'victory';
newHeader.textContent = 'Kibet Gilbert Korir is the champion'; // Replace with your name

// Append the newHeader to the body or another appropriate parent element
document.body.appendChild(newHeader);
