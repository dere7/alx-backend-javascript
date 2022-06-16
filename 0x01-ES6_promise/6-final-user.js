import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser, uploadPhoto]).then(([user, photo]) => [
    { status: 'resolved', value: user },
    { status: 'resolved', value: photo },
  ]).catch(([userError, photoError]) => [
    { status: 'rejected', value: userError },
    { status: 'rejected', value: photoError },
  ]);
}
