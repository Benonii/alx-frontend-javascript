import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const allPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const finalUser = Promise.allSettled(allPromises).then((results) => {
    const objArray = [];
    for (const result of results) {
      objArray.push({
        "status": result.status,
        "value": result.status === 'fulfilled'
          ? result.value : result.reason.message,
      });
    }
    return objArray;
  }).catch(() => {});

  return finalUser;
}
