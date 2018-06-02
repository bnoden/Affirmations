// This was put together to quickly provide a working demonstration. It will all be refactored beyond recognition.

const words = require('./db');

const NUMBER_OF_WORDS = words.length;
const wordForm = document.getElementById('wordForm');
const wordBox = document.querySelector('.word-box');
const btnAffirm = document.querySelector('.btn-affirm');
const getWord = () => words[Math.floor(Math.random() * NUMBER_OF_WORDS)];

let wait = 0;
const submit = (t = 2000) => {
  if (!wait) {
    wait = 1;

    btnAffirm.style.backgroundColor = '#E0FFED';
    btnAffirm.style.borderColor = '#139C63';

    wordBox.classList.remove('show');
    wordBox.classList.add('hide');
    btnAffirm.innerHTML = 'You are&nbsp;&nbsp;&nbsp;';

    setTimeout(() => {
      btnAffirm.innerHTML = 'You are.&nbsp;&nbsp;';
    }, t * 0.25);
    setTimeout(() => {
      btnAffirm.innerHTML = 'You are..&nbsp;';
    }, t * 0.5);
    setTimeout(() => {
      btnAffirm.innerHTML = 'You are...';
    }, t * 0.75);
    setTimeout(() => {
      wordBox.value = getWord();
      revert(0);
    }, t * 0.8);
    setTimeout(() => {
      wordBox.classList.remove('hide');
      wordBox.classList.add('show');
    }, t);
    setTimeout(() => {
      wait = 0;
    }, t + 500);
  }
};

btnAffirm.addEventListener('click', e => {
  e.preventDefault();
  submit();
});

wordForm.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit();
  }
});

btnAffirm.onmousedown = () => {
  btnAffirm.style.color = '#139C63';
  btnAffirm.style.backgroundColor = '#E3FFF1';
  btnAffirm.style.borderColor = '#139C63';
};
btnAffirm.onmouseup = () => revert();
btnAffirm.onmouseleave = () => revert();
btnAffirm.onmouseover = () => {
  if (!wait) {
    btnAffirm.style.backgroundColor = '#E0FFED';
    btnAffirm.style.borderColor = '#139C63';
  }
};

// revert btnAffirm to default colors
const revert = (w = wait) => {
  // call with no args to rely on wait value
  // or override wait value with 1 or 0 (true/false)
  if (!w) {
    btnAffirm.style.color = '#30c9a3';
    btnAffirm.style.backgroundColor = '#fafcfb';
    btnAffirm.style.borderColor = '#30c9a3';
  }
};
