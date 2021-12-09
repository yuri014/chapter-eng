const createObserver = () => {
  let observers = [];

  const subscribe = (callback) => {
    observers.push(callback);
  };

  const unsubscribe = (callback) => {
    observers = observers.filter((subscriber) => subscriber !== callback);
  };

  const notify = (data) => {
    observers.forEach((observer) => {
      observer(data);
    });
  };

  return {
    observers,
    subscribe,
    unsubscribe,
    notify,
  };
};

const input = document.querySelector('input');

const obs1 = document.querySelector('#obs1');
const obs2 = document.querySelector('#obs2');

const subscribe1 = document.querySelector('#sub1');
const subscribe2 = document.querySelector('#sub2');

const unsubscribe1 = document.querySelector('#unsub1');
const unsubscribe2 = document.querySelector('#unsub2');

const observer = createObserver();

const updateUI = (node) => (text) => {
  node.textContent = text;
};

const updateUI1 = updateUI(obs1);
const updateUI2 = updateUI(obs2);

observer.subscribe(updateUI1);
observer.subscribe(updateUI2);

subscribe1.addEventListener('click', () => observer.subscribe(updateUI1));
unsubscribe1.addEventListener('click', () => observer.unsubscribe(updateUI1));
subscribe2.addEventListener('click', () => observer.subscribe(updateUI2));
unsubscribe2.addEventListener('click', () => observer.unsubscribe(updateUI2));

input.addEventListener('keyup', (e) => {
  observer.notify(e.target.value);
});
