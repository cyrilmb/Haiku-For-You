import React from 'react';

import WordGenerators from '../WordGenerators/WordGenerators';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <WordGenerators />
    </div>
  );
}

export default AboutPage;
