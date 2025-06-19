import InteractiveCatalog from "../components/InteractiveCatalog";
import PortfolioMetrics from "../components/PortfolioMetrics";

function Home() {
  return (
    <div className="w-full h-screen flex-col items-center justify-center">
      <InteractiveCatalog />
      <PortfolioMetrics />
    </div>
  );
}

export default Home;
