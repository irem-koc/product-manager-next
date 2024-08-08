"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function AppProvider({ children }: any) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}

export { AppProvider };
