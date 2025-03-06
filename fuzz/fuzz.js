const Fuse = require('fuse.js');

const entities = [
  { id: 1, synonyms: ['JavaScript', 'js', 'ECMAScript'] },
  { id: 2, synonyms: ['TypeScript', 'ts', 'typescript language'] },
  { id: 3, synonyms: ['Python', 'py'] },
  // Add more entities as needed.
];

const fuseOptions = {
  includeScore: true,
  keys: ['synonyms'],
  threshold: 0.4, // Adjust to control fuzziness: 0 for exact match, higher for more tolerance.
};

const fuse = new Fuse(entities, fuseOptions);

function searchEntities(query) {
  if (query.trim() === '') {
    console.log('All Entities:', entities);
    return;
  }
  const results = fuse.search(query);
  console.log(`Results for "${query}":`, results.map(result => result.item));
}

// Example usage: read a query from command line arguments
const query = process.argv[2] || '';
searchEntities(query);
