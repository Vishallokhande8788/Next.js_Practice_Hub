try {
  // Some operation that might fail
} catch (error) {
  console.error(error);
  // Handle error
}

//  Frontend Error Recovery:

try {
//  xyz error operations 

} catch (error) {
  setError(true); // error hone per  error state set kare 
  console.log(error);
}

if (error) {
  return <div>Error occurred, please try again later.</div>;
}


//  try...catch in getServerSideProps / getStaticProps
//   For data fetching in nested dynamic pages.

// pages/blog/[id].js
export async function getServerSideProps(context) {
    try {
      const res = await fetch(`https://api.example.com/blog/${context.params.id}`);
      const data = await res.json();
  
      return { props: { data } };
    } catch (error) {
      return { props: { error: true } }; // handle with fallback UI
    }
  }
  
  export default function Blog({ data, error }) {
    if (error) return <p>Failed to load blog. Please try again later.</p>;
  
    return <div>{data.title}</div>;
  }
  