//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJqY2hyanZjWVY2aG5JYlNtNHZ1Ukt4WUJVQjNvelB6MHdQWFIrck1WQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3RmTmVFbVJ4V01PZWdxNjBiVjI3YklGZzdKSnhlU3RVVjNrRkY5dm4wST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQS9pd1FqanQyN0xsRVNmcmhOREoxR0JEMDFoeFk4T0ZmbVJiSm5aQW1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOR3NRMC9jM3pYa3FuQ3NCWUlvVjJvZ1FkS3RndVlqelhwL1dMYjZKcXhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQcXZhOXJ5dGMwamdCUEFKM2ZodmRTa1hFWDJEd0hsTjcxZENiNHUzR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ2WG1nMEprdEpQOFhSbmR6VXdtZXRHcndEV0h2R3Q4RlV4cVBaNDB1bHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUw4UFUzSlI1V1VNNnFkODVndXJWNGF0dWNoVVYrVlJCaUE1MXZSV3RIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidndWaFlNSjh1Q3hQZGYzS1pLcld0UUE3aGpMdWJIdCtzK1V2czJvTEJqYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ZdW1VVDJTT1MvbnREdFZoenFWVDRxZG90OE1BRDlQWVpnZ3ltRXcyWktqWHVrYnpBOTZMcDJUcGh1ZDUvdVhBelBWMU1RbVVsMU9TdEtjM05aWmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiIvRUpWZzNrbGZGVTgrSUxaZGRBd0lKcGVaOW1sUW9QYm84OVd5citBZVN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiQ3dPc3VvYVJJbUpXcU96TGRUTDdRIiwicGhvbmVJZCI6ImI0ZTY2OGE3LTI3MjUtNDYyYi1hZDJmLTEwNjkyODE4MjA3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWWVNVYkEyVldGaHlPVlpWTzBxYXJEN3N2SGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm9tVUtPMWlJeXowRlZseENiMGkwc2tXU1NNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik4zTlkxNUo2IiwibWUiOnsiaWQiOiIyNTQ3MjY1NDQ1MzA6NzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RgC3wnZGB8J2QuPCdkYfwk4WTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPN25oWWtFRVBMZG1MUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwb3hXTStYajh5WVUvY1dPOVRYOUR1S3NIMms1dnJWQWZWd2t1cFpwdjJnPSIsImFjY291bnRTaWduYXR1cmUiOiJnSDZzL2pUOGFIMldrZWpxaWFoUG8vWHdLVWdXMkJhVngyNDV5K0thK3drd2YvM1M5ZlNwUDJwTmI5R1RoZlVHY2NhSG9zVkdVNngwRlczOFFYOUNDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTXFHdXN1NTV0bFZmdm53Rzk5VmIwamx6aG9vbTJ3bmE1QncyeWFqK0VXaVpaTTJnV3NRQUNrREtCRmkzOVNLeG8wREVINUVWVEJmaXVTcGFJeTFHaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MjY1NDQ1MzA6NzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEtNVmpQbDQvTW1GUDNGanZVMS9RN2lyQjlwT2I2MVFIMWNKTHFXYWI5byJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA2OTg4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLQzYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
