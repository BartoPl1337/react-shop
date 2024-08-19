import React from 'react'

const SearchBar = ({search, data}) => {
  return (
    <div className='bg-black text-white'>
        <div className='flex my-16 mx-24'>
        {data.filter((item) => {
            return search.toLowerCase() === '' ? item : item.brand.toLowerCase().includes(search)
        }).map((item) => {
            return (
                <div className='flex flex-1'>
                    <img src={item.img} alt={item.brand} 
                    className='h-20 object-contain'
                    />
                    <h1 className='font-semibold'>{item.brand}</h1>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default SearchBar