import React from 'react';
function Stats() {
    return ( 
    <div className='container p-5'>
        <div className='row p-5'>
            <div className="col-6 p-5">
                <h1 className="fs-2 mb-5">Trust with confidence</h1>
                <h2 className="fs-4">Customer-first always</h2>
                <p className="text-muted">That's why 1.3 million customers trust us with their investments.</p>

                <h2 className="fs-4">No spam or gimmicks</h2>
                <p className="text-muted">No gimmicks, just straightforward investment advice.</p>

                <h2 className="fs-4">The StockWeb universe</h2>
                <p className="text-muted">Not just an web, but a whole ecosystem. our investments in 30+ fintech startups offer you tailored services soecific to your needs..</p>
                
                <h2 className="fs-4">Do better with money</h2>
                <p className="text-muted">Our platform helps you make informed investment decisions and grow your wealth over time.</p>
            
            </div>
            <div className="col-6">
                <img src='media/images/ecosystem.png' alt='Ecosystem' style={{width:"90%"}}  ></img>
            </div>
            <div className="text-center mt-4">
                <a href="#" className="mx-5">Explore our products</a>
                 <a href="#">Try kite demo</a>
            </div>
            </div>
    </div>
     );
}
export default Stats;