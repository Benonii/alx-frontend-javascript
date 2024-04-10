import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResult = await uploadPhoto();
    const userResult = await createUser();

    const userObject = {
      photo: photoResult,
      user: userResult,
    };
    return userObject;
  } catch (e) {
    const photoResult = null;
    const userResult = null;

    const userObject = {
      photo: photoResult,
      user: userResult,
    };
    return userObject;
  }
}
