import Counter from "../components/Counter";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const renderMessage = screen.getByText(/Counter/);
    expect(renderMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const countNum = screen.getByTestId(/count/);
    expect(countNum).toHaveTextContent(/0/);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    userEvent.click(screen.getByText('+'));
    const countNum = screen.getByTestId(/count/);
    expect(countNum).toHaveTextContent(/1/);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    userEvent.click(screen.getByText('-'));

    const countNum = screen.getByTestId(/count/);
    expect(countNum).toHaveTextContent(/-1/);
});
