import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([user, photo]) => [
      { status: 'rejected', value: user },
      { status: 'rejected', value: photo },
    ])
    .catch((err) => [
      { status: 'rejected', value: err.toString },
      { status: 'rejected', value: err.toString },
    ]);
}
