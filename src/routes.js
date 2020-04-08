import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.render('home');
});

routes.get('/login', (req, res) => {
  res.render('access/login');
});

routes.get('/password_reset', (req, res) => {
  res.render('access/password_reset');
});

routes.get('/404', (req, res) => {
  res.render('access/404');
});

routes.get('/500', (req, res) => {
  res.render('access/500');
});

routes.get('/user', (req, res) => {
  res.render('user/home');
});

routes.get('/user/subcategory', (req, res) => {
  res.render('user/subcategory');
});

routes.get('/user/ticket/new', (req, res) => {
  res.render('user/ticket/new')
})

routes.get('/operator', (req, res) => {
  res.render('operator/home');
});

routes.get('/operator/tickets', (req, res) => {
  res.render('operator/tickets');
});

routes.get('*', (req, res) => {
  return res.status(404).render('access/404');
});

export default routes;
