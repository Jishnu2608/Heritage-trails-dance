import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Dance
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"To dance is to be in tune with the universe, a movement that expresses 
                       what words cannot articulate. Dance is the poetry of motion, a language that transcends barriers."</span>
                       <span className="secondaryText"><i>~ Martha Graham</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-dance-hero-img.jpeg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero