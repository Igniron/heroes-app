import React from 'react'
import HeroList from '../hero/HeroList'

const MarvelScreen = () => 
{
  return (
    <>
        <h1>Marvel</h1>
        <hr/>

        <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}

export default MarvelScreen