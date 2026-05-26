import React from 'react';
function Pricing() {
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className="fs-2 mb-3">Unbeatable Pricing</h1>
            <p> we offer competitive rates without any hidden fees. flat fees for all our services.</p>
            <a href="" style={{ textDecoration: 'none' }}>See pricing</a>
          </div>
         <div className="col-2"></div>
         <div className="col-6">
            <div className="row">
                <div className="col p-3 border">
                    <h1 className='mb-3'>₹0</h1>
                    <p>free equity delivery</p>
            </div>
                <div className="col p-3 border">
                      <h1 className='mb-3'>₹20</h1>
                    <p>intraday and F&O</p>
            </div>
         </div>
        
        </div>
      </div>
      </div>
     );
     }
 
export default Pricing;