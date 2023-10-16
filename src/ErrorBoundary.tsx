import React, { ReactNode } from 'react'; // Import ReactNode typ
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

// Define a type for the error object
type ErrorType = {
    message: string;
    // You can include other properties if needed
  };
  
  function ErrorFallback({ error }: { error: ErrorType }) {
    // You can customize the error message to be displayed to the user.
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