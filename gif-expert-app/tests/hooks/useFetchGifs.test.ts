import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test in hook useFetchGifs', () => {
  
    test('should retur initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs('one punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();

    });

    test('should return an array of images and isLoading as false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('one punch') );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();

    });
    

})
