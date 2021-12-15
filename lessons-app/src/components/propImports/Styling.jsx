import React from 'react';
import "../css/Styling.css";

// https://youtu.be/eow125xV5-c

function Styling() {
  return (
    <div className='container'>
      <h1>Styling</h1>
      <a href='https://youtu.be/eow125xV5-c'>Link</a>

      <div className='row row1'>
        <div className='col-sm-12 col-md-6 col-lg-2'>Col One</div>
        <div className='col-sm-12 col-md-6 col-lg-8'>Col Two</div>
      </div>

      <div className='rwo row2'>
        <div className='col-sm-6 order-2'>Col Three</div>
        <div className='col-sm-6 order-1'>Col Four</div>
      </div>

      <div className='row row3'>
        <div className='col-sm-4 offset-2'>Col Five</div>
        <div className='col-sm-4 offset-1'>Col Six</div>
      </div>

      <div className='row my-custom-row justify-content-center align-items-center gx-5'>
        <div className='col-sm-4'><div class="p-3 border bg-light">Col Seven</div></div>
        <div className='col-sm-4'><div class="p-3 border bg-light">Col Eight</div></div>
      </div>

      <div className='row'>
        <div className='col'><button type="button" className="btn btn-primary">Primary</button></div>
        <div className='col'><button type="button" className="btn btn-secondary">Secondary</button></div>
        <div className='col'><button type="button" className="btn btn-danger">Danger</button></div>
      </div>

      <div className="container">
        <div className="row row-cols-3">
          <div className="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi magnam minus facere quos corporis sequi ab qui nostrum est beatae odio animi quod, amet doloremque accusantium illum eaque debitis.</p>
          </div>
          <div className="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi magnam minus facere quos corporis sequi ab qui nostrum est beatae odio animi quod, amet doloremque accusantium illum eaque debitis.</p>
          </div>
          <div className="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi magnam minus facere quos corporis sequi ab qui nostrum est beatae odio animi quod, amet doloremque accusantium illum eaque debitis.</p>
          </div>
          <div className="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi magnam minus facere quos corporis sequi ab qui nostrum est beatae odio animi quod, amet doloremque accusantium illum eaque debitis.</p>
          </div>
          <div className="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi magnam minus facere quos corporis sequi ab qui nostrum est beatae odio animi quod, amet doloremque accusantium illum eaque debitis.</p>
          </div>
          <div className="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi magnam minus facere quos corporis sequi ab qui nostrum est beatae odio animi quod, amet doloremque accusantium illum eaque debitis.</p>
          </div>

        </div>
      </div>


    </div>

  )
}

export default Styling;
