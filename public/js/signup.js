const newFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
console.log(username,password);
  if (username && password) {
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to load page');
    }
  }
};



document
  .querySelector('#signup-form').addEventListener('submit', signupFormHandler);
