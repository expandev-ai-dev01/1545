import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';

/**
 * @component AppProviders
 * @summary Wraps the application with all necessary providers
 * @domain app
 * @type provider-component
 * @category app-configuration
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
