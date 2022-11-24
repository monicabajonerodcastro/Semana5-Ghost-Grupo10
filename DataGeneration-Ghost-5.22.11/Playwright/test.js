const playwright = require('playwright');
const config = require('./config.json');
const Login = require('./page-objects/login');
const Post = require('./page-objects/post');

const { url, username, password, screenshotPath } = config;

let name;
let page;
let browser;
let context;

beforeEach(async () => {
  browser = await playwright['firefox'].launch();
  context = await browser.newContext();
  page = await context.newPage();
});

afterEach(async () => {
  browser.close();
});

it('Scenario 1: As an admin user, I want to create a post', async () => {
  name = 'scenario-1';
  const login = new Login(page);
  const post = new Post(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await post.clickNewPost();
  await saveScreenshot(2);
  await post.fillTitle('Titulo post');
  await post.fillBody('Cuerpo post');
  await saveScreenshot(3);
  await post.publish();
  await saveScreenshot(4);
  await post.continue();
  await saveScreenshot(5);
  await post.publishRightNow();
  await saveScreenshot(6);
});

async function saveScreenshot(step) {
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: `${screenshotPath}/${name}/step-${step}.png` });
}
