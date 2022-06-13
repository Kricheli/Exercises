const https = require("https");
const url = "https://www.example.com/brake/ants";

const request = https.request(url, (response) => {
  let data = ``;
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const convertToObj = JSON.parse(data);
    console.log(convertToObj);
  });
});
request.on("error", (error) => {
  console.log("There was an error:" + error);
});
request.end();
