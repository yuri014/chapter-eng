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

const myEmail = createEmail('yuri.flores@deskfy.io');

myEmail.isEmail();
myEmail.isDeskdoer();
