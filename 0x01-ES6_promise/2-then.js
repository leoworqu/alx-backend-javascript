export default function handleResponseFromAPI(promise) {
  return promise.then(response => {
    console.log("Got a response from the API");
    return { status: 200, body: 'success' };
  }).catch(error => {
    console.error("Error occurred:", error.message);
    return new Error();
  });
}
