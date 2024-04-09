import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const allPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const finalUser = Promise.allSettled(allPromises)
    .then((objArray) => [
      {
        status: objArray[0].status,
        value: objArray[0].value,
      },
      {
        status: objArray[1].status,
        value: objArray[1].reason,
      },
    ]);

  return finalUser;
}
