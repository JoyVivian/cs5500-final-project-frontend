import renderer, {act, create} from 'react-test-renderer';
import Counter from "./counter";

test('counter', () => {

  let counter
  act(() => {
    counter = create(
      <Counter initialCount={14}/>
    )
  })
  
  // get document root
  const root = counter.root;
  const upButton = root.findByProps({name: 'up'});
  const downButton = root.findByProps({name: 'down'});
  let count = root.findByProps({className: 'count'});
  
  let countText = count.children[0];
  expect(countText).toBe('14');

  act(() => {upButton.props.onClick()})
  countText = count.children[0];
  expect(countText).toBe('15');

  act(() => {downButton.props.onClick()})
  countText = count.children[0];
  expect(countText).toBe('14');

  act(() => {downButton.props.onClick()})
  countText = count.children[0];
  expect(countText).toBe('13');

})