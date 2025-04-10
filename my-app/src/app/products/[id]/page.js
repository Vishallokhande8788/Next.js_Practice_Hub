export default function ProductDetails({ params }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.id}</p>
    </div>
  );
}
