const fs = require('fs')

const slug = process.argv.slice(2)[0]

if (!slug) {
  console.error('You should provide a slug.')
  return
}

const htmlContent = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="${slug}" />
    <meta property="og:description" content="${slug}" />
    <link rel="icon" href="../favicon.ico" />
    <link rel="stylesheet" href="../global.css" />
    <link rel="stylesheet" href="./styles.css" />
    <script src="./index.js"></script>
    <title>${slug}</title>
  </head>
  <body>
    <!--
      To do:
        - Update meta tags.
        - Remove <link> or <script> tags in needed.
    -->
    <h1>${slug}</h1>
  </body>
</html>
`

// Create folder `./${slug}`
try {
  if (!fs.existsSync(`web/${slug}`)) {
    fs.mkdirSync(`web/${slug}`)
    console.log(`Successfully created \`web/${slug}\` folder`)
  }
} catch (err) {
  console.error(err)
}

// Create index.html
fs.writeFile(`./web/${slug}/index.html`, htmlContent, (err) => {
  if (err) {
    console.error('Error while creating "index.html": ', err)
    return
  }
  console.log('Successfully created `index.html` file')
})

// Create styles.css
fs.writeFile(`./web/${slug}/styles.css`, '', (err) => {
  if (err) {
    console.error('Error while creating "styles.css": ', err)
    return
  }
  console.log('Successfully created `styles.css` file')
})

// Create index.js
fs.writeFile(`./web/${slug}/index.js`, '', (err) => {
  if (err) {
    console.error('Error while creating "index.js": ', err)
    return
  }
  console.log('Successfully created `index.js` file')
})
