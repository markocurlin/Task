const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const button = document.getElementById('start');
const msg = document.getElementById('msg');

const shapes = ['Kamen', 'Skare', 'Papir'];

const msg1 = 'Igrač je pobjedio';
const msg2 = 'Kompjuter je pobjedio';
const msg3 = 'Nema pobjednika';

button.addEventListener('click', () => {
    let playerShape;
    let computerShape =  shapes[Math.random() * shapes.length | 0];

    if (document.getElementById('kamen').checked) {
        playerShape = 'Kamen';
    } else if (document.getElementById('skare').checked) {
        playerShape = 'Skare';
    } else if (document.getElementById('papir').checked) {
        playerShape = 'Papir';
    } else {
        alert('Izaberite oblik!');
    }

    if (playerShape) {
        const result = playerShape + computerShape;

        switch(result) {
            case 'KamenSkare':
                msg.textContent = msg1;
                playerScore.textContent++;
                break;
            case 'KamenPapir':
                msg.textContent = msg2;
                computerScore.textContent++;
                break;
            case 'SkareKamen':
                msg.textContent = msg2;
                computerScore.textContent++;
                break;
            case 'SkarePapir':
                msg.textContent = msg1;
                playerScore.textContent++;
                break;
            case 'PapirKamen':
                msg.textContent = msg1;
                playerScore.textContent++;
                break;
            case 'PapirSkare':
                msg.textContent = msg2;
                computerScore.textContent++;
                break;
            default:
                msg.textContent = msg3;
                break;
        }

        document.getElementById('playerShape').textContent = playerShape;
        document.getElementById('computerShape').textContent = computerShape;
    }
});