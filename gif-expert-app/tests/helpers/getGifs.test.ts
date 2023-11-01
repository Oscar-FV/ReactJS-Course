import { getGifs } from '../../src/helpers/getGifs';

describe('Test in getGifs', () => {

    test('should return an array of gifs', async () => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect ( gifs[0] ).toHaveProperty( 'id' );
        expect ( gifs[0] ).toHaveProperty( 'title' );
        expect ( gifs[0] ).toHaveProperty( 'url' );
    })
    
})
