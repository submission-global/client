/* @ts-ignore */
import express from 'express';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { HomePage } from '../shared/app/pages/HomePage';

const app = express();

app.use(express.static('public'));

app.get('/', (req: any, res: any) => {
  const content = ReactDOMServer.renderToString(<HomePage />);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${content}</div>

      <script src="bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000,() => {
  console.log('Listening on port 3000');
});
