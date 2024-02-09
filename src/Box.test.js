import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

describe('Box component', () => {
    it('renders without crashing', () => {
        render(<Box color="red" height={50} width={50} remove={() => { }} />);
    });

    it('matches snapshot', () => {
        const { container } = render(<Box color="red" height={50} width={50} remove={() => { }} />);
        expect(container).toMatchSnapshot();
    });
});