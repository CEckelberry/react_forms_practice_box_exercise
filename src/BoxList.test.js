import React from "react";
import { render, fireEvent, getByTitle, screen } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
    render(<BoxList />);
});

it("matches the snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const colorInput = getByLabelText("backgroundColor:");
    const widthInput = getByLabelText("width:");
    const heightInput = getByLabelText("height:");
    const btn = queryByText("Add Box");
    
    expect(queryByText('style="background-color: yellow')).not.toBeInTheDocument();
    expect(queryByText('backgroundColor:')).toBeInTheDocument();
    fireEvent.change(colorInput, { target: {value: 'yellow'}});
    fireEvent.change(widthInput, { target: {value: '150'}});
    fireEvent.change(heightInput, { target: {value: '150'}});
    fireEvent.click(btn);
    const yellowBox = screen.getByTitle('yellow')
    expect(yellowBox).toBeInTheDocument();
})