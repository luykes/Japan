import fs from "fs";
import path from "path";

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), ".data");

export function readJsonFile<T>(filename: string, fallback: T): T {
  const file = path.join(DATA_DIR, filename);
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}

export function writeJsonFile<T>(filename: string, data: T): void {
  const file = path.join(DATA_DIR, filename);
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = file + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, file);
}
