import { Loading } from '../components/loading';
import Loadable from 'react-loadable';

export default function asyncImport(fn: () => Promise<any>): any {
  return Loadable({
    loader: fn,
    loading: Loading,
    delay: 300
  });
}
