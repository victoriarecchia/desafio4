import { Router } from 'express';
import { products } from '../products.js';

const router = Router();

router.get('/users', (req, res) => {
    res.render('users', { users: users });
});

router.get('/products', (req, res) => {
    res.render('realtime_products', { products: products });
});

export default router;
