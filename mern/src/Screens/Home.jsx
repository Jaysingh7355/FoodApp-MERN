import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Card from '../Components/Card';

function Home() {
    return (
        <div>
          <div><Navbar /></div>
           <div><Card /></div>
          <div><Footer /></div>
        </div>
    )
}

export default Home;
