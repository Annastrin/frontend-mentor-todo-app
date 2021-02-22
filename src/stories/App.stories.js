import { storiesOf } from '@storybook/react';
import Provider from './Provider';
import store from '../redux/store';
import {App} from '../components/App';

const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
);

storiesOf('App', module)
  .addDecorator(withProvider)
  .add('default', () => (
    <App/>
  ));