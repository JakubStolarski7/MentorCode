// generate-hash.js
const bcrypt = require('bcryptjs');

// Pobierz hasło z argumentów terminala lub użyj domyślnego
const password = process.argv[2] || 'Mentor123';

async function generate() {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(`\nHasło: ${password}`);
    console.log(`HASH do wklejenia w bazie:`);
    console.log(hash);
    console.log('\n');
}

generate();