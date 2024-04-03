
import { renderHook, screen } from "@testing-library/react";
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en nuestro hook useFetchGifs', () => {
    test('debe regresar el estado inicial', () => {
     const {result }=   renderHook(() => useFetchGifs('One Ponch'))
     const { images, isLoading} = result.current;
     expect(images.length).toBe(0);
     expect(isLoading).toBeTruthy();
    });
});