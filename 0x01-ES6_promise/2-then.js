export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return('success',), 200};
  });
  promise.catch(() => ({}));
}
