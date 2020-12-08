const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

puppeteer
  .launch({
    headless: false,
    args: ["--remote-debugging-port=9222"],
  })
  .then((browser) => {
    global.browser = browser;
  });

app.get("/", async (req, res) => {
  const url = req.query.url;
  console.log("GET : ", url);
  const page = await global.browser.newPage();
  await page.goto(url);
});

app.listen(5000, () => {
  console.log("port running on 4000");
});
