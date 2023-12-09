"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, Fragment } from "react";

interface globalWrapperProps {
  children: React.ReactNode;
}

export const GlobalWrapper: FC<globalWrapperProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
};
