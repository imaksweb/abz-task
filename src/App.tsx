import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { GetRequest } from './components/GetRequest';
import { ToTopButton } from './components/ToTopButton';
import { PostRequest } from './components/PostRequest/PostRequest';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <Header />
        <Intro />
        <GetRequest />
        <PostRequest />
        <ToTopButton />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
