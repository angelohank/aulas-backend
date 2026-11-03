//implentar rotas

import router from 'express';

const router = router();

router.get('/livros', (req, res) => {
    //res.json(livros);
});

router.get('/livros/:idLivro', (req, res) => {
});

router.post('/livros', (req, res) => {
});

router.delete('/livros/:idLivro', (req, res) => {
});

router.patch('/livros/:idLivro', (req, res) => {    
});




export default router;