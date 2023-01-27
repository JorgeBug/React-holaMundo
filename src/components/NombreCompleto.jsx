import React from 'react'
import '../App.css'
import { Edad } from './Edad';

export const NombreCompleto = (props) => {
    console.log("props",props);
  return (
    <> {/*React.Fragment*/}
      <h3 className="Juan">Me llamo {props.name}</h3>
      <Edad className='Juan'> Mi edad es ={props.age} show={props.show}</Edad>
    </>
  );
}

//export { NombreCompleto, OtraExportacion}