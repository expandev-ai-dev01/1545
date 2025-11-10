/**
 * @page HomePage
 * @summary Home page displaying welcome message
 * @domain home
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Catálogo de Bolos</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore nossa deliciosa seleção de bolos artesanais
        </p>
        <div className="bg-card border rounded-lg p-8">
          <p className="text-muted-foreground">
            O catálogo de produtos será implementado em breve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
