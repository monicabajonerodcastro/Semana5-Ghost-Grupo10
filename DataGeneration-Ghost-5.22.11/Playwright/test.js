const playwright = require('playwright');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const config = require('./config.json');
const Login = require('./page-objects/login');
const Home = require('./page-objects/home');
const Post = require('./page-objects/post');
const Profile = require('./page-objects/profile');

const { headless, url, username, password, screenshotPath } = config;

let name;
let page;
let browser;
let context;

beforeEach(async () => {
  browser = await playwright['firefox'].launch({ headless });
  context = await browser.newContext();
  page = await context.newPage();
});

afterEach(async () => {
  browser.close();
});

it('Scenario 91: Update email with an empty email', async () => {
  name = 'scenario-91';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillEmail("");
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please supply a valid email address');
});

it('Scenario 92: Update email with an invalid email', async () => {
  name = 'scenario-92';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillEmail(faker.lorem.sentence());
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please supply a valid email address');
});

it('Scenario 93: Update website with an URL that exceeds max length', async () => {
  name = 'scenario-93';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const website = `https://${faker.random.alpha(2000)}.com`;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillWebsite(website);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Website is not a valid url');
});

async function saveScreenshot(step) {
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: `${screenshotPath}/${name}/step-${step}.png` });
}
