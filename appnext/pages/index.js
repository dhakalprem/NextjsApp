import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home()
{
  return (
    <div>
      <Head><title>Home</title></Head>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/" className=''>Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/product">Product</Link></li>
        <li><Link href="/product/mobile">Mobile</Link></li>
        <li><Link href="/product/laptop">Laptop</Link></li>
      </ul>
      <style jsx>{`
h2 {
  color:red
}
`}</style>
      <h2> I have style JSX CSS</h2>
      <h3>I have  Global CSS </h3>
      <h4 className={styles.green}> I have Compnent Base Module CSS</h4>
      <Image src="/images/ridi.jpg" height={500} width={800} />
    </div >
  )
}
