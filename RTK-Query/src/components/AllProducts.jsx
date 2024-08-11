import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  //   console.log(data);
  if (isError) {
    return <h1>We have encountered an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data?.products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
