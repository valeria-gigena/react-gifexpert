
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en nuestro hook useFetchGifs', () => {
    test('debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Ponch'))
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    test('debe retornar un arreglo de imagenes', async () => {
        const { result } = renderHook(() => useFetchGifs('One Ponch'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            
        )
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});