import QuartoHero from "@/components/QuartoHero";
import QuartoFeatures from "@/components/QuartoFeatures";
import QuartoBenefits from "@/components/QuartoBenefits";
import QuartoCodeExample from "@/components/QuartoCodeExample";
import QuartoFooter from "@/components/QuartoFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <QuartoHero />
      <QuartoFeatures />
      <QuartoBenefits />
      <QuartoCodeExample />
      <QuartoFooter />
    </div>
  );
};

export default Index;
