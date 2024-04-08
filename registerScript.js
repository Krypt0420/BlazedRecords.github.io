function registerUser(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const termsChecked = document.getElementById('termsCheckbox').checked;
  
    if (!termsChecked) {
      alert('Please agree to the terms and conditions.');
      return;
    }
  
    const user = {
      username: username,
      email: email,
      password: password,
    };
  
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Registration failed. Please try again.');
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        clearForm();
      })
      .catch((error) => {
        console.error('Error:', error.message);
        alert('Registration failed. Please try again.');
      });
  }
  
  function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('termsCheckbox').checked = false;
  }