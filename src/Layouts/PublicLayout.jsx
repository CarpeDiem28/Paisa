
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const PublicLayout = ({children}) => {
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <main className=' bg-gray-50 overflow-y-scroll '>   
    <div>{children}</div>
    </main>
    <Footer/>
  </div>
  );
}

export default PublicLayout
