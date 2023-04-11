const formatPhoneNumber = (phoneNumber: string): string => {
  const regex = /^(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/;
  const match = regex.exec(phoneNumber);

  if (match) {
    return `${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
  }

  return phoneNumber;
};

export default formatPhoneNumber;
