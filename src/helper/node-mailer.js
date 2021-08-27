import axios from "axios";
export const SendContactFormDetails = async (contact) => {
  return await axios
    .post("http://localhost:9090/send", contact)
    .then((res) => res.data)
    .catch((err) => err);
};
