import React from 'react';
import { render } from '@testing-library/react';
import SectionHeader from './SectionHeader';

describe('SectionHeader component unit tests', () => {
    test('renders header text', () => {
        const { getByText } = render(<SectionHeader text='header text'/>)
        expect(
            getByText('header text')
        ).toBeVisible();
    });
});