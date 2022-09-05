
import '../css/components.css';
// import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = (name) => {

    console.log('creando etiqueta h1...');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ name }`;
    document.body.append( h1 );

    //img
    
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append( img );
    // console.log(webpackLogo);

}
