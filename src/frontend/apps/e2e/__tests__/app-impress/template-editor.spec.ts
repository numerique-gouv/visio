import { expect, test } from '@playwright/test';

import { createTemplate, keyCloakSignIn } from './common';

test.beforeEach(async ({ page, browserName }) => {
  await page.goto('/');
  await keyCloakSignIn(page, browserName);
});

test.describe('Template Editor', () => {
  test('checks the template editor interact correctly', async ({
    page,
    browserName,
  }) => {
    const randomTemplate = await createTemplate(
      page,
      'template-editor',
      browserName,
      1,
    );

    await expect(page.locator('h2').getByText(randomTemplate[0])).toBeVisible();

    await page.getByTitle('Open Blocks').click();
    await expect(
      page.locator('.gjs-editor .gjs-block[title="Text"]'),
    ).toBeVisible();
  });

  test('checks the template editor save on changed', async ({
    page,
    browserName,
  }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      browserName !== 'chromium',
      'This test failed with safary because of the dragNdrop',
    );

    const randomTemplate = await createTemplate(
      page,
      'template-editor',
      browserName,
      1,
    );

    await expect(page.locator('h2').getByText(randomTemplate[0])).toBeVisible();

    const iframe = page.frameLocator('iFrame.gjs-frame');

    await page.getByTitle('Open Blocks').click();
    await page
      .locator('.gjs-editor .gjs-block[title="Text"]')
      .dragTo(iframe.locator('body.gjs-dashed'));

    await iframe.getByText('Insert your text here').fill('Hello World');
    await iframe.locator('body.gjs-dashed').click();

    // Come on the page again to check the changes are saved
    await page.locator('menu').first().getByLabel(`Template button`).click();
    const panel = page.getByLabel('Templates panel').first();
    await panel.locator('li').getByText(randomTemplate[0]).click();

    await expect(iframe.getByText('Hello World')).toBeVisible({
      timeout: 5000,
    });
  });

  test('it saves the html generated by the template', async ({
    page,
    browserName,
  }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      browserName !== 'chromium',
      'This test failed with safary because of the dragNdrop',
    );

    const randomTemplate = await createTemplate(
      page,
      'template-html',
      browserName,
      1,
    );

    await expect(page.locator('h2').getByText(randomTemplate[0])).toBeVisible();

    const iframe = page.frameLocator('iFrame.gjs-frame');

    await page.getByTitle('Open Blocks').click();
    await page
      .locator('.gjs-editor .gjs-block[title="Text"]')
      .dragTo(iframe.locator('body.gjs-dashed'));

    await iframe.getByText('Insert your text here').fill('Hello World');
    await iframe.locator('body.gjs-dashed').click();

    await page.getByText('Save template').click();
    await expect(page.getByText('Template save successfully')).toBeVisible();
  });

  test('it shows a warning if body tag not present', async ({
    page,
    browserName,
  }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      browserName !== 'chromium',
      'This test failed with safary because of the dragNdrop',
    );

    const randomTemplate = await createTemplate(
      page,
      'template-html',
      browserName,
      1,
    );

    await expect(page.locator('h2').getByText(randomTemplate[0])).toBeVisible();

    await expect(
      page.getByText('The {{body}} tag is necessary to works with the pads.'),
    ).toBeVisible();

    const iframe = page.frameLocator('iFrame.gjs-frame');

    await page.getByTitle('Open Blocks').click();
    await page
      .locator('.gjs-editor .gjs-block[title="Text"]')
      .dragTo(iframe.locator('body.gjs-dashed'));

    await iframe.getByText('Insert your text here').fill('{{body}}');
    await iframe.locator('body.gjs-dashed').click();

    await expect(
      page.getByText('The {{body}} tag is necessary to works with the pads.'),
    ).toBeHidden();
  });

  test('it duplicates the template', async ({ page, browserName }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      browserName !== 'chromium',
      'This test failed with safary because of the dragNdrop',
    );

    const randomTemplate = await createTemplate(
      page,
      'template-duplicate',
      browserName,
      1,
    );

    await expect(page.locator('h2').getByText(randomTemplate[0])).toBeVisible();

    const iframe = page.frameLocator('iFrame.gjs-frame');

    await page.getByTitle('Open Blocks').click();
    await page
      .locator('.gjs-editor .gjs-block[title="Text"]')
      .dragTo(iframe.locator('body.gjs-dashed'));

    await iframe.getByText('Insert your text here').fill('Hello World');
    await iframe.locator('body.gjs-dashed').click();

    await page.getByText('Duplicate template').click();

    await expect(
      page.getByText('Template duplicated successfully'),
    ).toBeVisible();
    const panel = page.getByLabel('Templates panel').first();
    await expect(panel.getByText(`${randomTemplate[0]} - Copy`)).toBeVisible();
  });
});