import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchBox';

test('calls handleSearchBox with user input', async () => {
  const mockFn = jest.fn();
  render(<SearchBox handleSearchBox={mockFn} />);

  const input = screen.getByPlaceholderText(/pokemon search/i);
  await userEvent.type(input, 'pikachu');

  expect(mockFn).toHaveBeenLastCalledWith('pikachu');
});
