import React from 'react'
import {Link} from 'react-router-dom'
import homeimage from '../images/raw/Girls-Listen-Music_0.jpg'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='container'>
<h1>MUSIC DB</h1>
<Link to="/">
<img src={homeimage} alt="homeimage" />
</Link>



    </div>
  )
}

export default Navbar