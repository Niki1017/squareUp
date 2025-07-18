import './css/Home.css';
import holograma from '../assets/hologram-graphics.png';

export default function Home() {

  return (
    <div className="studio">
      <div className="container">
        <h1>A Digital Product Studio that will Work</h1>
        <div className="foring">
          <p>for <span>Startups</span> , <span>Enterprise leaders</span> , <span>Media & Publishers</span> and <span>Social Good</span></p>
            <img className='hologramma' src={holograma} alt="" />
          <div className="buttons">
            <a href="">Our Works</a>
            <a className='contact-us-link' href="">Contact Us</a>
          </div>
        </div>
        <p className='trusted'>Trusted By 250+ Companies</p>
      </div>
    </div>
  );
}