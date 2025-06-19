import InteractiveCatalog from "../components/InteractiveCatalog";
import PortfolioMetrics from "../components/PortfolioMetrics";
import EmbodiedCarbonChart from "../components/EmbodiedCarbonChart";

function Home() {
  return (
    <div className="w-full h-screen flex-col items-center justify-center">
      <InteractiveCatalog />
      <PortfolioMetrics />
      <EmbodiedCarbonChart />
    </div>
  );
}

export default Home;
