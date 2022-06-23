import React, { useContext} from "react";
import { SWContext } from "../../context/context";
import "./Gallery.scss";
const Gallery = () => {
  const { peliculas } = useContext(SWContext);
  // const [Img, setImg] = useState();
 

  return (
    <div className='peliculas'>
      {/* {Img ? <img className='imagen' src={Img} alt='img' /> : null} */}
      
      {peliculas.map((pelicula) => (
        
        
        <div
          key={pelicula._id}
          class='carta'>
          <h2 className='hover'>{pelicula.titulo}</h2>
          <img src={pelicula.caratula} alt={pelicula.titulo}></img>
          
        </div>

        
      ))}
    </div>
  );
};

export default Gallery;