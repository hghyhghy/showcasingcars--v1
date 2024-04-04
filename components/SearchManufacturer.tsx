
"use client";
import React, { useState ,Fragment} from 'react'
import { Combobox,Transition } from '@headlessui/react';
import { manufacturers } from './../constants/index';
import { SearchManuFacturerProps } from './../types/index';
import Image from 'next/image';

const SearchManufacturer = ({manufacturer,setManuFacturer}:SearchManuFacturerProps) => {

  const [query, setQuery] = useState("")

 const filteredManufacturers =
  query === "" ? manufacturers : manufacturers.filter((item) => 
     item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
 )

  return (
    <div className='search-manufacturer list-none'>
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className='relative w-full list-none'>
            <Combobox.Button className='absolute top-[14px] list-none'>
                 <Image
                  src='/car-logo.svg'
                  width={20}
                  height={20}
                  className='ml-4'
                  alt='car logo' 
                 />

            </Combobox.Button>
            <Combobox.Input
                        className='search-manufacturer__input list-none'
                        placeholder='Volkswagen..'
                        displayValue={(manufacturer:string) => manufacturer }
                        onChange={(e) => setQuery(e.target.value)}

            />

        <Transition.Child
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <Transition.Child></>
            leave='transition ease-in duration-100 list-none'
            leaveFrom='opacity-100 list-none'
            leaveTo='opacity-0 list-none'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >

            <Combobox.Option
            value=""
            >
               { filteredManufacturers.map((item) => (
              

                  <Combobox.Option
                  key={item}
                  className={({active}) =>  `relative search-manufacturer__option ${
                    active ? "bg-primary-blue text-white  list-none" : "text-gray-900 list-none"
                  }`}
                  value={item}
                  >
                     {({selected,active}) => (
                      <>
                       <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
               )}
                  </Combobox.Option>
                ))

              }
            </Combobox.Option>

            </Transition.Child>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
