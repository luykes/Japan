import fs from "fs";
import path from "path";

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), ".data");
const FILE = path.join(DATA_DIR, "checklist.json");

export function readDB(): Record<string, boolean> {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const raw = fs.readFileSync(FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function writeDB(data: Record<string, boolean>): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  // Atomic write: write to tmp file then rename
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, FILE);
}
