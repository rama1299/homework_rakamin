const fs = require("fs");

const samplePath = "./sample_file/sample.txt";
const logPath = "./log_file";

const makeLog = () => {
  const data = fs.readFileSync(samplePath, "utf-8", (err) => {
    if (err) throw err;
  });
  if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath);
  }
  fs.writeFileSync(`${logPath}/log.txt`, data, (err) => {
    if (err) throw err;
  });
};

makeLog();
