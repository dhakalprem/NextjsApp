import Navbar from '../components/Navbar'
import Headerpage from './Headerpage'
export default function Layout({children}) {
  return (
    <>
   <Navbar/>
     <Headerpage/>
       <main>
       {children}
     </main>
    </>
  )
}
