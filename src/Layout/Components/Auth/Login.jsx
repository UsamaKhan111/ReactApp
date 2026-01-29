import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
const { user, setIsLoggedIn  } = useOutletContext();
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (!user) {
      setMessage("No user found. Signup first.");
      return;
    }

    if (email === user.email && password === user.password) {
        setIsLoggedIn(true);
      setMessage("Login successful");
      console.log("Logged in:", email);
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl w-96 text-white"
      >
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-400 text-black font-bold py-2 rounded hover:bg-orange-500"
        >
          Login
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Login;
