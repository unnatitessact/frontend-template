import { MantineProvider } from '@mantine/core';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, darkTheme } from '@tessact/trigger-design-system';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <MantineProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<h1>Home Page</h1>} />
            </Routes>
          </BrowserRouter>
        </MantineProvider>
      </ThemeProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
