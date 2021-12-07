const createEmail = (email) => {
  const isEmail = () => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  };

  const isDeskdoer = () => {
    return email.includes('@deskfy.io');
  };

  return {
    value: email,
    isEmail,
    isDeskdoer,
  };
};

const createUser = ({ name, email }) => ({ name, email: createEmail(email) });

const newUser = createUser({ name: 'user', email: 'user@email.com' });
newUser.name;
newUser.email.value;
newUser.email.isEmail();
newUser.email.isDeskdoer();
