import { useEffect, useState } from 'react'

import { WEBSOCKET_URL, WEBSOCKET_REQUEST_ID } from '../utils/constants'
import OrderTable from './OrderTable'


const OrderBook = () => {
  const [bids, setBids] = useState([])
  const [asks, setAsks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const isBidOrAsk = (order) => {
    const { makerToken, takerToken } = order
  
    if (makerToken !== takerToken) {
      if (makerToken.toLowerCase() === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
        return 'Bid'
      else if (takerToken.toLowerCase() === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
        return 'Ask'
    }
  
    return 'Neither'
  }

  useEffect(() => {
    const socket = new WebSocket(WEBSOCKET_URL)

    socket.onopen = () => {
      console.log('WebSocket connection established.')
      setIsLoading(false)
      socket.send(JSON.stringify({ type: 'subscribe', channel: 'orders', requestId: WEBSOCKET_REQUEST_ID }))
    }

    socket.onmessage = event => {
      const data = JSON.parse(event.data)
      const order = data?.payload?.[0]?.order
      const orderType = isBidOrAsk(order)
    
      if (orderType === 'Bid')
        setBids((prevBids) => [...prevBids, order])
      else if (orderType === 'Ask')
        setAsks((prevAsks) => [...prevAsks, order])
    }
    
    socket.onclose = () => {
      console.log('WebSocket connection closed.')
    }

    return () => {
      socket.close()
    }
  }, [])

  return (
    <div className='mt-2 flex flex-col items-center justify-center'>
      {isLoading ? (
        <div className='flex items-center justify-center h-screen' role='status'>
          <div className='animate-spin rounded-full h-24 w-24 border-b-2 border-primary'></div>
        </div>
      ) : (
        <>
          <OrderTable data={bids} heading={'Real Time Order Bids'} />
          <div className='h-[2px] w-[80%] mt-[5%] bg-gradient-to-r from-gray-700 via-white to-gray-700' />
          <OrderTable data={asks} heading={'Real Time Order Asks'} />
        </>
      )}
    </div>
  )
}

export default OrderBook
