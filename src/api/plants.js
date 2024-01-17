import { dataJson } from '../fakeDb/plantsDB.js';

export const fetchData = (startIndex, batchSize, signal) => {
  const endIndex = startIndex + batchSize;
  const batch = dataJson.slice(startIndex, endIndex);
  return new Promise((resolve) => {
    setTimeout(() => {
      if (signal.aborted) {
        console.log('Запит було скасовано');
        resolve('');
      }
      resolve(batch);
    }, 1500);
  });
};

export const fetchDataByName = (str) => {
  const batch = dataJson;
  const filteretBatch = batch.filter((item) =>
    item.name.toLowerCase().includes(str.toLowerCase())
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteretBatch);
    }, 1500);
  });
};
