export default async function handler(req, res) {
  try {
    const data = await someAsyncOperation();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Backend Error Recovery (API):

export default async function handler(req, res) {
    try {
      const data = await fetchData();
      res.status(200).json(data);
    } catch (error) {
      // error ke badh  fallback response dena 
      res.status(500).json({ error: 'Failed to fetch data, please try again later.' });
    }
  }
  
//   Error Handling in API (for nested routes)

// pages/api/blog/[id].js
export default async function handler(req, res) {
    try {
      const data = await fetchBlogFromDB(req.query.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Blog fetch failed' });
    }
  }
  