import React from 'react';
import { Parallax, Background } from "react-parallax";
import imageAccueil1 from '../images/pexels-lukas-574077.jpg'

const main = () => {
    const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
    const image2 =
  "https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_960_720.png";
    const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
    const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  const insideStyles = {
    background: "white",
    
    padding: 20,
    position: "relative",
    top: "80%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: 5 + 'px',
    width: 100
  };
  const object ={
    width: "50%",
    position: "relative",
    top: "50%",
    transform: "translate(-50%,-50%)",
    left: "50%",
    padding: 20,
    margingTop: 100
  };
  const profil = {
    borderRadius: 50 + '%',
    width: "50" + '%',
    height: "50" + '%'
  }

    return (
        <div>
            <main className="main">
            
        
        <Parallax bgImage={imageAccueil1} strength={900} className="radius" >
            <div style={{ height: 500, borderRadius: 5 + 'px', width:'100%'}}>
            <div style={insideStyles}>HTML inside the parallax</div>
            </div>
        </Parallax>
        <h1>Accueil</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo vitae rem quasi placeat praesentium nulla iusto sunt, aut et deserunt sint ratione error iste, dolore nostrum neque debitis quibusdam?</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint rerum quam nostrum repellendus ab ipsa quisquam omnis ducimus fugiat non sunt eligendi illo quaerat, cupiditate perferendis unde repellat sapiente eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo vitae rem quasi placeat praesentium nulla iusto sunt, aut et deserunt sint ratione error iste, dolore nostrum neque debitis quibusdam?</p>
        <br />
        <Parallax

        //bgImage="../images/pexels-lukas-574077.jpg"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'relative',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '20%',
                    right: "auto" ,
                    top: '50%',
                    margin: "2rem",
                    width: percentage * 300,
                    height: percentage * 300,
                    borderRadius: 50 + '%'
                }}
  
            />  
        )}>
         

        <div style={{
                    position: 'relative',
                    top: '-50px',
                    left: '1100px'
                }}>dsqdqs</div>
        <p>... Content</p>
    </Parallax>
                
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint rerum quam nostrum repellendus ab ipsa quisquam omnis ducimus fugiat non sunt eligendi illo quaerat, cupiditate perferendis unde repellat sapiente eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo vitae rem quasi placeat praesentium nulla iusto sunt, aut et deserunt sint ratione error iste, dolore nostrum neque debitis quibusdam?</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint rerum quam nostrum repellendus ab ipsa quisquam omnis ducimus fugiat non sunt eligendi illo quaerat, cupiditate perferendis unde repellat sapiente eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo vitae rem quasi placeat praesentium nulla iusto sunt, aut et deserunt sint ratione error iste, dolore nostrum neque debitis quibusdam?</p>
       
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint rerum quam nostrum repellendus ab ipsa quisquam omnis ducimus fugiat non sunt eligendi illo quaerat, cupiditate perferendis unde repellat sapiente eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo vitae rem quasi placeat praesentium nulla iusto sunt, aut et deserunt sint ratione error iste, dolore nostrum neque debitis quibusdam?</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint rerum quam nostrum repellendus ab ipsa quisquam omnis ducimus fugiat non sunt eligendi illo quaerat, cupiditate perferendis unde repellat sapiente eos.</p>
      </main>
        </div>
    );
};

export default main;