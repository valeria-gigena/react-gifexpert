
import { render, screen } from "@testing-library/react";
import { GifItem } from '../../components/GifItem'

describe('Pruebas en <GifItem>', () => {
    const title = 'Saitama';
    const url = 'http://one-ponch/saitama.png';


    test('debe hacer match SnapShot ', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar imagen con URL y ALT indicado ', () => {
        render(<GifItem title={title} url={url} />);
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect (src).toBe(url);
        expect (alt).toBe(title);
    });
    test('que se muestre correctamente el titulo',()=>{
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByText("0")).toBeInTheDocument();
        expect(screen.getByText(title)).toBeTruthy();
    })



})
