const {username, password} = process.env;

export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@connectmyfamily.9ypuhvn.mongodb.net/connectmyfamily?retryWrites=true&w=majority";
