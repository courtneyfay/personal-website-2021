import React from 'react';
import { render } from '@testing-library/react';
import Blog from './Blog';

describe('Blog component unit tests', () => {
    const markdownFiles = [
        {
            default: 'TestPost.md',
        },
        {
            default: 'TestPost2.md',
        },
        {
            default: 'TestPost3.md',
        },
    ]
    test('if given no markdown files, renders header text', () => {
        const { getByText } = render(<Blog markdownFiles={[]}/>)
        expect(
            getByText('blog')
        ).toBeVisible();
    });
    test('if given markdown files, renders loader at first', () => {
        const { getByText } = render(<Blog markdownFiles={markdownFiles}/>)
        expect(
            getByText('...')
        ).toBeVisible();
    });
});