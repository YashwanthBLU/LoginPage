import { useState } from "react";

const XLogin = () => {
  const [username, setUsername] = useState("");  // State for username
  const [password, setPassword] = useState("");  // State for password
  const [error, setError] = useState("");  // State for error message
  const [success, setSuccess] = useState(false);  // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form from submitting the default way

    // Reset error message on every submission attempt
    setError('');

    // Check if the username and password are correct
    if (!username || !password) {
      // If fields are empty, show an error message
      setError("Please fill in both username and password.");
      return;
    }

    // Check for valid credentials
    if (username === "user" && password === "password") {
      setSuccess(true);  // Set success state to true
    } else {
      setError("Invalid username or password");  // Show error message for invalid credentials
      setSuccess(false);  // Ensure success state is false on failure
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {/* Show error message if present */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show welcome message if login is successful */}
      {success ? (
        <p>Welcome, user!</p>
      ) : (
        // Show the login form if not logged in
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default XLogin;
