import { useState } from 'react'
import { SiEthereum } from 'react-icons/si'
import { useRouter } from 'next/router'

import { CRYPTOS } from '../utils/constants'
import { TokenSelector } from '.'


const TableItem = ({ title, style='' }) => (
  <div className={`text-center border-2 p-3 ${style}`}>
    {title}
  </div>
)

const Welcome = () => {
  const [firstToken, setFirstToken] = useState()
  const [secondToken, setSecondToken] = useState()
  const [firstTokenAmount, setFirstTokenAmount] = useState(0)

  const router = useRouter()

  const remainingTokens = [...CRYPTOS]
  remainingTokens.splice(CRYPTOS.indexOf(firstToken), 1)

  const handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('tokens', JSON.stringify({ base: firstToken.tokenHash, quote: secondToken.tokenHash }))
    router.push('order-book')
  }

  return (
    <div className='lg:flex justify-between'>
      <div className='w-fit ml-[5%] mt-[5%] text-white'>
        <h1 className='text-white text-4xl'>
          Exchange Crypto<br /> 
          from anywhere with KRYPT
        </h1>
        <p className='w-[90%] text-gray-400 mt-4'>
          Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
        </p>
        <button
          type='submit'
          className='bg-blue-600 w-1/2 rounded-3xl p-2 mt-4'
        >
          Connect Wallet
        </button>
        <div className='grid grid-cols-3 mt-14'>
          <TableItem title='Reliability' style='rounded-tl-2xl' />
          <TableItem title='Security' />
          <TableItem title='Ethereum' style='rounded-tr-2xl' />
          <TableItem title='Web 3.0' style='rounded-bl-2xl' />
          <TableItem title='Low fees' />
          <TableItem title='Blockchain' style='rounded-br-2xl' />
        </div>
      </div>
      <div className='lg:ml-40 lg:w-[25%] mr-[7%] md:w-[50%] md:ml-44 w-[90%] ml-14'>
        <div className='bg-gradient-to-r from-blue-300 to-red-400 lg:w-[100%] p-4 lg:mt-24 rounded-xl'>
          <div className='flex space-x-72'>
            <SiEthereum className='justify-start' color='white' size={40} />
          </div>
          <div className='mt-16'>
            <h2 className='text-white font-semibold'>Exchange Crypto</h2>
          </div>
        </div>
        <div className=''>
          <form className='space-y-2 bg-gray-900 p-4'>
            <TokenSelector 
              heading={'You Pay:'} 
              tokens={CRYPTOS} 
              selected={firstToken} 
              setSelected={setFirstToken}
              amount={firstTokenAmount}
              setAmount={setFirstTokenAmount}
            />
            <TokenSelector 
              heading={'You Receive:'} 
              tokens={remainingTokens} 
              selected={secondToken} 
              setSelected={setSecondToken} 
              amount={secondToken ? firstTokenAmount : 0}
              setAmount={setFirstTokenAmount}
            />
           <div>
            <button
                type='submit'
                disabled={!(firstToken && secondToken)}
                className={`bg-blue-600 w-full rounded-3xl p-2 mt-3 text-white ${!(firstToken && secondToken) && 'opacity-50 cursor-not-allowed'}`}
                onClick={handleSubmit}
              >
                Exchange
              </button>
           </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Welcome
