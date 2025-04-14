// app/profile/page.js
export const metadata = {
    title: "Profile - Vishal",
  };
  
  export default async function ProfilePage() {
    const res = await fetch("https://api.example.com/profile");
    const data = await res.json();
  
    return (
      <div>
        <h1>Hello {data.name}!</h1>
        <p>This is your profile page.</p>
      </div>
    );
  }
  