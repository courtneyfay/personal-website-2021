import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage component unit tests', () => {
    test('renders welcome text', () => {
        const { getByText } = render(<HeroImage/>)
        expect(
            getByText('Hey! My name is')
        ).toBeVisible();
        expect(
            getByText('Courtney Fay')
        ).toBeVisible();
        expect(
            getByText('Unity Developer in Denver, CO')
        ).toBeVisible();
    });
});