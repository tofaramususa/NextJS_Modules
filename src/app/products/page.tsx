import Link from "next/link";
import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductList() {
	var ProductId = 1;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href={`products/${ProductId}`}>Product {ProductId++}</Link>
      </h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </div>
  );
}
