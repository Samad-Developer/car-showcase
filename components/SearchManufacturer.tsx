'use client'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { manufacturers } from '@/constants'
const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className='absolute top-[14px]'>
              <Image
                src="/car-logo.svg"
                width={20}
                height={20}
                className="ml-4"
                alt="Car Logo"
              />
            </Combobox.Button>
            <Combobox.Input
             className='search-manufacturer__input'
             placeholder='Volkswagen'
             displayValue={(manufacturer: string) => manufacturer}
             onChange={(e) => setQuery(e.target.value)}
            />
            <Transition 
             as={Fragment} 
             leave='transition ease-in duratin-100'
             leaveFrom='opacity-100'
             leaveTo='opacity-0'
             afterLeave={() => setQuery('')}
             >
              <Combobox.Options></Combobox.Options>
            </Transition>
          </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer