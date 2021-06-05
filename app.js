// Dependency
import path from 'path';   
import express from 'express';   
import { fileURLToPath } from 'url';

// Route bestanden 
import router from './routes/indexRouter.js';

//Update API
import JSONFiles from './models/updateModel.js';
JSONFiles.update();

// Een Express Instancie maken
const app = express();
app.set('view engine', 'ejs');

// Parse incoming requests met JSON payload
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initializatie Public Folder
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static('./public/'));

// API Routes voor applicatie
app.use('/', router.empty)
app.use('/home', router.home);
//app.use('/404', Router.quiz);
app.use('/login', router.login);
app.use('/users', router.users);
app.use('/create-account', router.account);
app.use('/lord-of-the-rings', router.quiz);
app.use('/sitemap', router.sitemap);

// Configuratie van de server 
const port = process.env.PORT || 8000;
app.listen(port, ()=> {
  console.log('Server gestart op poort nummer: ', port);
});