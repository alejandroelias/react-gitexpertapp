
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Tests in hook useFetchGifs', () => {
    
    test('should return the state initial', async() => {
        
        const {result,waitForNextUpdate} = renderHook (()=> useFetchGifs('One Punch'));

        const {data, loading} = result.current;
        
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
         
    })

    test('should return array of images and loading = false', async() => {
        
        const {result, waitForNextUpdate} = renderHook (()=> useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const {data, loading} = result.current;
        
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);

    })
    
    
})
