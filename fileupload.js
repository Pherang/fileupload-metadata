const express = require('express'),
      multer = require('multer'),
      upload = multer( { storage: storage} ),
      appPort = process.env.PORT || 8080,
      app = express()

app.set('views', './views')
app.set('view engine', 'pug') // Pug might be overkill for this but wanted to start learning an engine

// Wanted to have file names stored with original name.
var storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb(null, 'uploads/')
  },
  filename: function (req,file,cb) {
    cb(null, file.originalname + '-' + Date.now()) 
  }
})

app.get('/', (req,res) => {
  res.render('index', { title: 'Hello!', message: 'Choose a file to upload'} )
})

app.post('/', upload.single('filename'), (req,res,next) => {
  let uploadResults = { 'size': req.file.size }
  res.send(JSON.stringify(uploadResults, null, 2))
})

app.listen(appPort, () => {
  console.log('Server listening on ' + appPort)
})
