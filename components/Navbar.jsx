import Image from 'next/image'
import { useRouter } from 'next/router'

import logo from '../assets/logo.png'

const Navbar = () => {
  const router = useRouter()
  return (
    (
      <nav className='flex justify-between'>
        <div className='mt-6 ml-[5%]'>
          <Image src={logo} alt='logo' onClick={() => router.push('/')} className='w-32 cursor-pointer' />
        </div>
        <ul className='text-white flex gap-x-10 font-semibold text-lg mt-6 mr-[7%]'>
          <li>Market</li>
          <li>Exchange</li>
          <li>Tutorials </li>
          <li>Wallets</li>
          <li className='bg-blue-600 p-2 px-8 rounded-3xl -mt-2 cursor-pointer'>
            Login
          </li>
        </ul>
      </nav>
    )
  )
}

export default Navbar
