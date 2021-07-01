import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';
import * as json from './mocks/data.json';
import fetch from 'jest-fetch-mock';

beforeEach(() => {
    fetch.resetMocks();
});


test('renders the covid update table', async () => {

    fetch.mockResponseOnce(JSON.stringify(json));

    render(<App/>);

    const title = screen.getByText(/Covid-19 Daily Update/i);
    expect(title).toBeInTheDocument();

    await waitFor(() => {
        // Test if we have got the results from the mock API
        const chinaRow = screen.getByText(/China/i);
        expect(chinaRow).toBeInTheDocument();
    })

});

test('search is working', async () => {

    fetch.mockResponseOnce(JSON.stringify(json));

    const utils = render(<App/>);

    await waitFor(() => {
        // Change search wrong value
        const input: HTMLInputElement = utils.getByPlaceholderText('Search Country') as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'abcdefgeh'}});
        expect(input.value).toBe('abcdefgeh');

        const chinaRow = screen.queryByText(/China/i);
        expect(chinaRow).not.toBeInTheDocument();
    })

});



