// components/UserProfile.js
import { useUser } from "../context/UserContext";

export default function UserProfile() {
  const { user, setUser } = useUser();

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.name}</h1>
      ) : (
        <button onClick={() => setUser({ name: "Vishal" })}>Login</button>
      )}
    </div>
  );
}
