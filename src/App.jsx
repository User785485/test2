import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import PreparationSteps from './components/PreparationSteps';
import ScriptContent from './components/ScriptContent';

function App() {
  const [isPrepared, setIsPrepared] = useState(false);

  const handlePreparationComplete = () => {
    setIsPrepared(true);
  };

  return (
    <MainLayout>
      {!isPrepared ? (
        <PreparationSteps onPreparationComplete={handlePreparationComplete} />
      ) : (
        <ScriptContent scriptId="votreScriptId" />
      )}
    </MainLayout>
  );
}

export default App;
