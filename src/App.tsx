import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Header } from './components/Header';
import { Intro } from './components/Intro/Intro';
import { GetRequest } from './components/GetRequest';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />

      <Header />
      <Intro />
      <GetRequest />
    </ThemeProvider>
  );
};

export default App;
