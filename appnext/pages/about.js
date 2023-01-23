import Link from 'next/link'
import Head from 'next/head'
export default function About()
{
    return (
        <div>
            <Head><title>About</title></Head>
            <h1>About Page</h1>
            <ul>
                <li><Link href="/" className=''>Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/product/mobile">Mobile</Link></li>
                <li><Link href="/product/laptop">Laptop</Link></li>
            </ul>
            <h3> Global style in next js</h3>
        </div>
    )
}