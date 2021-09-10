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
    <link rel="stylesheet" href="./styles.css" />
    <script src="./index.js"></script>
    <title>${slug}</title>
  </head>
  <body>
    <h1>${slug}</h1>
  </body>
</html>
`

// Create folder `./${slug}`
try {
  if (!fs.existsSync(slug)) {
    fs.mkdirSync(slug)
  }
} catch (err) {
  console.error(err)
}

// Create index.html
fs.writeFile(`./${slug}/index.html`, htmlContent, (err) => {
  if (err) {
    console.error('Error while creating "index.html": ', err)
    return
  }
})

// Create styles.css
fs.writeFile(`./${slug}/styles.css`, '', (err) => {
  if (err) {
    console.error('Error while creating "styles.css": ', err)
    return
  }
})

// Create index.js
fs.writeFile(`./${slug}/index.js`, '', (err) => {
  if (err) {
    console.error('Error while creating "index.js": ', err)
    return
  }
})
