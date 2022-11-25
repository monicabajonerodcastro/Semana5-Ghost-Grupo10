const playwright = require('playwright');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const config = require('./config.json');
const Login = require('./page-objects/login');
const Home = require('./page-objects/home');
const Profile = require('./page-objects/profile');
const Page = require('./page-objects/page');
const { createProfileDataPool, createPageDataPool } = require('./data-pool');

const { headless, url, username, password, screenshotPath } = config;

let name;
let page;
let browser;
let context;

let pageDataPool;
let profileDataPool;
const dataPoolSize = 10;

before(async () => {
  pageDataPool = createPageDataPool(dataPoolSize);
  profileDataPool = createProfileDataPool(dataPoolSize);
});

beforeEach(async () => {
  browser = await playwright['firefox'].launch({ headless });
  context = await browser.newContext();
  page = await context.newPage();
});

afterEach(async () => {
  browser.close();
});

it('Scenario 91: Update name with an empty name', async () => {
  name = 'scenario-91';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const newName = profileDataPool[Math.floor(Math.random() * dataPoolSize)].empty;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillName(newName);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please enter a name');
});

it('Scenario 92: Update name with a name too long', async () => {
  name = 'scenario-92';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillName(fake.nameTooLong);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Name is too long');
});

it('Scenario 93: Update email with an empty email', async () => {
  name = 'scenario-93';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const email = profileDataPool[Math.floor(Math.random() * dataPoolSize)].empty;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillEmail(email);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please supply a valid email address');
});

it('Scenario 94: Update email with an invalid email', async () => {
  name = 'scenario-94';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillEmail(fake.emailInvalid);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please supply a valid email address');
});

it('Scenario 95: Update website with an invalid URL', async () => {
  name = 'scenario-95';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const newUrl = profileDataPool[Math.floor(Math.random() * dataPoolSize)].urlInvalid;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillWebsite(newUrl);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Website is not a valid url');
});

it('Scenario 96: Update website with an URL that exceeds max length', async () => {
  name = 'scenario-96';
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

it('Scenario 97: Update website with a bio that exceeds max length', async () => {
  name = 'scenario-97';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const bio = profileDataPool[Math.floor(Math.random() * dataPoolSize)].bioTooLong;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillBio(bio);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Bio is too long');
});

it('Scenario 98: Update password with old password incorrect', async () => {
  name = 'scenario-98';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(fake.oldPasswordIncorrect);
  await profile.fillNewPassword(password);
  await profile.fillConfirmPassword(password);
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await home.getAlertMessage();
  expect(error).to.contain('Your password is incorrect');
});

it('Scenario 99: Update password with verify password that does not match', async () => {
  name = 'scenario-99';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(password);
  await profile.fillNewPassword(faker.internet.password());
  await profile.fillConfirmPassword(faker.internet.password());
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Your new passwords do not match');
});

it('Scenario 100: Update password with new password insecure', async () => {
  name = 'scenario-100';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(password);
  await profile.fillNewPassword(fake.oldPasswordInsecure);
  await profile.fillConfirmPassword(fake.oldPasswordInsecure);
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Sorry, you cannot use an insecure password');
});

it('Scenario 101: Update password with the same password as before', async () => {
  name = 'scenario-101';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(password);
  await profile.fillNewPassword(password);
  await profile.fillConfirmPassword(password);
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await home.getNotificationMessage();
  expect(error).to.contain('Password updated');
});

it('Scenario 102: Create a page with a publish date incorrect', async () => {
  name = 'scenario-102';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(faker.random.alpha());
  await saveScreenshot(4);
  await pages.continue();
  await saveScreenshot(5);
  const error = await pages.getDateErrorMessage();
  expect(error).to.contain('Invalid date format');
});

it('Scenario 103: Create a page with title and body without publishing it', async () => {
  name = 'scenario-103';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.goToPages();
  await pages.filterByState('Draft');
  await saveScreenshot(4);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Draft');
});

it('Scenario 104: Create a page with title and body and schedule it for later', async () => {
  name = 'scenario-104';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(faker.date.future().toISOString().split('T')[0]);
  await saveScreenshot(4);
  await pages.continue();
  await pages.publishScheduled();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Scheduled');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Scheduled');
});

it('Scenario 105: Create a page with title and body and publish it', async () => {
  name = 'scenario-105';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(4);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(5);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 106: Create a page with title, body and page URL and publish it', async () => {
  name = 'scenario-106';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillUrl(faker.random.alpha(10));
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 107: Create a page with title, body and excerpt and publish it', async () => {
  name = 'scenario-107';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillExcerpt(faker.lorem.sentence());
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 108: Create a page with title, body and feature image and publish it', async () => {
  name = 'scenario-108';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.clickFeatureImage();
  await pages.clickInsertImage();
  await saveScreenshot(3);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(4);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 109: Create a page with title and body without publishing it', async () => {
  name = 'scenario-109';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.goToPages();
  await pages.filterByState('Draft');
  await saveScreenshot(4);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Draft');
});

it('Scenario 110: Create a page with title and body and schedule it for later', async () => {
  name = 'scenario-110';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(fake.future);
  await saveScreenshot(4);
  await pages.continue();
  await pages.publishScheduled();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Scheduled');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Scheduled');
});

it('Scenario 111: Create a page with title and body and publish it', async () => {
  name = 'scenario-111';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(4);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(5);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 112: Create a page with title, body and page URL and publish it', async () => {
  name = 'scenario-112';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillUrl(fake.url);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 113: Create a page with title, body and excerpt and publish it', async () => {
  name = 'scenario-113';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillExcerpt(fake.excerpt);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 114: Create a page with title, body and feature image and publish it', async () => {
  name = 'scenario-114';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.clickFeatureImage();
  await pages.clickInsertImage();
  await saveScreenshot(3);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(4);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 115: Create a page with title and body without publishing it', async () => {
  name = 'scenario-115';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.goToPages();
  await pages.filterByState('Draft');
  await saveScreenshot(4);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Draft');
});

it('Scenario 116: Create a page with title and body and schedule it for later', async () => {
  name = 'scenario-116';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;
  const future = pageDataPool[Math.floor(Math.random() * dataPoolSize)].future;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(future);
  await saveScreenshot(4);
  await pages.continue();
  await pages.publishScheduled();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Scheduled');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Scheduled');
});

it('Scenario 117: Create a page with title and body and publish it', async () => {
  name = 'scenario-117';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(4);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(5);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 118: Create a page with title, body and page URL and publish it', async () => {
  name = 'scenario-118';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;
  const url = pageDataPool[Math.floor(Math.random() * dataPoolSize)].url;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillUrl(url);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 119: Create a page with title, body and excerpt and publish it', async () => {
  name = 'scenario-119';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;
  const excerpt = pageDataPool[Math.floor(Math.random() * dataPoolSize)].excerpt;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillExcerpt(excerpt);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 120: Create a page with title, body and feature image and publish it', async () => {
  name = 'scenario-120';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.clickFeatureImage();
  await pages.clickInsertImage();
  await saveScreenshot(3);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(4);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

async function saveScreenshot(step) {
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: `${screenshotPath}/${name}/step-${step}.png` });
}
