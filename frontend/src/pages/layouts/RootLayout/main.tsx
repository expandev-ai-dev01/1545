import { Outlet } from 'react-router-dom';

/**
 * @page RootLayout
 * @summary Root layout component that wraps all pages
 * @domain layout
 * @type layout-component
 * @category layout
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
};

export default RootLayout;
