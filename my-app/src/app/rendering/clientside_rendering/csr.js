// app/components/UserProfile.jsx
'use client';  // 👈 CSR enable

import { useEffect, useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')  // 👈 Data client per  fetch hota hai 
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      {user ? <h1>Hello, {user.name}</h1> : <p>Loading...</p>}
    </div>
  );
}
