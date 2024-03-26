
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();

    if (name && email) {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ name, email }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/');
          alert('You have been added to the list');
        } else {
          alert('Failed to sign up.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to sign up.');
      }
    }
  };

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);