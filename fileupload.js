const express = require('express'),
      //filesystem = require('file-system'),
      multer = require('multer'),
      upload = multer( { dest: 'uploads/'} ),
      app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req,res) => {
  
  res.render('index', { title: 'Hello!', message: 'Choose a file to upload'} )

})

app.post('/', (req,res) => {
  res.send('You posted')
})

app.listen(8080, () => {
  console.log('Server listening on 8080')
})
