const fs = require('fs');

// Read the JSON file
const data = require('./db.json');

// Add unique ID to each object
data.forEach((item, index) => {
  item.id = index + 1; // or use any unique ID generation logic
});

// Write the updated data back to the file
fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));

console.log('IDs added successfully!');
