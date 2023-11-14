import React, { ReactNode } from 'react';
import InterfaceContextProviderWrapper from "./InterfaceContext.provider";

type ProvidersWrapperProps = { children: ReactNode };

function Providers({ children }: ProvidersWrapperProps) {
  return (
    <InterfaceContextProviderWrapper>
      {children}
    </InterfaceContextProviderWrapper>
  )
}

export default Providers;
