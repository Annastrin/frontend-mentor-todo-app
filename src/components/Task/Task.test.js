import { render, fireEvent } from '@testing-library/react';
import {Task} from './Task';
import {string2KebabWithId} from './Task';

it('should convert string to kebab lower case string with id', () => {
  let initialString = 'Do the first test with react testing library';
  let initialId = 0;

  expect(string2KebabWithId(initialString, initialId)).toBe('do-the-first-test-with-react-testing-library-0');
});

it('should call change task state function with proper args', () => {
  const mockClick = jest.fn();
  let taskProps = {
    taskName: "Do the first test with react testing library",
    taskId: 0,
    completed: false,
    onToggleTaskState: mockClick
  };

  const {getByRole} = render(
    <Task {...taskProps} />
  );

  const checkbox = getByRole('checkbox', {name: 'Do the first test with react testing library'});
  fireEvent.click(checkbox);
  expect(mockClick).toHaveBeenCalled();
  expect(mockClick).toHaveBeenCalledTimes(1);
  expect(mockClick).toHaveBeenCalledWith("0", true);
});