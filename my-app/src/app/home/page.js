import Link from "next/link";
import User from "../components/user";
export default function InnerHome() {
  return (
    <div>
      <h1 className="text-xl text-green-600">This is home !</h1>
      <User />
      <Link href="/">Main page Link</Link>
      <Link href="/"> <button>Place order </button></Link>
    </div>
  );
}
