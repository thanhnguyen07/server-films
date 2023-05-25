const path = require('path');
const express = require('express');
require('dotenv').config()
const app = express();
const route = require('./src/routes');
const methodOverride = require('method-override');
const fs = require('fs');
const cors = require('cors');
const port = process.env.PORT || 3000

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))
// Connect DB
const db = require('./src/config/db');
db.connect();

// // BodyParser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static files - Images
app.use(express.static(path.join(__dirname, 'src/public')));

app.use(methodOverride('_method'));

// app.get('/video', function (req, res) {
//     console.log(req.query);
//     const path = `src/public/video/${req.query.id}.mp4`;
//     const stat = fs.statSync(path);
//     const fileSize = stat.size;
//     const range = req.headers.range;

//     if (range) {
//         const parts = range.replace(/bytes=/, '').split('-');
//         const start = parseInt(parts[0], 10);
//         const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

//         if (start >= fileSize) {
//             res.status(416).send(
//                 'Requested range not satisfiable\n' + start + ' >= ' + fileSize,
//             );
//             return;
//         }

//         const chunksize = end - start + 1;
//         const file = fs.createReadStream(path, {start, end});
//         const head = {
//             'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//             'Accept-Ranges': 'bytes',
//             'Content-Length': chunksize,
//             'Content-Type': 'video/mp4',
//         };

//         res.writeHead(206, head);
//         file.pipe(res);
//     } else {
//         const head = {
//             'Content-Length': fileSize,
//             'Content-Type': 'video/mp4',
//         };
//         res.writeHead(200, head);
//         fs.createReadStream(path).pipe(res);
//     }
// });

app.get("/", (req, res) => {
    res.send('SERVER ON')
})

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});