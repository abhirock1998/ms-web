const translate = require("@vitalets/google-translate-api");

export const translateContent = (toLang = "en", contentToTranlsate) => {
  return translate("Ik spreek Engels", { to: "en" })
    .then((res) => {
      console.log(res.text);
      //=> I speak English
      console.log(res.from.language.iso);
      //=> nl
    })
    .catch((err) => {
      console.error(err);
    });
};

export const checkLangToTranslate = (content, toLang) => {
  return toLang === "en" ? content : translateContent(toLang, content);
};
