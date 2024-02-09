import React from "react";
import { render } from "@testing-library/react";
import BoxList from "./BoxList";

describe('BoxList component', () => {
    it('renders without crashing', () => {
        render(<BoxList />);
    });

    it('matches snapshot', () => {
        const { container } = render(<BoxList />);
        expect(container).toMatchSnapshot();
    });
});