import { AppProviders } from './providers';
import { AppRouter } from './router';
import '@/assets/styles/globals.css';

/**
 * @component App
 * @summary Root application component that combines all providers and routing
 * @domain app
 * @type root-component
 * @category app-configuration
 */
function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
