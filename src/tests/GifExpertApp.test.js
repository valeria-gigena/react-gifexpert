import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from '../GifExpertApp';


describe('pruebas sobre <GitExpertApp/>', () => {
    test('ver al submit si ejecuta ', () => {
        render(<GifExpertApp />)
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        const personaje = 'Hahaha';
        fireEvent.input(input, { target: { value: personaje } })
        fireEvent.submit(form);
        screen.debug();
        const { container } = render(<GifExpertApp />)
        expect(container.getElementsByClassName('card-grid').length).toBe(2);
    });
});