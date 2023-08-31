import formData from 'form-data';
import Mailgun from 'mailgun.js';
import invariant from "tiny-invariant";

const mailgun = new Mailgun(formData);

invariant(process.env.MAILGUN_USERNAME, "MAILGUN_USERNAME is missing");
invariant(process.env.MAILGUN_API_KEY, "MAILGUN_API_KEY is missing");

export const mg = mailgun.client({
  username: process.env.MAILGUN_USERNAME,
  key: process.env.MAILGUN_API_KEY,
});
