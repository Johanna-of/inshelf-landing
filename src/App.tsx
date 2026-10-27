import { Header } from '@/components/sections/Headers';
import { Banner } from '@/components/sections/Banner';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ExecutionSection } from '@/components/sections/SolutionSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ControlTowerSection } from '@/components/sections/ControlTowerSection';
import { CalculatorSection } from '@/components/sections/CalculatorSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <Header />
      <Banner />
      <ProblemSection />
      <HowItWorksSection />
      <ControlTowerSection />
      <CalculatorSection />
      <ContactSection />
      <FaqSection />
      <ExecutionSection />
      <Footer />
    </div>
  );
}

export default App;
