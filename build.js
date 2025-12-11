const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

const md = markdownIt();

const postsDir = path.join(__dirname, 'posts');
const outputDir = path.join(__dirname, 'posts_html');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 读取 posts 目录中的所有 Markdown 文件
fs.readdirSync(postsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // 将 Markdown 转换成 HTML
    const htmlContent = md.render(fileContent);

    // 将转换后的 HTML 写入新的文件
    const outputFilePath = path.join(outputDir, file.replace('.md', '.html'));
    const htmlOutput = `
      <!DOCTYPE html>
      <html lang="zh-Hans">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${file.replace('.md', '')}</title>
        <link rel="stylesheet" href="assets/css/style.css">
      </head>
      <body>
        <header>
          <h1>${file.replace('.md', '')}</h1>
        </header>
        <main>
          ${htmlContent}
        </main>
        <script src="assets/js/main.js"></script>
      </body>
      </html>`;

    fs.writeFileSync(outputFilePath, htmlOutput);
  }
});