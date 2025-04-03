const cron = require('node-cron');
const puppeteer = require('puppeteer');
const Account = require('../models/accountModel');
const YouTube = require('../models/youtubeModel');

const youtubeInteractionService = () => {
  cron.schedule('* * * * *', async () => {
    try {
      const accounts = await Account.find();
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
      });
      
      for (const account of accounts) {
        const youtubeChannel = await YouTube.findOne();
        if (!youtubeChannel) continue;

        const page = await browser.newPage();
        await page.goto(youtubeChannel.url);

        // Perform actions
        try {
          // Like the video
          await page.waitForSelector('button[aria-label="Like this video"]');
          await page.click('button[aria-label="Like this video"]');
          
          // Add comment
          await page.waitForSelector('#placeholder-area');
          await page.click('#placeholder-area');
          await page.type('#contenteditable-root', 'Great video!');
          await page.keyboard.press('Enter');
          
          // Subscribe if not already subscribed
          const subscribeButton = await page.$('button[aria-label^="Subscribe to"]');
          if (subscribeButton) {
            await subscribeButton.click();
          }
        } catch (error) {
          console.error(`Error interacting with YouTube for account ${account.email}:`, error);
        }

        await page.close();
      }

      // Close browser after 1 minute
      setTimeout(async () => {
        await browser.close();
      }, 60000);
    } catch (error) {
      console.error('Error in youtubeInteractionService:', error);
    }
  });
};

module.exports = youtubeInteractionService;