import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = { email, password };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSignup}
        className="bg-gray-900 p-8 rounded-xl w-96 text-white"
      >
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
          Signup
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-400 text-black font-bold py-2 rounded hover:bg-orange-500"
        >
          Signup
        </button>
        <p className="mt-4 text-center">
          Already have an account? <span className="text-orange-400 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
