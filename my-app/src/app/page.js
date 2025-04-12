import MyComponent from "./mycomponent/page";
import GetStarted, { GetStopped } from "./components/getstart/page";
import Navbar from "./components/navbar/page";


export default function Page() {
  return (
    <div>
      <Navbar />
      <h1 className="text-xl">Welcome to main Page pk!</h1>
      <GetStarted />
      <GetStopped /> 
      <MyComponent/>
     

    </div>
  );
}
