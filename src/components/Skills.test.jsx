import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

describe('Skills component unit tests', () => {
    test('renders header text', () => {
        const { getByText } = render(<Skills/>)
        expect(
            getByText('skills')
        ).toBeVisible();
    });
});