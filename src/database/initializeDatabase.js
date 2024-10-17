export async function initializeDatabase(database) {
     try {
        await database.execAsync(`
            DROP TABLE IF EXISTS users;

            CREATE TABLE IF NOT EXISTS users (
                id INTERGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL DEFAULT 'A123456a!',
                role TEXT NOT NULL DEFAULT 'USER',
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                updated_at DATE,
            );

            INSERT OR REPALCE INTO users (nome, email, senha, role ) VALUE ('Super', 'super@gmail.com', 'A123456a!', 'ADIMIN');
            INSERT OR REPALCE INTO users (nome, email, senha, role ) VALUE ('Admin', 'admin@gmail.com', 'A123456a!', 'ADIMIN');
            INSERT OR REPALCE INTO users (nome, email, senha, role ) VALUE ('User', 'user@gmail.com', 'A123456a!', 'ADIMIN');
            `);
     } catch (error) {
        console.log(error);
     }
}