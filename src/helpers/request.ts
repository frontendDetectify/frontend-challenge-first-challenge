export const getRandomRequest = () => {
  const baseUrl = 'https://app.com?';
  const allowedUser = 'user=2';
  const disallowedUser = 'hacker=true';
  const userTypes = [allowedUser, disallowedUser];

  return baseUrl + userTypes[Math.round(Math.random())];
};
