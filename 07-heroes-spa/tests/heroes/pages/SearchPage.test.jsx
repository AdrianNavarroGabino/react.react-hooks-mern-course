import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <SearchPage />', () => {
    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrarse correctamente con valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar a Batman y el input con el valor del queryString', () => {
        render(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toBe('http://localhost/assets/heroes/dc-batman.jpg');
    });

    test('Debe mostrar un error si no encuentra el hero', () => {
        render(
            <MemoryRouter initialEntries={ ['/search?q=batman123'] } >
                <SearchPage />
            </MemoryRouter>
        );

        expect(screen.getByText('No hero with')).toBeTruthy();
    });

    test('Debe llamar el navigate a la pantalla nueva', () => {
        render(
            <MemoryRouter initialEntries={ ['/search'] } >
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
    });
});