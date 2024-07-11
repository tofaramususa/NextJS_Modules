import { Metadata } from 'next';
type Props = {
	params: {
		productId: string;
	}
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> =>
	{
		const title = await new Promise(resolve => {
			setTimeout(() => {
				resolve(`Iphone ${params.productId}`)
			}, 1000)
		
		})
		return {
			title: `Product ${params.productId}`,
		}
	}

export default function ProductList() {
  return (<div>
    <h1>Product List</h1>
    <h2>Product 1</h2>
    <h2>Product 2</h2>
    <h2>Product 3</h2>
  </div>)
}
