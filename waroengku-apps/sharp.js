/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/assets');
const destination = path.resolve(__dirname, 'src/public/hero');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(1280)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-large.jpg`));

  sharp(`${target}/${image}`)
    .resize(650)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-small.jpg`));
});
