import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    //La funcion jest.fn() es el equivalente a la funcion ()=> {}
    let wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    })
    //beforeEach, esta relaciona al ciclo de vida de la app
    //Se usa en test de submit
    
    test('debe mostrar el componenete correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target:{ value: value }});

        expect( wrapper.find('p').text().trim()).toBe( value );
    })
    
    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola mundo';

        //1.simular el inputChange
        wrapper.find('input').simulate('change', { target: { value }});

        //2.simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){}});

        //3.setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        // expect( setCategories ).toHaveBeenCalledTimes(1);
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));

        //4.el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value')).toBe('');

    })
    
    
    
})
