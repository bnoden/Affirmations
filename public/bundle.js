(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (arr, rand, temp) => {
  const shuffled = [...arr];
  const length = arr.length;
  for (let i = length - 1; i > 0; i--) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = shuffled[i];
    shuffled[i] = shuffled[rand];
    shuffled[rand] = temp;
  }
  return shuffled;
};

},{}],2:[function(require,module,exports){
// This was put together to quickly provide a working demonstration. It will all be refactored beyond recognition.

const shuffle = require('./components/Shuffle');

const wordForm = document.getElementById('wordForm');
const wordBox = document.querySelector('.word-box');
const btnAffirm = document.querySelector('.btn-affirm');

let words;
let NUMBER_OF_WORDS;

((url = './db/affirm.json', cb) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';

  request.onload = () => {
    words = shuffle(request.response.map(obj => obj.word));
    NUMBER_OF_WORDS = words.length;
  };

  request.send();

  let wait = 0;
  let usedWords = 0;
  const showWord = (t = 2000) => {
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
        wordBox.value = words[usedWords];
        revert(0);
      }, t * 0.8);
      setTimeout(() => {
        wordBox.classList.remove('hide');
        wordBox.classList.add('show');
      }, t);
      setTimeout(() => {
        if (usedWords < NUMBER_OF_WORDS - 1) {
          usedWords++;
        } else {
          usedWords = 0;
          words = shuffle(words);
        }
        wait = 0;
      }, t + 500);
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

  wordForm.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
      showWord();
      event.preventDefault();
    }
  });

  btnAffirm.addEventListener('click', event => {
    showWord();
    event.preventDefault();
  });

  btnAffirm.onmousedown = event => {
    btnAffirm.style.color = '#139C63';
    btnAffirm.style.backgroundColor = '#E3FFF1';
    btnAffirm.style.borderColor = '#139C63';
    event.preventDefault();
  };

  btnAffirm.onmouseup = event => {
    revert();
    event.preventDefault();
  };

  btnAffirm.onmouseleave = () => {
    revert();
    event.preventDefault();
  };

  btnAffirm.onmouseover = () => {
    if (!wait) {
      btnAffirm.style.backgroundColor = '#E0FFED';
      btnAffirm.style.borderColor = '#139C63';
    }
  };
})();

},{"./components/Shuffle":1}]},{},[2]);
