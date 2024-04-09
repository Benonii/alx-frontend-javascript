import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const result = Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const profileString = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
      console.log(profileString);
      return profileString;
    }).catch(() => {
      console.log('Signup system offline');
    });
  return result;
}
