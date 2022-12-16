import React from 'react';
import { Dna } from 'react-loader-spinner';
import { SpinLoader } from './Loader.style';

export const Loader = () => {
  return (
    <SpinLoader>
      <Dna type="Dna" color="#00BFFF" height={80} width={80} />
    </SpinLoader>
  );
};
