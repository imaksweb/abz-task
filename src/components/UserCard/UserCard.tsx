import { FC } from 'react';
import { UserCardStyled, Image, Text, Link } from './UserCard.styled';
import blankAvatar from '../../assets/img/photo-cover.svg';
import { User } from '../../types/User';

import formatPhoneNumber from '../../utils/formatPhone';

type Props = {
  user: User;
};

export const UserCard: FC<Props> = ({ user }) => {
  const { name, position, email, phone, photo } = user;
  const formattedPhoneNumber = formatPhoneNumber(phone);

  return (
    <UserCardStyled>
      {photo ? (
        <Image src={photo} alt={`${name} avatar`} />
      ) : (
        <Image src={blankAvatar} alt={`${name} avatar`} loading="lazy" />
      )}
      <Text as="h3" title={name}>
        {name}
      </Text>
      <div>
        <Text title={position}>{position}</Text>

        <Text>
          <Link href={`mailto:${email}`} title={email}>
            {email}
          </Link>
        </Text>

        <Text>
          <Link href={`tel:${phone}`} title={formattedPhoneNumber}>
            {formattedPhoneNumber}
          </Link>
        </Text>
      </div>
    </UserCardStyled>
  );
};
