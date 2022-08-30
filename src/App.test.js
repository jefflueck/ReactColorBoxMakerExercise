import { render, fireEvent } from '@testing-library/react';
import App from './App';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

test('it renders the App', () => {
  render(<App />);
});

test('it renders a Box List Component', () => {
  render(<BoxList />);
  render(<NewBoxForm />);
});

test('it matches snapshot for Box in BoxList', () => {
  const { asFragment } = render(
    <Box background-color="red" width="200px" height="200px" />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('it should add a new box', () => {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const input = getByLabelText('Color:');
  const width = getByLabelText('Width:');
  const height = getByLabelText('Height:');
  const btn = queryByText('Add Box');
  fireEvent.change(input, width, height, {
    target: { backgroundColor: 'red', width: '200px', height: '200px' },
  });
  fireEvent.click(btn);
  expect(<Box background-color={'red'} width={'200px'} height={'200px'} />);
});
