import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain error
 * @type page-component
 * @category error
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button onClick={() => navigate('/')}>Voltar para a página inicial</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
