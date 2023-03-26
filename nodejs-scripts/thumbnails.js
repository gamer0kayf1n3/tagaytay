const fs = require('fs');
const puppeteer = require('puppeteer');

const directoryPath = '.';
const htmlFiles = [];

fs.readdir(directoryPath, function(err, files) {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter out non-HTML files
  files = files.filter(function(file) {
    return file.endsWith('.html');
  });

  // Add full file paths to the array
  files.forEach(function(file) {
    htmlFiles.push(`${directoryPath}/${file}`);
  });

  console.log('HTML files found:', htmlFiles);

  (async function() {
    for (file of htmlFiles) {
      console.log(`processing ${file}`);
      const outputFile = `${directoryPath}/thumbnails/html-ss/${file.replace(".html",".png")}`;
      await takeScreenshot(`${directoryPath}/${file}`, outputFile);
    }
  })();
});

async function takeScreenshot(htmlFile, outputFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the viewport to a reasonable size
  await page.setViewport({ width: 1280, height: 800 });

  // Navigate to the local HTML file
  const fileUrl = `file://${process.cwd()}/${htmlFile}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 0 });

  // Take a screenshot and save it to the output file
  await page.screenshot({ path: outputFile });

  await browser.close();
}
