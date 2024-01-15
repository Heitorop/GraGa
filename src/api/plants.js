import { dataJson } from '../fakeDb/plantsDB.js';

export function fetchData(startIndex, batchSize, signal) {
  const endIndex = startIndex + batchSize;
  const batch = dataJson.slice(startIndex, endIndex);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(signal);
      if (signal.aborted) {
        console.log('Запит було скасовано');
        resolve('');
      }
      resolve(batch);
    }, 1500); // Імітуємо затримку у 1000 мс (1 секунда)
  });
}
