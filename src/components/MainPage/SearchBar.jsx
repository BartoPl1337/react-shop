import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

const SearchBar = ({search, data, setShowSearchBar, inputRef}) => {
    const ref = useRef(null)
    const handleClickOutside = (e) => {
        setShowSearchBar(false)
    }
    useOnClickOutside([inputRef,ref], handleClickOutside)
  return (
    <div className='bg-black text-white'
    ref={ref}
    >
        <div className='flex my-16 mx-24'>
        {data.filter((item) => {
            return search.toLowerCase() === '' ? item : item.brand.toLowerCase().includes(search)
        }).slice(0,3).map((item) => {
            return (
                <div className='flex flex-1'>
                    <img src={item.img} alt={item.brand} 
                    className='h-20 object-contain'
                    />
                    <a className='font-semibold underline p-4'>{item.brand}</a>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default SearchBar