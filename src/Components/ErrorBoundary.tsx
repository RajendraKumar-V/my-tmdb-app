import React, { ReactNode } from 'react'; 
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

type ErrorType = {
    message: string;
  };
  
  function ErrorFallback({ error }: { error: ErrorType }) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error.message}</p>
      </div>
    );
  }
  function ErrorBoundary({ children }: { children: ReactNode }) {
    return (
      <ReactErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ReactErrorBoundary>
    );
  }
  
  export default ErrorBoundary;