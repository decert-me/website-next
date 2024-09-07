const axios = require('axios');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

// CSV 导出链接
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTy97piP_HYJB3SgNSMaDUjZO3zrAESTHhaDzDBVS0nweAYEq_rtIgKl7k93BQFHKLJSGARLhTQMlh7/pub?gid=0&single=true&output=csv';

// 目标文件夹路径
const outputDir = path.join(__dirname, '/src/locales');
console.log('outputDir: ', outputDir);
// 如果文件夹不存在，则创建它
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function fetchCSV() {
  try {
    const response = await axios.get(url, {
      responseType: 'stream'
    });
    
    const languages = {
      zh: {},
      pt: {},
      en: {}
    };
    response.data
      .pipe(csv())
      .on('data', row => {
        const key = row['key'];
        languages['zh'][key] = row['zh_CN'];
        languages['en'][key] = row['en'];
      })
      .on('end', () => {
        // 保存文件到 messages 目录下
        fs.writeFileSync(path.join(outputDir, 'zh.json'), JSON.stringify(languages.zh, null, 2));
        fs.writeFileSync(path.join(outputDir, 'en.json'), JSON.stringify(languages.en, null, 2));
        console.log('JSON files have been saved to the messages directory!');
      });
  } catch (error) {
    console.error('Error fetching the CSV:', error);
  }
}

fetchCSV();