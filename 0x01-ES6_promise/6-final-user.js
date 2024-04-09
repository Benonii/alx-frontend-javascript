import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const allPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const finalUser = Promise.any(allPromises)
    .then((resolvedValues) => [
      {
        status: resolvedValues[0].status,
        value: `${resolvedValues[0].firstName} ${resolvedValues[0].lastName}`,
      },
      {
        status: resolvedValues[1].status,
        value: resolvedValues[1],
      },
    ]).catch(() => {
      // Nothing to see here folks
    });

  return finalUser;
}
