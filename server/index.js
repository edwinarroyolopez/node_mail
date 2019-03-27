 var nodemailer = require('nodemailer');
 var smtpTransport = require('nodemailer-smtp-transport');
 var transporter = nodemailer.createTransport(smtpTransport({
   service: 'gmail',
   host: 'smtp.gmail.com',
   auth: {
     user: 'yourmail@gmail.com',
     pass: 'yourpass'
   }
 }));
 var mailOptions = {
   from: 'yourmail@gmail.com',
   to: 'othermail@hotmail.com',
   subject: 'Sending Email using Node.js[nodemailer]  -- Ed',
   text: 'That was easy!'
 };
 transporter.sendMail(mailOptions, function(error, info) {
   if (error) {
     console.log(error);
   } else {
     console.log('Email sent: ' + info.response);
   }
 });
// http://js.dokry.com/nodemailer-con-gmail-y-nodejs.html

 // /*****************/
 // var smtpTransport = nodemailer.createTransport('SMTP', {
 //       service: 'Gmail',
 //       auth: {
 //         XOAuth2: {
 //           user: smtpConfig.user,
 //           clientId: smtpConfig.client_id,
 //           clientSecret: smtpConfig.client_secret,
 //           refreshToken: smtpConfig.refresh_token,
 //           accessToken: smtpConfig.access_token,
 //           timeout: smtpConfig.access_timeout - Date.now()
 //         }
 //       }
 //     };
 //
 //     var passport = require('passport'),
 //       GoogleStrategy = require('./google_oauth2'),
 //       config = require('../config');
 //
 //     passport.use('google-imap', new GoogleStrategy({
 //       clientID: config('google.api.client_id'),
 //       clientSecret: config('google.api.client_secret')
 //     }, function(accessToken, refreshToken, profile, done) {
 //       console.log(accessToken, refreshToken, profile);
 //       done(null, {
 //         access_token: accessToken,
 //         refresh_token: refreshToken,
 //         profile: profile
 //       });
 //     })); exports.mount = function(app) {
 //       app.get('/add-imap/:address?', function(req, res, next) {
 //         passport.authorize('google-imap', {
 //           scope: ['https://mail.google.com/', 'https://www.googleapis.com/auth/userinfo.email'],
 //           callbackURL: config('web.vhost') + '/add-imap',
 //           accessType: 'offline',
 //           approvalPrompt: 'force',
 //           loginHint: req.params.address
 //         })(req, res, function() {
 //           res.send(req.user);
 //         });
 //       });
 //     };
 //
 //     /******/
 //     const nodemailer = require('nodemailer');
 //     const express = require('express');
 //
 //     let transporter = nodemailer.createTransport({
 //       host: 'smtp.gmail.com',
 //       port: 465,
 //       secure: true,
 //       auth: {
 //         type: 'OAuth2',
 //         clientId: '924390765585-k1h9vckm3fpm3ka4r30m0rpnvgerchjj.apps.googleusercontent.com',
 //         clientSecret: 'TXnzskqgf5-3aZEKAVcAiEZ6'
 //       }
 //     });
 //
 //     transporter.sendMail({
 //       from: 'zeroedprogrammer@gmail.com',
 //       to: 'edwin.arroyo@landsoft.com.co',
 //       subject: 'Message',
 //       text: 'I hope this message gets through!',
 //       auth: {
 //         user: 'user@example.com',
 //         refreshToken: '1/sA29eI_XynNukVXS3eQXgh8cMnSOb_W7TtSOq0JFEiE',
 //         accessToken: 'ya29.GlvRBleZZDvmSNjEVvzUWMrUAoDCPdC_Jk2NYHJd0TJvyhVfUls8W0_kMw00VbXjCciy0UtyFN_zX-aBtsOm_LJ2y2nYL9eP8b6Mef_RtMM7VOBOzwgeAi0AHDDy',
 //         expires: 1484314697598
 //       }
 //     });
 //
 //     /*
 //       Authorization code:
 //       4/EgGj1Ss4bQHlqS5pDu12cnfel-r0-aHQU_QQ4arA9BVIKa2Jc5iQcWyUuhuplHZlqqaGnApXAlUIZzh9SV5TQgo
 //       refresh token:
 //       1/sA29eI_XynNukVXS3eQXgh8cMnSOb_W7TtSOq0JFEiE
 //       access token:
 //       ya29.GlvRBleZZDvmSNjEVvzUWMrUAoDCPdC_Jk2NYHJd0TJvyhVfUls8W0_kMw00VbXjCciy0UtyFN_zX-aBtsOm_LJ2y2nYL9eP8b6Mef_RtMM7VOBOzwgeAi0AHDDy
 //
 //     */
 //
 //     //
 //     //
 //     // const { google } = require("googleapis");
 //     // const OAuth2 = google.auth.OAuth2;
 //     //
 //     // const oauth2Client = new OAuth2(
 //     //      "924390765585-k1h9vckm3fpm3ka4r30m0rpnvgerchjj.apps.googleusercontent.com", // ClientID
 //     //      "sS1tgiebbn1gOOULShLm4Sus", // Client Secret
 //     //      "https://developers.google.com/oauthplayground" // Redirect URL
 //     // );
 //     // const accessToken = '' ;
 //     // oauth2Client.on('tokens', (tokens) => {
 //     //   if (tokens.refresh_token) {
 //     //     // store the refresh_token in my database!
 //     //     console.log(tokens.refresh_token);
 //     //   }
 //     //   console.log(tokens.access_token);
 //     // });
 //     //
 //     // oauth2Client.setCredentials({
 //     //      refresh_token: "1/SqYXwRoDSzXwauwUZGSBdqJJAQ6yB29WRJvqUugBbws"
 //     // });
 //     //
 //     //
 //     // //const tokens = await oauth2Client.refreshAccessToken()
 //     // //const accessToken = tokens.credentials.access_token
 //     //
 //     // const smtpTransport = nodemailer.createTransport({
 //     //      service: "gmail",
 //     //      auth: {
 //     //           type: "OAuth2",
 //     //           user: "zeroedprogrammer@gmail.com",
 //     //           clientId: "24390765585-k1h9vckm3fpm3ka4r30m0rpnvgerchjj.apps.googleusercontent.com",
 //     //           clientSecret: "sS1tgiebbn1gOOULShLm4Sus",
 //     //           refreshToken: "1/UKqCn8HRCNlVp4v5U0eovvgvc84aCcjrbazwJJc5XWw",
 //     //           accessToken: accessToken
 //     //      }
 //     // });
 //     //
 //     // const mailOptions = {
 //     //      from: "zeroedprogrammer@gmail.com",
 //     //      to: "edwin.arroyo@gmail.com",
 //     //      subject: "Node.js Email with Secure OAuth",
 //     //      generateTextFromHTML: true,
 //     //      html: "<b>test -- -- test</b>"
 //     // };
 //     //
 //     // smtpTransport.sendMail(mailOptions, (error, response) => {
 //     //      error ? console.log(error) : console.log(response);
 //     //      smtpTransport.close();
 //     // });
 //
 //
 //     /*
 //       Second intent
 //       https://medium.com/@RistaSB/use-expressjs-to-send-mails-with-gmail-oauth-2-0-and-nodemailer-d585bba71343
 //       https://nodemailer.com/smtp/oauth2/
 //
 //       Request / Response
 //     HTTP/1.1 302 Found
 //     Location: https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&prompt=consent&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https%3A%2F%2Fmail.google.com%2F&access_type=offline
 //     GET /oauthplayground/?code=4/EgFplI3wKxcVbLyxsq3D-SYSSLR89MHDdPMgoZqnesosA4gTsgwmQ5EHzWQ-weieU4aHDZ6nLKJZCaNyrRJ24cA&scope=https://mail.google.com/ HTTP/1.1
 //     Host: developers.google.com
 //
 //       Authorization code: 4/EgFplI3wKxcVbLyxsq3D-SYSSLR89MHDdPMgoZqnesosA4gTsgwmQ5EHzWQ-weieU4aHDZ6nLKJZCaNyrRJ24cA
 //
 //       Request / Response
 //     POST /oauth2/v4/token HTTP/1.1
 //     Host: www.googleapis.com
 //     Content-length: 277
 //     content-type: application/x-www-form-urlencoded
 //     user-agent: google-oauth-playground
 //     code=4%2FEgFplI3wKxcVbLyxsq3D-SYSSLR89MHDdPMgoZqnesosA4gTsgwmQ5EHzWQ-weieU4aHDZ6nLKJZCaNyrRJ24cA&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&client_id=407408718192.apps.googleusercontent.com&client_secret=************&scope=&grant_type=authorization_code
 //     HTTP/1.1 200 OK
 //     Content-length: 308
 //     X-xss-protection: 1; mode=block
 //     X-content-type-options: nosniff
 //     Transfer-encoding: chunked
 //     Vary: Origin, X-Origin, Referer
 //     Server: ESF
 //     -content-encoding: gzip
 //     Cache-control: private
 //     Date: Tue, 19 Mar 2019 04:00:11 GMT
 //     X-frame-options: SAMEORIGIN
 //     Alt-svc: quic=":443"; ma=2592000; v="46,44,43,39"
 //     Content-type: application/json; charset=utf-8
 //     {
 //       "access_token": "ya29.GlvRBh8CRcRGSpdKOnFs7C5SafSePMF467m7uWEyhQPGT_EIiZY50gwgRgbZRRgVEqsoYLAEdDDBVDcf_-_SkoGpaQPPw3juhmiO3kqJ7DewH-scMW0D5zizzFxm",
 //       "scope": "https://mail.google.com/",
 //       "token_type": "Bearer",
 //       "expires_in": 3600,
 //       "refresh_token": "1/UKqCn8HRCNlVp4v5U0eovvgvc84aCcjrbazwJJc5XWw"
 //     }
 //
 //     refresh token: 1/UKqCn8HRCNlVp4v5U0eovvgvc84aCcjrbazwJJc5XWw
 //     access token: ya29.GlvRBh8CRcRGSpdKOnFs7C5SafSePMF467m7uWEyhQPGT_EIiZY50gwgRgbZRRgVEqsoYLAEdDDBVDcf_-_SkoGpaQPPw3juhmiO3kqJ7DewH-scMW0D5zizzFxm
 //
 //
 //     */
 //
 //
 //
 //     /*
 //       First intent
 //     */
 //
 //     /*
 //     https://medium.com/@RistaSB/use-expressjs-to-send-mails-with-gmail-oauth-2-0-and-nodemailer-d585bba71343
 //
 //     https://developers.google.com/oauthplayground/
 //
 //     https://github.com/googleapis/google-auth-library-nodejs#oauth2
 //     https://github.com/googleapis/google-api-nodejs-client/pull/1160/files
 //     https://stackoverflow.com/questions/50242996/current-method-to-get-new-access-token-from-refresh-token
 //     https://github.com/googleapis/google-auth-library-nodejs/issues/575
 //     https://github.com/googleapis/google-auth-library-nodejs/blob/master/src/auth/oauth2client.ts
 //
 //     https://developers.google.com/adwords/api/docs/guides/authentication
 //
 //     tuto:
 //     https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
 //
 //         Google
 //         ------
 //         Api key
 //         AIzaSyBA6NkMSKmnHuAz99f4Nk9Ik6xWMPkffIA
 //
 //         Aplication name
 //         nodemailer_app_test
 //
 //         Aplication type => other: Name
 //         Web_client_nodemailer_test
 //
 //         OAuth client
 //           client ID
 //           924390765585-k1h9vckm3fpm3ka4r30m0rpnvgerchjj.apps.googleusercontent.com
 //           client secret
 //           sS1tgiebbn1gOOULShLm4Sus
 //
 //
 //         OAuth 2.0
 //         Authorization code
 //         4/DwEMcrm7VgFb9S1F-R1DuNFdxo1Ehz9Cu1tk5yKeIOCr0U-BPvGH8s0GRCVSKeZ_TCOWKMR9BJ5x90ZaadcCIMw
 //
 //
 //         POST /oauth2/v4/token HTTP/1.1
 //     Host: www.googleapis.com
 //     Content-length: 277
 //     content-type: application/x-www-form-urlencoded
 //     user-agent: google-oauth-playground
 //     code=4%2FDwEMcrm7VgFb9S1F-R1DuNFdxo1Ehz9Cu1tk5yKeIOCr0U-BPvGH8s0GRCVSKeZ_TCOWKMR9BJ5x90ZaadcCIMw&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&client_id=407408718192.apps.googleusercontent.com&client_secret=************&scope=&grant_type=authorization_code
 //     HTTP/1.1 200 OK
 //     Content-length: 734
 //     X-xss-protection: 1; mode=block
 //     X-content-type-options: nosniff
 //     Transfer-encoding: chunked
 //     Vary: Origin, X-Origin, Referer
 //     Server: ESF
 //     -content-encoding: gzip
 //     Cache-control: private
 //     Date: Sat, 16 Mar 2019 01:44:57 GMT
 //     X-frame-options: SAMEORIGIN
 //     Alt-svc: quic=":443"; ma=2592000; v="46,44,43,39"
 //     Content-type: application/json; charset=utf-8
 //     {
 //       "access_token": "ya29.GlvOBj7v0t4Od4RZ1sF99-9aCLYNEuHVSNVs6O5ygIOvE-hHmjlz-X8pVGIUmqQciNnyDGpK9uvOgys0a7EXkZ2R91TdfHdQ5a5N6B2VAchMi1w_fxqj2zyw5zN0",
 //       "scope": "https://www.googleapis.com/auth/gmail.metadata https://www.googleapis.com/auth/gmail.settings.sharing https://mail.google.com/ https://www.googleapis.com/auth/gmail.insert https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.settings.basic https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.send",
 //       "token_type": "Bearer",
 //       "expires_in": 3600,
 //       "refresh_token": "1/SqYXwRoDSzXwauwUZGSBdqJJAQ6yB29WRJvqUugBbws"
 //     }
 //
 //
 //
 //         Request / Response
 //         HTTP/1.1 302 Found
 //         Location: https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&prompt=consent&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https%3A%2F%2Fmail.google.com%2F+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.compose+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.insert+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.labels+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.metadata+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.modify+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.send+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.settings.basic+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.settings.sharing+https%3A%2F%2Fmail.google.com%2Fmail%2Ffeed%2Fatom&access_type=offline
 //
 //         GET /oauthplayground/?code=4/DwEMcrm7VgFb9S1F-R1DuNFdxo1Ehz9Cu1tk5yKeIOCr0U-BPvGH8s0GRCVSKeZ_TCOWKMR9BJ5x90ZaadcCIMw&scope=https://mail.google.com/%20https://www.googleapis.com/auth/gmail.compose%20https://www.googleapis.com/auth/gmail.insert%20https://www.googleapis.com/auth/gmail.labels%20https://www.googleapis.com/auth/gmail.metadata%20https://www.googleapis.com/auth/gmail.modify%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/gmail.send%20https://www.googleapis.com/auth/gmail.settings.basic%20https://www.googleapis.com/auth/gmail.settings.sharing HTTP/1.1
 //         Host: developers.google.com
 //
 //     */
