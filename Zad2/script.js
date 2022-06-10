const msg = document.getElementById('msg');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const word = document.getElementById('word').value;
    
    let newWord = word.toLowerCase().replace(/[^a-z]/g, '').trim();
  
    let checkWord = newWord.split('').reverse().join('');

    if ( newWord === checkWord) {
        msg.textContent = 'Palindrom';
    } else {
        msg.textContent = 'Nije palindrom';
    }
});