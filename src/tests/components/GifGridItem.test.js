import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title = { title } url = { url } /> );


    test('Debe de mostrar el componente correctamente', () => {
        expect ( wrapper ).toMatchSnapshot();
        //Comprueba que el componente GifGridItem (renderizado) sea similar al Snapshot
        //Las cons title y url son necesarias porque el componente las requiere (GifGridItem.propTypes)

    });

    test('Debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        //Este test esta relacionado con el test de arriba
        //Se comprueba el "formato"
    });
    
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');

        expect ( img.prop( 'src' )).toBe( url );
        expect ( img.prop( 'alt' )).toBe( title );
        //Este test esta relacionado con el test de arriba
        //Se comprueba el "formato"
    });

    test('Debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn')).toBe( true)
        //Comprueba que el componente tenga en su div la className = 'card animate__animated animate__fadeInLeft'
        
    
    });

})
