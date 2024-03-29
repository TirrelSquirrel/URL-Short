const input = document.getElementById("input");
const shortButton = document.getElementById("submit");

const result = document.getElementById("result");
const copyButton = document.getElementById("copy");

const api = "http://localhost:5000/";

function callApiTest() {
  const xhttpr = new XMLHttpRequest();
  xhttpr.open("GET", api, true);

  xhttpr.send();

  xhttpr.onload = () => {
    if (xhttpr.status === 200) {
      const response = JSON.parse(xhttpr.response);
      console.log(response);
    } else {
      throw new Error("Hubo un error en la solicitud");
    }
  };
}

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

function parseURLParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const paramString = searchParams.toString().split("=")[0];
  if (paramString != undefined) {
    console.log(paramString)
  }
}

shortButton.addEventListener("click", (e) => {
    e.preventDefault()
  let url = input.value;
  let validUrl = validateUrl(url);
  console.log(validUrl);
  callApiTest();
});


copyButton.addEventListener('click', () => {
    
})

document.addEventListener('load', parseURLParams())