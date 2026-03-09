import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'C:/Users/pc/Desktop/New folder/seg/website/public/assets/images/services/icons/technology/web-application';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.png', '.webp').toLowerCase());

    console.log(`Converting ${file} to .webp...`);

    await sharp(inputPath)
        .webp()
        .toFile(outputPath);

    console.log(`Done: ${outputPath}`);
}
