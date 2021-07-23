import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar component unit tests', () => {
    test('renders link to hero image', () => {
        const { getByText } = render(<NavBar/>)
        expect(
            getByText('Courtney Fay')
        ).toBeVisible();
        expect(
            getByText('Courtney Fay')
        ).toHaveAttribute('href', '#hero');
    });
    test('renders link to skills section', () => {
        const { getByText } = render(<NavBar/>)
        expect(
            getByText('Skills')
        ).toBeVisible();
        expect(
            getByText('Skills')
        ).toHaveAttribute('href', '#skills');
    });
    test('renders link to blog section', () => {
        const { getByText } = render(<NavBar/>)
        expect(
            getByText('Blog')
        ).toBeVisible();
        expect(
            getByText('Blog')
        ).toHaveAttribute('href', '#blog');
    });
    test('renders link to connect section', () => {
        const { getByText } = render(<NavBar/>)
        expect(
            getByText('Connect')
        ).toBeVisible();
        expect(
            getByText('Connect')
        ).toHaveAttribute('href', '#connect');
    });
});