import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const classNames = (...classes) => classes.filter(Boolean).join(' ')

const TokenSelector = ({ heading, tokens, selected, setSelected, amount, setAmount }) => (
  <Listbox value={selected} onChange={setSelected}>
    {({ open }) => <>
      <Listbox.Label className='block text-sm font-medium leading-6 text-white'>
        {heading}
      </Listbox.Label>
      <div className='relative mt-2'>
        <div className='flex justify-between'>
          <Listbox.Button className='relative w-[47%] cursor-default rounded-md bg-grey py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6'>
            <span className='flex items-center'>
              {selected?.avatar && 
                <img src={selected?.avatar} alt='' className='h-5 w-5 mr-2 flex-shrink-0 rounded-full' />}
              <span className='block truncate'>{selected?.name ?? 'Select Token'}</span>
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
              <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <input
            className='bg-gray-800 p-2 w-[47%] text-white'
            disabled={heading.includes('Receive')}
            name='amount'
            onChange={e => setAmount(parseInt(e.target.value))}
            placeholder={heading}
            type='number'
            value={heading.includes('Receive') ? (amount * Math.random()).toFixed(2) : amount}
          />
        </div>
        <Transition
          show={open}
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-[47%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {tokens.map(crypto => (
              <Listbox.Option
                key={crypto.id}
                value={crypto}
                className={({ active }) =>
                  classNames(
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-3 pr-9'
                  )
                }
              >
                {({ selected, active }) => <>
                  <div className='flex items-center'>
                    <img src={crypto.avatar} alt='' className='h-5 w-5 flex-shrink-0 rounded-full' />
                    <span
                      className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                    >
                      {crypto.name}
                    </span>
                  </div>
                  {selected && (
                    <span
                      className={classNames(
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4'
                      )}
                    >
                      <CheckIcon className='h-5 w-5' aria-hidden='true' />
                    </span>
                  )}
                </>}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </>}
  </Listbox>
)

export default TokenSelector
