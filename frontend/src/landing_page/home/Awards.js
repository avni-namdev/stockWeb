import React from 'react';
function Awards() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Largest Broker'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Broker in India</h1>
                    <p>We are proud to be the largest broker in India, serving millions of customers across the country. Our commitment to providing exceptional service and innovative solutions has made us the go-to choice for investors of all levels.</p>
                    <img src='media/images/pressLogos.png' alt='press logos' style={{width:"80%"}} />
                </div>
            </div>
        </div>
     );
}
export default Awards;