import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
     <Navbar />
     <div className="min-h-[calc(100vh-303px)]">
       <Outlet />
     </div>
      <Footer>
        </Footer>
        </>
     
   
  )
}

export default MainLayout