import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the login page', async function (this: CustomWorld) {
  await this.page.goto('https://www.saucedemo.com');
});

When('I log in with username {string} and password {string}', async function (
  this: CustomWorld,
  username: string,
  password: string
) {
  await this.page.fill('#user-name', username);
  await this.page.fill('#password', password);
  await this.page.click('#login-button');
});

Then('I should see the products page', async function (this: CustomWorld) {
  await expect(this.page.locator('.title')).toHaveText('Products');
});
