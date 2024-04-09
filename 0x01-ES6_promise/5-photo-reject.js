export default function uploadPhoto(filename) {
  const photoReject = Promise.reject(Error(`${filename} cannot be processed`));

  photoReject.catch(() => {
    // Do nothing
  });

  return photoReject;
}
