(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// This will exist in the form of db/affirm.json
// Entries will be added or removed via Admin/WordForm/addWord.js

module.exports = [
  'kind',
  'loved',
  'friendly',
  'smart',
  'enchanting',
  'lovely',
  'refreshing',
  'unique',
  'caring',
  'trying',
  'present',
  'alive',
  'breathing',
  'the only you',
  'sincere',
  'loyal',
  'engaging',
  'independent',
  'capable',
  'creative',
  'intuitive',
  'perceptive',
  'kind-hearted',
  'purposeful',
  'intentional',
  'beautiful',
  'inspiring',
  'captivating'
];

},{}],2:[function(require,module,exports){
// This was put together to quickly provide a working demonstration. It will all be refactored beyond recognition.

const words = require('./db');

const NUMBER_OF_WORDS = words.length;
const wordForm = document.querySelector('#wordForm');
const wordBox = document.querySelector('.word-box');
const btnAffirm = document.querySelector('.btn-affirm');
const getWord = () => words[Math.ceil(Math.random() * NUMBER_OF_WORDS)];

btnAffirm.onClick = e => {
  e.preventDefault();
  wordBox.value = getWord();
};

btnAffirm.addEventListener('click', e => {
  e.preventDefault();
  wordBox.value = getWord();
});

wordForm.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    wordBox.value = getWord();
  }
});

btnAffirm.onmousedown = () => {
  btnAffirm.style.color = '#fafcfb';
  btnAffirm.style.backgroundColor = '#30c9a3';
  btnAffirm.style.borderColor = '#fafcfb';
};
btnAffirm.onmouseup = () => revert();
btnAffirm.onmouseleave = () => revert();
btnAffirm.onmouseover = () => {
  btnAffirm.style.color = '#139C63';
  btnAffirm.style.backgroundColor = '#E3FFF1';
  btnAffirm.style.borderColor = '#139C63';
};

const revert = () => {
  btnAffirm.style.color = '#30c9a3';
  btnAffirm.style.backgroundColor = '#fafcfb';
  btnAffirm.style.borderColor = '#30c9a3';
};

},{"./db":1}]},{},[2]);
