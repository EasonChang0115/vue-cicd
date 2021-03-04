import { render } from '@testing-library/vue';
import Counter from './Counter.vue';

test('Origin title is [當前點擊次數0]', () => {
  const { getByTestId } = render(Counter);
  const title = getByTestId('currentNumber');
  expect(title.innerHTML).toBe('當前點擊次數0');
});
