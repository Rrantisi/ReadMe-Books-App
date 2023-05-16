const BASE_URL = '/api/users';

export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (res.ok) {
    // The fetch method will not raise an error unless there's a network failure. This is why we need to check the res.ok property to see if the server returned a successful response (status code in the 200s).
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}
