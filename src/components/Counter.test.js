import { fireEvent, render } from '@testing-library/vue';
import Counter from './Counter.vue';

test('Origin title is [當前點擊次數0]', () => {
  const { getByTestId } = render(Counter);
  const title = getByTestId('currentNumber');
  expect(title.innerHTML).toBe('當前點擊次數0');
});

test('After I click button the title will change to [當前點擊次數1]', async () => {
  const { getByTestId, getByText } = render(Counter);

  const incrementButton = getByText('+');
  await fireEvent.click(incrementButton);

  const title = getByTestId('currentNumber');
  expect(title.innerHTML).toBe('當前點擊次數10');
});

