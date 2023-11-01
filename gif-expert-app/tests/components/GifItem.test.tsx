import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';
import React from "react";

describe('Test in <GifItem />', () => {
    
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'; 

    test('should match the snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test('should render de image with the indicated URL and ALT', () => {
        render(<GifItem title={title} url={url} />);
        // // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const {src, alt} = screen.getByRole('img') as HTMLImageElement;
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('should display the title in the component', () => {
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();
    })
    
    
    

});