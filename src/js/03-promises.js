import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { delay, step, amount } = event.target.elements;

  let firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountPromises = Number(amount.value);

  for (let i = 1; i <= amountPromises; i++) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    firstDelay += delayStep;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promiseResult = { position, delay };

      if (shouldResolve) {
        resolve(promiseResult);
      } else {
        reject(promiseResult);
      }
    }, delay);
  });
}
