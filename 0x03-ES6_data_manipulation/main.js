import cleanSet from './8-clean_set.js';

const set = new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']);
console.log(cleanSet(set, ''));
//.toBe('test-chicken-user-id-');
