import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface TestResult {
  [questionId: string]: number; // Exemplo: { "q1": 5, "q2": 3 }
}

interface TestContextType {
  testResults: TestResult;
  setTestResults: (results: TestResult) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [testResults, setTestResults] = useState<TestResult>({});

  return (
    <TestContext.Provider value={{ testResults, setTestResults }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = (): TestContextType => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestContext must be used within a TestProvider');
  }
  return context;
};
