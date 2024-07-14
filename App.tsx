import {BaseProvider} from './app/contexts/BaseContext';
import AppNav from './app/stacks/AppNav';

export default function App() {
  return (
    <BaseProvider>
      <AppNav />
    </BaseProvider>
  );
}
