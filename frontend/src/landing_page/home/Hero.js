import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className="col">
                    <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5 text-center '  style={{width:"1500px"}}/>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p className='mt-2'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button className='p-2 mt-3 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
                </div>
                
            </div>
        </div>
    );
}

export default Hero;