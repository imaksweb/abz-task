import { FC } from 'react';
import { UserCardStyled } from './UserCard.styled';
import blankAvatar from '../../assets/img/photo-cover.svg';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserCard: FC<Props> = ({ user }) => {
  const { name, position, email, phone, photo } = user;

  return (
    <UserCardStyled>
      {photo ? (
        <img src={photo} alt={`${name} avatar`} />
      ) : (
        <img src={blankAvatar} alt={`${name} avatar`} />
      )}
      <h3>{name}</h3>
      <div>
        <p>{position}</p>
        <div>
          <a href={`mailto:${email}`} title={email}>
            {email}
          </a>
        </div>
        <div>
          <a href="tel:+380982789024" title={phone}>
            {phone}
          </a>
        </div>
      </div>
    </UserCardStyled>
  );
};
