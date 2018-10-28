#! node

const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  console.log('Going to work');
  const rootUrl = 'https://www.thebookpeople.co.uk/webapp/wcs/stores/servlet/article?storeId=10001&langId=100&krypto=A%2B8k%2FzS25WrB3w2IaK%2FQnsWiR4x8uJzhXUKLe0QlK5Tz50V%2F5CEhfIEZA7pavNeNk0rQ9evMmAUd%0AjvsJEBVbNVFQfrv0CWgnP8uK6hSN9zJC%2F%2Fv9KfWCR8xge58Cm38E9H6yDIQOzWV5oe4DlMEPJdO2%0ADo7Hxu4Tn0QkGh64gNrfoeXH&ddkey=https:SetCurrencyPreference';
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(rootUrl);
    const data = await page.evaluate(r => {
      const select = (e, q) => Array.from(e.querySelectorAll(q));
      const slug = (s) => s.split(' ').map(w => w.toLowerCase().replace(/[^\w\s]/gi, '')).join('-');
      const cats = [];
      const books = [];
      let currentCat;
      select(document, 'h2').forEach(e => {
        if(e.querySelector('a')) {
          // contains link: assuming this is a book link
          const linkContent = e.textContent;
          const [mayBeSort, ...titleParts] = linkContent.split('.');
          let title;
          let order = 0;
          if(isNaN(Number(mayBeSort))) {
            title = [mayBeSort, ...titleParts].join('.')
          } else {
            order = Number(mayBeSort);
            title = titleParts.join('.').trim();
          }
          books.push({
            cat: currentCat.slug,
            title, order, slug: slug(title)
          })
        } else {
          currentCat = {
            title: e.textContent.replace(/[^\w\s]/gi, ''),
            slug: slug(e.textContent)
          }
          cats.push(currentCat);
        }
      
      })
      return ({cats, books})
    })
    
    fs.writeFileSync(`src/assets/data.json`, JSON.stringify(data));
  } catch (e) {
    console.warn('Error', e);
  } finally {
    console.log('Going to sleep');
    await browser.close();
  }
})();
