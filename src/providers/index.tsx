import React, { ReactNode } from 'react';
import InterfaceContextProviderWrapper from "./InterfaceContext.provider";
import UserContextProviderWrapper from './UserContext.provider';

type ProvidersWrapperProps = { children: ReactNode };

function Providers({ children }: ProvidersWrapperProps) {
  return (
    <InterfaceContextProviderWrapper>
      <UserContextProviderWrapper>
        {children}
      </UserContextProviderWrapper>
    </InterfaceContextProviderWrapper>
  )
}

export default Providers;
