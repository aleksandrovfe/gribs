import React from 'react';

const Parralax = () => {
  return (
    <div>
      <div className="par-body">
        <section className="parallax">
          <h1 className="par-header">Parallax Effect</h1>
        </section>
    </div>
    <div className="wrapper">
      <a className="parent" href="#">
        <span className="children"></span>
        <span className="children"></span>
        <span className="children"></span>
        <span Name="children"></span>
        Neon Button
      </a>
    </div>

    <div>
      <div className="section1">
        <div className="container1">
          <h2 className="parr-header">Fire</h2>
        </div>
      </div>
      <div className="section1">
        <div className="container1">
          <h2 className="parr-header">Water</h2>
        </div>
      </div>
      <div className="section1">
        <div className="container1">
          <h2 className="parr-header">Ice</h2>
        </div>
      </div>
      <div className="section1">
        <div className="container1">
          <h2 className="parr-header">Sand</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Parralax;