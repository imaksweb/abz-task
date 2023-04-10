import { FC } from 'react';
import { EmployeeCardStyled } from './EmployeeCard.styled';
import blankAvatar from '../../assets/img/photo-cover.svg';

export const EmployeeCard: FC = () => (
  <EmployeeCardStyled>
    <img src={blankAvatar} alt="Avatar" />
    <h3>Takamaru Ayako Jurrien</h3>
    <div>
      <p className="user__position">Lead Independent Director</p>
      <a href="mailto:takamuru@gmail.com" className="user__email">
        Takamuru@gmail.com
      </a>
      <a href="tel:+380982789024" className="user__phone">
        +38 (098) 278 90 24
      </a>
    </div>
  </EmployeeCardStyled>
);
