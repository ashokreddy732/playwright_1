exports.SignInData= {

  validUser: {
    email: 'Adarsh12@gmail.com',
    password: 'Test@123',
  },

  invalidPasswordUser: {
    email: 'Adarsh12@gmail.com',
    password: 'WrongPass@123',
  },

  invalidEmailUser: {
    email: 'notregistered@gmail.com',
    password: 'Test@123',
  },

  emptyUser: {
    email: '',
    password: '',
  },

  invalidEmailFormatUser: {
    email: 'adarsh12gmail.com',
    password: 'Test@123',
  },
};