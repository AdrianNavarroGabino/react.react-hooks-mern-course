import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Pruebas en <MainApp />', () => {
    test('Debe mostrar el MainApp', () => {
        render(
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('Debe mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={ ['/login'] } >
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
});