'use client'
import SearchManufacturer from "./SearchManufacturer"
import React, { useState } from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation"
interface buttonProp {
  otherClasses: string,
}
const SearchButton = ({ otherClasses }: buttonProp) =>
(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === '' && model === '') {
      return alert("Please enter a manufacturer or model")
    }
    updateSearchParams(
      model.toString(),
      manufacturer.toString()
    )
  }
  const updateSearchParams = (model: string, manufacturer: string) => {
    const serchParams = new URLSearchParams(window.location.search)
    if (model) {
      serchParams.set('model', model)
    } else {
      serchParams.delete('model')
    }
    if (manufacturer) {
      serchParams.set('manufacturer', manufacturer)
    } else {
      serchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${serchParams.toString()}`
    router.push(newPathname)
  }
return (
  <form className='searchbar' onSubmit={handleSearch}>
    <div className="searchbar__item">
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManuFacturer}
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <div className="searchbar__item">
      <Image
        src="/model-icon.png"
        width={25}
        height={25}
        className="absolute w-[20px] h-[20px] ml-4"
        alt="car model"
      />
      <input
        type="text"
        name="model"
        value={model}
        placeholder="Tiguan"
        className="searchbar__input"
        onChange={(e) => setModel(e.target.value)}
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <SearchButton otherClasses='max-sm:hidden' />
  </form>
)
}

export default SearchBar