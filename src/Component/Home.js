import React from 'react';
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


function Home() {
     
   
    return (
      <>
        <button>
          <Link to="/">Home</Link>
        </button>

        <button>
          <Link to="/User">Users</Link>
        </button>

        <button>
          <Link to="/Form">Form</Link>
        </button>

        <nav>
          <Outlet />
        </nav>
      </>
    );
}

export default Home;