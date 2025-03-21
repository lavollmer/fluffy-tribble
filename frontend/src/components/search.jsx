import React from 'react'

const search = () => {
  return (
    <div>
        <form>
            <label for="search">Search</label>
            <input type="text" id="search" name="search" />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default search