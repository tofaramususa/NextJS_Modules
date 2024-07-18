import Link from 'next/link';

export default function Home() {
	return <>
		<h1>Welcome Home!</h1>
		<Link href="/dashboard/1">Dashboards</Link>
		<Link href="/products">Products</Link>
	</>
}