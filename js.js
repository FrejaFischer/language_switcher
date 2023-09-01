"use strict";
// const header = document.querySelector(".header");
// const footer = document.querySelector(".footer");
// const content = document.querySelector(".content");
// const drop = document.querySelector("#select");
const opDa = document.querySelector("#da");
const opDe = document.querySelector("#de");

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Perry das Schnabeltier", location: ".content" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Næbdyret Perry", location: ".content" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";
const deutch = "de";

changeLan(locale);

opDa.addEventListener("click", () => {
  changeLan(locale);
});
opDe.addEventListener("click", () => {
  changeLan(deutch);
});

function changeLan(lang) {
  const array = texts[lang].texts;

  array.forEach((element) => {
    document.querySelector(element.location).textContent = element.text;
  });

  // let head = texts[lang].texts[0].text;
  // let cont = texts[lang].texts[1].text;
  // let foot = texts[lang].texts[2].text;

  // header.textContent = head;
  // content.textContent = cont;
  // footer.textContent = foot;
}
