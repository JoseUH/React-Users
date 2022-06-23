import React,{ useState, useEffect, createContext} from "react";

export const SWContext = createContext();

const BASEURL = "https://node-back-tolkien.vercel.app";

export const SWContextProvider =({ children }) => {

    const [peliculas, setPeliculas] = useState([]);
    
  useEffect(() => {
    
    const getPeliculas = async () => {
        const peliculasAPI = await fetch(`${BASEURL}/peliculas`);
        const peliculasJSON = await peliculasAPI.json();
        setPeliculas(peliculasJSON.peliculas);
        
        
        
    };
    getPeliculas();
  }, []);



  return (
    <SWContext.Provider value={{ peliculas }}>
      {children}
    </SWContext.Provider>
  );    
}