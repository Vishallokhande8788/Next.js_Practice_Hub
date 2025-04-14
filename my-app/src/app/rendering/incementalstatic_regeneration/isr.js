// Define which dynamic routes should be generated at build time
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

// This will re-generate the page in the background every 10 seconds
export const revalidate = 10;

export default async function BlogPage({ params }) {
  const res = await fetch(`https://api.example.com/blog/${params.id}`);
  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
