import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

// the required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import puppeteer from 'puppeteer';

// visual regression testing
const tablet = puppeteer.devices["iPad landscape"];
const customizePage = (page: any) => page.emulate(tablet);
const beforeScreenshot = (page: any) => page.emulate(tablet);
const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: "percent" as 'percent'
});

initStoryshots({
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '../../storybook-static')}`,
    customizePage,
    getMatchOptions,
    beforeScreenshot
  })
});