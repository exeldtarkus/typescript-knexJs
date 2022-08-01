import app from './app'
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app