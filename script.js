'use strict';

const form = document.querySelector('form');
const messageInput = document.querySelector('.message-input');
const messageBody = document.querySelector('.message-body');
const msgText = document.querySelector('.message-text');
const msgBody = document.querySelector('.message-bdy');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const phone = document.querySelector('.phone');

class App {
  #phoneNumber;
  #messageBody;
  #safRegex =
    '^(?:+254|254|0)((1|7)(?:(?:[0–9][0–9])|(?:[0–9][0–9][0–9]))[0–9]{6})$';
  #airtelRegex =
    '^(?:254|+254|0)?(7(?:(?:[3][0-9])|(?:5[0-6])|(8[0-9]))[0-9]{6})$';

  constructor() {
    console.log('Application has started');

    form.addEventListener('submit', this.#getInputValues.bind(this));
    form.addEventListener('submit', this.#appendInputValues.bind(this));
    overlay.addEventListener('click', this.#closeModal.bind(this));
    close.addEventListener('click', this.#closeModal.bind(this));
  }

  #getInputValues(e) {
    e.preventDefault();

    this.#phoneNumber = +messageInput.value;
    this.#messageBody = messageBody.value;

    messageInput.value = messageBody.value = '';
  }

  #appendInputValues() {
    // open the modal
    popup.classList.remove('hidden');

    phone.innerHTML = `<h3 class="phone">Send to : ${this.#phoneNumber}</h3>`;
    msgBody.textContent = this.#messageBody;
  }

  #closeModal() {
    popup.classList.add('hidden');
  }
}

const app = new App();
