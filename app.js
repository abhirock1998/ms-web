const app = require("express")();
const cors = require("cors");
const { json } = require("express");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 9090;
app.use(cors());
app.use(json());
async function handleNodeMailer(data) {
  var { from_name, email, company_name, company_size, mobile } = data;
  const htmlFormat = `<html> <body>  <h2>New Message</h2><p><b>Name </b>: ${from_name} </p>
    <p><b>Mobile </b> : ${mobile} </p>  
    <p><b>Email </b>:${email}</p>
    <p><b>Company Name </b>: ${company_name}</p>
    <p><b>Compant Size </b>: ${company_size}</p>
    
    
    </body>    </html>`;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "USERNAME",
      pass: "PASSWORD",
    },
  });
  return await transporter
    .sendMail({
      from: "123@gmail.com",
      to: "yaduvanshiabhi1998@gmail.com",
      subject: `You get a new message from ${from_name}`,
      html: htmlFormat,
    })
    .then((res) => res.response);
}

app.post("/send", async (req, res) => {
  var result = await handleNodeMailer(req.body);
  if (result.search("OK") == 10 && result.search("OK") != -1) {
    res.json({ status: 200, msg: "Sent Seuccesfully" });
  } else {
    res.json({ status: 404, msg: "Something went wrong !!" });
  }
});
app.listen(PORT, () => console.log(`NodeMailer listening on port ${PORT}`));
