
import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from "../../hooks/useFetchGifs";



jest.mock("../../hooks/useFetchGifs");


describe('pruebas en GifGrid', () => {
    const category = 'One Punch';
    test('debe mostrar loading al inicio', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items traidas de useFetchGifs', () => {
        const category = 'One Punch';
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: 'ABC1',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});