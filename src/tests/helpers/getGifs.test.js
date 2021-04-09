
import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGits Fecth', () => {
    

    test('debe de traer 10 elementos', async() => {
        
        const gits = await getGifs('Gravity Fall');

        expect( gits.length ).toBe( 10 );
    });


    test('debe de traer 0 elementos', async() => {
        
        const gits = await getGifs('');

        expect( gits.length ).toBe( 0 );
    });
    
    
})
