
import fs from 'fs';
import path from 'path';

import os from 'os';

const DB_PATH = path.join(os.tmpdir(), 'applications.json');

// Ensure data directory exists
if (!fs.existsSync(path.dirname(DB_PATH))) {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
}

// Initial seed if file doesn't exist
if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, '[]', 'utf-8');
}

export const localDb = {
    async getApplications() {
        try {
            const data = fs.readFileSync(DB_PATH, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading local DB:', error);
            return [];
        }
    },

    async addApplication(application: any) {
        try {
            const apps = await this.getApplications();
            // Generate simple ID if not present
            const newApp = { ...application, id: application.id || Date.now() };
            apps.unshift(newApp); // Add to beginning
            fs.writeFileSync(DB_PATH, JSON.stringify(apps, null, 2), 'utf-8');
            return newApp;
        } catch (error) {
            console.error('Error writing to local DB:', error);
            throw error;
        }
    }
};
