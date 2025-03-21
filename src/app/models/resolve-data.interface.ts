export interface ResolveData {
  title: string;
  explanation: {
    what: string;
    benefits: string[];
    howItWorks: string[];
    implementation: {
      step1: string;
      step2: string;
      step3: string;
    };
  };
  timestamp: string;
  loadTime: string;
}
