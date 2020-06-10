import Image from 'next/image'
import logo from '../assets/logo.png'

const Link = ({ title, style='' }) => (
  <p className={`text-white text-base text-center mx-2 ${style}`}>
    {title}
  </p>
)

const Footer = () => (
  <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
    <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
      <div className='flex flex-[0.5] justify-center items-center'>
        <Image src={logo} alt='logo' />
      </div>
      <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
        <Link title='Market' />
        <Link title='Exchange' />
        <Link title='Tutorials' />
        <Link title='Wallet' />
      </div>
    </div>
    <div className='flex justify-center items-center flex-col my-5'>
      <Link title='Come Join Us' style='text-sm' />
      <Link title='test@email.com' style='text-sm' />
    </div>
    <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400' />
    <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
      <Link title='@FE Test Task' style='text-sm' />
      <Link title='All rights reserved' style='text-sm' />
    </div>
  </div>
)

export default Footer
