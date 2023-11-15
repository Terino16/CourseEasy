
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
  <div className=''>
  <Navbar/>
  {children}
  <Footer/>    
    </div>
  );
};

export default Layout;
