
import { AddCategory } from '../../components/AddCategory'
import { fireEvent, render, screen } from "@testing-library/react";

describe('pruebas en AddCategory', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } })
        expect(input.value).toBe('Saitama');
    });

    test('debe llamar onNewCategory si input tiene valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe llamar onNewCategory si input esta vacio', () => {
    
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
     
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0)

    });
});