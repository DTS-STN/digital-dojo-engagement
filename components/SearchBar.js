import { useRouter } from 'next/router'
import { useState } from 'react'

function SearchBar({ className }) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={className || 'border-2 border-periwinkle rounded px-2'}
        placeholder="search site..."
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  )
}

export default SearchBar
