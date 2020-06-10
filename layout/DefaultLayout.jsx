import { Footer, Navbar, Services } from '../components'

const DefaultLayout = ({ children }) => (
  <div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
      <Navbar />
      {children}
    </div>
    <div>
      <Services />
      <Footer />
    </div>
  </div>
)

export default DefaultLayout
