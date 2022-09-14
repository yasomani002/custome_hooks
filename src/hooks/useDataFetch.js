import React, { useEffect, useState } from 'react'

 function useDataFetch(url) {

    const [ data, setdata ] = useState()

    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((data)=> setdata(data))
      .catch((error) => console.log(error))
    },[url])
  return { data }
  
}

export default useDataFetch