import { render, screen } from '@testing-library/react' 
import { GifGrid } from '../../src/components/GifGridt';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import React from 'react';
import { IGiphy } from '../../src/helpers/getGifs';

jest.mock( '../../src/hooks/useFetchGifs' );

describe('test in <GiftGrid />', () => {

    const category: string = 'one punch';

    test('should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [] as IGiphy[],
            isLoading: true
        });
        
        render( <GifGrid category = { category }/> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
        
    });

    test('should display items when useFetchGifs loads the images', () => {

        const gifs: IGiphy[] = [ 
            {
                id: 'abc',
                title: 'Saitama',
                url: 'aaaaaTest'
            },
            {
                id: 'abcd',
                title: 'Goku',
                url: 'aaaaaTest2'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category = { category }/> );
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);

    })
    
})
