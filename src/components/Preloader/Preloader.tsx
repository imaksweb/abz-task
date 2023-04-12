import { FC } from 'react';
import { PreloaderContent, PreloaderStyled } from './Preloader.styled';

export const Preloader: FC = () => (
  <PreloaderStyled>
    <PreloaderContent viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </PreloaderContent>
  </PreloaderStyled>
);
