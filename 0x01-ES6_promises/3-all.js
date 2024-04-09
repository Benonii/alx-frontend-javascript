import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const allPromises = Promise.all([uploadPhoto(), createUser()]);

  allPromises.then((resolvedValues) => {
    console.log(`${resolvedValues[0].body} ${resolvedValues[1].firstName}`
      + `${resolvedValues[1].lastName}`);
  });

  allPromises.catch(() => {
    console.log('Signup system offline');
  });
}
