import React, { ReactNode } from 'react';

type ProvidersWrapperProps = { children: ReactNode };

function Providers({ children }: ProvidersWrapperProps) {
  return (
    <>
      {children}
    </>
  )
}

export default Providers;
