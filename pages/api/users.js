import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'assets', 'data', 'user.json');
  const jsonData = fs.readFileSync(filePath);
  const users = JSON.parse(jsonData);

  res.status(200).json(users);
}