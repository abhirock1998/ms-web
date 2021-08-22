import * as emailjs from "emailjs-com";
export const sendMailToGmail = async (data) => {
  try {
    const r = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_USER_ID
    );
    return r.status;
  } catch (e) {
    return null;
  }
};

export const SendFormat = {
  fromName: "from_name",
  email: "email",
  compName: "company_name",
  compSize: "company_size",
  mobile: "mobile",
};
