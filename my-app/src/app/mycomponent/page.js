"use client"; // Marking this file as a Client Component

import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const MyComponent = () => {
  const router = useRouter();

  const navigate = () => {
    router.push("/placeorder"); // Navigates to "/home"
  };

  return (
    <div>
      <button onClick={navigate}>place order</button>
    </div>
  );
};

export default MyComponent;
