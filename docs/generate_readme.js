const fs = require('fs');

const sections = [
  'preface',
  'getting-started/environment-requirements',
  'getting-started/installation',
  'getting-started/configuration',
  'getting-started/navigation',
  'crud-modules',
  'form-fields',
  'block-editor',
  'media-library',
  'artisan',
  'other-cms-features',
  'resources',
  'api-documentation'
];

const settings = `---
sidebar: auto
pageClass: twill-doc
title: Documentation
---`;

const content = settings + sections.map((section) => {
  return '\n\n' + fs.readFileSync('./.sections/' + section + '.md', 'utf8') + '\n\n';
}).join('');

fs.writeFileSync('README.md', content);
