export const useMockedUser = () => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  return {
    id: '0x1234567890123456789001234567890',
    avatar: '/assets/avatars/avatar-sl-07.png',
    name: 'Scott Stevenson J.D.',
    email: 'scott@onelaw.us'
  };
};
