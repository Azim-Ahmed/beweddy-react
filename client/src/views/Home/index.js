import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid d-flex justify-content-between'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <Link to='/login' className='btn btn-primary'>
          be registry
        </Link>
      </div>
    </nav>
  );
};

export default Home;
