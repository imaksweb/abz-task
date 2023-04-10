import { FC } from 'react';
import { Title } from '../Title/Title.styled';
import { Container } from '../Container';
import { GetRequestStyled } from './GetRequest.styled';
import { StaffList } from '../StaffList';
import { EmployeeCard } from '../EmployeeCard';

export const GetRequest: FC = () => (
  <GetRequestStyled>
    <Container>
      <Title>Working with GET request</Title>
      <StaffList>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </StaffList>
    </Container>
  </GetRequestStyled>
);
