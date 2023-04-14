import { FC, useState, useEffect } from 'react';
import { ToTopButtonStyled } from './ToTopButton.styled';

export const ToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <ToTopButtonStyled
      onClick={handleClick}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      &#8593;
    </ToTopButtonStyled>
  );
};
