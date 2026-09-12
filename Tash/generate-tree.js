const fs = require('fs').promises;
const path = require('path');

async function scanDir(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const tree = {};

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;

    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      tree[entry.name] = await scanDir(fullPath);
    } else {
      tree[entry.name] = null;
    }
  }

  return tree;
}

async function main() {
  const root = process.cwd();
  const tree = await scanDir(root);
  const output = JSON.stringify(tree, null, 2);
  await fs.writeFile(path.join(root, 'folder-tree.json'), output, 'utf8');
  console.log('folder-tree.json generado correctamente.');
}

main().catch((err) => {
  console.error('Error generando árbol de carpetas:', err);
  process.exit(1);
});
