let move = 'circle';
const player = document.querySelector('.tlacitko');

const btnElm = document.querySelectorAll('button');

const game = (event) => {
  if (event.target.classList.length == 0) {
    event.target.disabled = true;
    if (move === 'circle') {
      move = 'cross';
      event.target.classList.add('board__field--circle');
      player.src = 'cross.svg';
      player.alt = 'Křížek';
    } else {
      move = 'circle';
      event.target.classList.add('board__field--cross');
      player.src = 'circle.svg';
      player.alt = 'Kolečko';
    }
  }
};

for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', game);
}
