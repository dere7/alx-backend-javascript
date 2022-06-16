export default function getFullResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const done = true;

    if (done) {
      resolve('Resolved');
    } else {
      reject(Error('Oops! Error'));
    }
  });
}
