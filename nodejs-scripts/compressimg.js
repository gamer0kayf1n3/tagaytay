const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = 'thumbnails/html-ss';

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const pngFiles = files.filter((file) => file.endsWith('.png'));

  for (const pngFile of pngFiles) {
    const pngFilePath = path.join(directoryPath, pngFile);
    const jpegFilePath = path.join(directoryPath, 'compress', pngFile.replace('.png', '.jpg'));

    await sharp(pngFilePath)
      .jpeg({ quality: 30 })
      .toFile(jpegFilePath);

    fs.unlinkSync(pngFilePath);
  }

  console.log('Compression completed');
});
