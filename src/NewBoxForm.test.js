import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

describe('NewBoxForm component', () => {
    it('renders without crashing', () => {
        render(<NewBoxForm addBox={() => { }} />);
    });

    it('matches snapshot', () => {
        const { container } = render(<NewBoxForm addBox={() => { }} />);
        expect(container).toMatchSnapshot();
    });

    it('calls addBox function with form data on submission', () => {
        const addBoxMock = jest.fn();
        const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBoxMock} />);

        fireEvent.change(getByLabelText(/color/i), { target: { value: 'blue' } });
        fireEvent.change(getByLabelText(/height/i), { target: { value: '50' } });
        fireEvent.change(getByLabelText(/width/i), { target: { value: '50' } });

        fireEvent.click(getByText(/add box/i));

        expect(addBoxMock).toHaveBeenCalledWith({ color: 'blue', height: '50', width: '50' });
    });
});