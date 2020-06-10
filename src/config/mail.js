export default {
  host: process.env.MAIL_POST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.DB_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com',
  },
};
