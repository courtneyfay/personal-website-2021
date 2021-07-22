import React from 'react';
import { render } from '@testing-library/react';
import Connect from './Connect';

describe('Connect component unit tests', () => {
    test('renders Connect section header', () => {
        const { getByText } = render(<Connect/>)
        expect(
            getByText('connect')
        ).toBeVisible();
    });
    test('renders email section with clickable link', () => {
        const { getByText } = render(<Connect/>)
        expect(
            getByText('Email me')
        ).toBeVisible();
        expect(
            getByText('fay.courtney@gmail.com')
        ).toHaveAttribute('href', 'mailto:fay.courtney@gmail.com');
        expect(
            getByText('fay.courtney@gmail.com')
        ).toHaveAttribute('rel', 'noopener noreferrer');
    });
    test('renders GitHub section with clickable link', () => {
        const { getByText } = render(<Connect/>);
        expect(
            getByText('Follow me on Github')
        ).toBeVisible();
        expect(
            getByText('@courtneyfay')
        ).toHaveAttribute('href', 'https://github.com/courtneyfay');
        expect(
            getByText('@courtneyfay')
        ).toHaveAttribute('rel', 'noopener noreferrer');
        expect(
            getByText('@courtneyfay')
        ).toHaveAttribute('target', '_blank');
    });
    test('renders resume section with downloadable resume', () => {
        const { getByText } = render(<Connect />);
        expect(
            getByText('Download ⌄')
        ).toBeVisible();
        expect(
            getByText('my resume')
        ).toHaveAttribute('href', 'Courtney Fay - Frontend Web Developer - Resume.pdf');
        expect(
            getByText('my resume')
        ).toHaveAttribute('target', '_blank');
        expect(
            getByText('my resume')
        ).toHaveAttribute('rel', 'noopener noreferrer');
        expect(
            getByText('my resume')
        ).toHaveAttribute('download', '');
    });
    test('renders LinkedIn section with clickable link', () => {
        const { getByText } = render(<Connect />);
        expect(
            getByText('Send me a message on LinkedIn')
        ).toBeVisible();
        expect(
            getByText('/in/faycourtney')
        ).toHaveAttribute('href', 'https://www.linkedin.com/in/faycourtney/');
        expect(
            getByText('/in/faycourtney')
        ).toHaveAttribute('rel', 'noopener noreferrer');
        expect(
            getByText('/in/faycourtney')
        ).toHaveAttribute('target', '_blank');
        expect(
            getByText('/in/faycourtney')
        ).toHaveAttribute('download', '');
    });
});