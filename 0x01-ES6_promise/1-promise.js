export default function getResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(Error({
        Error: 'The fake API is not working currently',
      }));
    }
  });

  promise.catch(() => {
    // Do nothing
  });

  return promise;
}
