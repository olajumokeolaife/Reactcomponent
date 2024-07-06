import React from "react";
import SupportSection from "../src/SupportSection";
import CTASection from "./CTA/CTASection";
import "./App.css";

const ExistingComponent = () => (
  <div>
    {SupportSection}
  </div>
);

const App = () => (
  <div className="app">
    <ExistingComponent />

    <section className="why-info-bootcamp">
      <CTASection
        text="Ready to start a career in tech?"
        subtext="Choose a bootcamp, join 7000+ women building their career"
        buttonText="View bootcamps"
      />
    </section>
  </div>
);

export default App;
