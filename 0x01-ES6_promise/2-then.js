export default async function handleResponseFromAPI(promise) {
  const result = promise.then(() => {
    console.log('Got a response from the API');
    return (
      {
        status: 200,
        body: 'success',
      });
  }).catch(() => {
    console.log('Got a response from the API');
    return (Error());
  });

  return result;
}
