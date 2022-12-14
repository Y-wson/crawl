/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-10-17 21:56:10
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-10-22 18:55:57
 * @FilePath: /crawl/mail.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const nodemailer = require('nodemailer');
const config = require('./config');
let transporter = nodemailer.createTransport({
  service: 'QQ',
  port: 465,
  secureConnection: true,
  auth: {
    user: config.mail.email,
    pass: config.mail.pass
  }
});

function sendMail(to, subject, html) {
  let mailOptions = {
    from: config.mail.from,
    to,
    subject,
    html,
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log('邮件已经发送',info);
  });
}
module.exports = sendMail;