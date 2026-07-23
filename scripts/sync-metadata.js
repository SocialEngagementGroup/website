const fs = require('fs');
const path = require('path');

const METADATA_PATH = path.join(__dirname, '../data/metadata.js');
const APP_DIR = path.join(__dirname, '../app');

/**
 * Recursively find all page.js files in the app directory
 */
function getPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getPages(filePath, fileList);
    } else if (file === 'page.js') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

/**
 * Convert file path to a camelCase key for metadata
 */
function pathToKey(filePath) {
  const relativePath = path.relative(APP_DIR, filePath);
  let routePath = path.dirname(relativePath);
  
  if (routePath === '.') return 'home';
  
  // Clean up the path by removing all route groups (segments in parentheses)
  routePath = routePath.replace(/\/\([^)]+\)/g, '').replace(/^\([^)]+\)\//, '').replace(/^\([^)]+\)$/, '');
  
  if (routePath === '' || routePath === '.') return 'home';

  // Handle specific manual renames
  if (routePath === 'services/3D-animation-and-rendering') return 'animation3d';
  if (routePath === 'services/branding') return 'branding';
  if (routePath === 'services/content-creation') return 'contentCreation';
  if (routePath === 'services/logo-design') return 'logoDesign';
  if (routePath === 'services/social-media-content') return 'socialMediaContent';
  if (routePath === 'services/videography-and-photography') return 'videographyPhotography';
  if (routePath === 'services/google-business-profile-management') return 'googleBusiness';
  if (routePath === 'services/google-location-services-ads') return 'googleLocalAds';
  if (routePath === 'services/ppc-campaigns') return 'ppc';
  if (routePath === 'services/retargeting-and-remarketing') return 'retargeting';
  if (routePath === 'services/review-and-reputation-management') return 'reputationManagement';
  if (routePath === 'services/seo') return 'seo';
  if (routePath === 'services/social-media-marketing') return 'socialMediaMarketing';
  if (routePath === 'services/website-development') return 'websiteDevelopment';
  if (routePath === 'services/solution-for-doctors') return 'doctors';
  if (routePath === 'services/solution-for-lawyers') return 'lawyers';
  if (routePath === 'services/solution-for-restaurants') return 'restaurants';
  if (routePath === 'services/solution-for-techstartups') return 'techStartups';
  if (routePath === 'services/solution-for-jewelers') return 'jewelers';
  if (routePath === 'services/ai-automation-for-business-growth') return 'aiAutomation';
  if (routePath === 'services/cloud-modernization') return 'cloudModernization';
  if (routePath === 'services/it-consultation') return 'itConsultation';
  if (routePath === 'services/saas-implementation') return 'saasImplementation';
  if (routePath === 'services/web-application') return 'webApplication';

  if (routePath === 'media-converter') return 'converter';
  if (routePath === 'privacy-policy') return 'privacy';
  if (routePath === 'legal-notice') return 'legal';
  if (routePath === 'terms-and-conditions') return 'terms';
  if (routePath === 'cookies') return 'cookies';
  if (routePath === 'contact-us') return 'contact';
  
  if (routePath === 'careers/[slug]') return 'careersSlug';
  if (routePath === 'services') return 'services';
  
  return routePath
    .replace(/\//g, '-')           // Replace slashes with dashes
    .replace(/\[|\]/g, '')         // Remove square brackets from dynamic routes
    .split('-')
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function sync() {
  console.log('Syncing metadata...');

  // Read existing metadata
  let content = fs.readFileSync(METADATA_PATH, 'utf8');
  
  // Extract the object content
  const match = content.match(/const siteMetadata = ({[\s\S]*?});/);
  if (!match) {
    console.error('Could not find siteMetadata object in metadata.js');
    return;
  }

  const pages = getPages(APP_DIR);
  let metadataObj;
  
  // Very basic parsing since we don't want to eval or use complex parsers
  // We'll just check if the key exists in the raw string for now
  // A better way would be to require it, but it's an ES Module
  
  const missingKeys = [];
  pages.forEach(page => {
    const key = pathToKey(page);
    if (!content.includes(`${key}: {`)) {
      missingKeys.push(key);
    }
  });

  if (missingKeys.length === 0) {
    console.log('No missing metadata entries found.');
    return;
  }

  console.log(`Found ${missingKeys.length} missing keys: ${missingKeys.join(', ')}`);

  // Insert missing keys before the closing brace
  let newEntries = '';
  missingKeys.forEach(key => {
    newEntries += `  ${key}: {\n    title: "TODO: Define Title for ${key}",\n    description: "TODO: Define Description for ${key}"\n  },\n`;
  });

  // Simple insertion before the last };
  const lastIndex = content.lastIndexOf('};');
  const updatedContent = content.slice(0, lastIndex) + newEntries + content.slice(lastIndex);

  fs.writeFileSync(METADATA_PATH, updatedContent);
  console.log('metadata.js updated successfully.');
}

sync();
