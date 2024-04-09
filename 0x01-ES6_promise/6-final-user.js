import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const allPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const finalUser = Promise.allSettled(allPromises)
    .then((objArray) => objArray).catch(() => {
      Error();
    });

  return finalUser;
}
