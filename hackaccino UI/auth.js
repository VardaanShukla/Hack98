// Save user during signup
function handleSignup(e) {
  e.preventDefault();
  const name = e.target.querySelector('input[placeholder="Full Name"]').value;
  const email = e.target.querySelector('input[placeholder="Email"]').value;
  const password = e.target.querySelector('input[placeholder="Password"]').value;

  // Check if user already exists
  const existing = localStorage.getItem(email);
  if (existing) {
    alert("User already exists!");
    return;
  }

  // Store user in localStorage
  const userData = { name, email, password };
  localStorage.setItem(email, JSON.stringify(userData));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}

// Login check
function handleLogin(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[placeholder="Email"]').value;
  const password = e.target.querySelector('input[placeholder="Password"]').value;

  const user = localStorage.getItem(email);
  if (!user) {
    alert("User not found!");
    return;
  }

  const userData = JSON.parse(user);
  if (userData.password === password) {
    alert(`Welcome back, ${userData.name}!`);
    // Redirect to main app or dashboard
    window.location.href = "index.html";
  } else {
    alert("Incorrect password!");
  }
}
