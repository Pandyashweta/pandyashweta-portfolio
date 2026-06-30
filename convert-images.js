import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');

async function convertImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const inputPath = path.join(imagesDir, file);
        const baseName = path.basename(file, ext);
        const outputPath = path.join(imagesDir, `${baseName}.webp`);
        
        console.log(`Converting ${file} -> ${baseName}.webp...`);
        
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
          
        console.log(`Successfully converted ${file}. Deleting original...`);
        fs.unlinkSync(inputPath);
      }
    }
    console.log('Image conversion completed successfully.');
  } catch (error) {
    console.error('Error during image conversion:', error);
  }
}

convertImages();
