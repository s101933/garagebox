import express from 'express';

// Controller
import Controller from '../controllers/indexController.js' ;

var router = {
    empty: express.Router(),
    home: express.Router(),
    quiz: express.Router(),
    login: express.Router(),
    account: express.Router(),
    users: express.Router(),
    sitemap: express.Router()
}

/* GET pages. */
/* Redirect / to /home */
router.empty.get('/', Controller.Empty);
router.home.get('/', Controller.Home);

/* Quiz page */
router.quiz.get('/', Controller.Quiz);
router.quiz.post('/', Controller.request);

/* Login page */
router.login.get('/', Controller.Login);
router.login.post('/', Controller.request);

/* Create account page */
router.account.get('/', Controller.Create);

/* Create account page */
router.users.get('/', Controller.Profile);
router.users.post('/', Controller.request);

router.sitemap.get('/', Controller.Sitemap);

export default router;