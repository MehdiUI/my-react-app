import banniere from '../assets/Image source 1.png'
import '../Styles/Footer.sass'

function Banner() {
    return (
      <div className='Banner'>
        <img src={banniere} alt="Bannière" />
        <div className="Banner__overlay"></div>
        <div className="Banner__text">Chez vous, partout et ailleurs</div>
      </div>
    );
  }
  
  export default Banner ;
  