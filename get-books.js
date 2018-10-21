#! node

const puppeteer = require('puppeteer');
const fs = require('fs');
const request = require('request');

async function download(uri, filename) {
  return new Promise((res) => {
    request.head(uri, function (err, res, body) {
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
      request(uri).pipe(fs.createWriteStream(filename)).on('close', res);
    })
  });
};

(async () => {
  console.log('Going to work');
  const rootUrl = 'https://en.m.wikipedia.org/wiki/Agatha_Christie_bibliography';
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(rootUrl);
    const books = await page.evaluate(r => {
      const select = (e, q) => Array.from(e.querySelectorAll(q));
      return select(document.querySelector('table.wikitable'), 'tbody tr')
        .filter(tr => tr.querySelector('td'))
        .map(tr => {
          const title = tr.querySelector('th').textContent;
          const year = tr.querySelector('td').textContent;
          const link = tr.querySelector('th a').href;
          return {
            title,
            link,
            year
          }
        });
    })

    const data = await Promise.all(books.map(async book => {
      const page = await browser.newPage();
      await page.goto(book.link);
      const img = await page.evaluate(async _ => {
        const img = document.querySelector('.infobox img');
        if (img) {
          const {
            src
          } = img;
          const imgPath = src.split('/').pop();
          return {
            imgSrc: src,
            imgPath
          }
        }
      })
      console.log('Fetched infos for ' + book.title);
      return Object.assign({}, img, book);
    }))

    fs.writeFileSync(`${destPath}/data.json`, JSON.stringify(data));
  } catch (e) {
    console.warn('Error', e);
  } finally {
    console.log('Going to sleep');
    await browser.close();
  }
})();
