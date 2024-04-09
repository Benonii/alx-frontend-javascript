import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const allPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const finalUser = Promise.all(allPromises)
    .then((resolvedValues) => [
      {
        status: resolvedValues[0].status,
        value: `${resolvedValues[0].firstName} ${resolvedValues[0].lastName}`,
      },
      {
        status: resolvedValues[1].status,
        value: resolvedValues[1],
      },
    ]).catch((rejectionReason) => {
      [
        {
          status: null,
          value: rejectionReason,
        },
      ]
    });

  return finalUser;
}
