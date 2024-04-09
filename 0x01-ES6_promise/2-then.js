export default function handleResponseFromAPI(promise) {
  const result = promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success',
    };
  });
  promise.catch(() => {
    console.log('Got a response from the API');
  });

  return result;
}
