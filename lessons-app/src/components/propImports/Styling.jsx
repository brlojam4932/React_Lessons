import React from 'react';
import "../css/Styling.css";

// https://youtu.be/eow125xV5-c

function Styling() {
  return (
    <>
      <div className='container'>
        <h1>Styling</h1>
        <a href='https://youtu.be/eow125xV5-c'>Link to YouTube video</a>

        <div className='row row1'>
          <div className='col-sm-12 col-md-6 col-lg-2' style={{ backgroundColor: "purple" }}>Row 1: Col One</div>
          <div className='col-sm-12 col-md-6 col-lg-8'>Row 1: Col Two</div>
        </div>

        <div className='row row2'>
          <div className='col-sm-6 order-2' style={{ backgroundColor: "green" }}>Row 2: Col Three</div>
          <div className='col-sm-6 order-1' style={{ backgroundColor: "orange" }}>Row 2: Col Four</div>
        </div>

        <div className='row row3'>
          <div className='col-sm-4 offset-2' style={{ backgroundColor: "lightblue", color: 'black' }}>Row 3: Col Five</div>
          <div className='col-sm-4 offset-1' style={{ backgroundColor: 'darkred' }}>Row 3: Col Six</div>
        </div>

        <div className='row my-custom-row justify-content-center align-items-center gx-5'>
          <div className='col-sm-4'><div class="p-3 border bg-light">Col Seven</div></div>
          <div className='col-sm-4'><div class="p-3 border bg-dark">Col Eight</div></div>
        </div>

        <div className='row'>
          <div className='col'><button type="button" className="btn btn-primary">Primary</button></div>
          <div className='col'><button type="button" className="btn btn-secondary">Secondary</button></div>
          <div className='col'><button type="button" className="btn btn-danger">Danger</button></div>
        </div>

        <div className="container">
          <div className="row row-cols-4">
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

        <h2>Flexbox ex1</h2>
        <a href='https://youtu.be/fYq5PXgSsbE'>Link to video</a>
        <div className='flexbox-container'>
          <div className='flexbox-item flexbox-item-1'></div>
          <div className='flexbox-item flexbox-item-2'></div>
          <div className='flexbox-item flexbox-item-3'></div>
        </div>

        <h2>Flexbox ex2</h2>
        <div className='flexbox-container2'>
          <div className='flexbox-item2 flexbox-item2-1'>item 1</div>
          <div className='flexbox-item2 flexbox-item2-2'>item 2</div>
          <div className='flexbox-item2 flexbox-item2-3'>item 3</div>
        </div>
      </div>
      {/* practice - Flexbox CSS in 20 minutes */}
      <br />
      <div>
        <a href='https://youtu.be/JJSoEo8JSnc'>Flexbox CSS in 20 minutes</a>
      </div>
      <br />
      <div className='container-1'>
        <div className='box-1'>
          <h3>Box One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='box-2'>
          <h3>Box Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='box-3'>
          <h3>Box Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className='container-2'>
        <div className='container-2-box'>
          <h3>Box Four</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-2-box'>
          <h3>Box Five</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-2-box'>
          <h3>Box Six</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className='container-3'>
        <div className='container-3-box'>
          <h3>Box Seven</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-3-box'>
          <h3>Box Eight</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-3-box'>
          <h3>Box Nine</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-3-box'>
          <h3>Box Ten</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-3-box'>
          <h3>Box Eleven</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-3-box'>
          <h3>Box Twelve</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </>


  )
}

export default Styling;
