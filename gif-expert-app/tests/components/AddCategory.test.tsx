import { AddCategory } from '../../src/components/AddCategory';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'

describe('Test in <AddCategory />', () => {

    test('should change eeeethe value in text box', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.input( input, {target: {value: 'Saitama'} });

        expect( input.value ).toBe('Saitama');

    });

    test('should call onNewCategory if the input has a value', () => {
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole( 'form' )

        fireEvent.input( input, {target: {value: 'Saitama'} });
        expect( input.value ).toBe('Saitama');
        
        fireEvent.submit( form );
        expect( input.value ).toBe( '' )

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('should not call onNewCategory if the input value is empty', () => {
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole( 'form' )
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    })
    


    
    
})
