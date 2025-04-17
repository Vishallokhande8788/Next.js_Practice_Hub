import MyComponent from "./mycomponent/page";
import GetStarted, { GetStopped } from "./components/getstart/page";
import Navbar from "./components/navbar/page";
import LikeButton from "./components/LikeButton"; // 👈 New import

export default function Page() {
  return (
    <div>
      <Navbar />
      <h1 className="text-xl">Welcome to main Page pk!</h1>
      <GetStarted />
      <GetStopped />
      <MyComponent />

      {/* 👇 Like Button (Client Component) */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Do you like this page?</h2>
        <LikeButton />
      </div>
    </div>
  );
}
