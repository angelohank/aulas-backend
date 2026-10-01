import Router from "express";

const router = Router();

router.get("/livros", () => {
    console.log("get livros")
});
router.get("/livros/:id", () => {
    console.log("get livros")
});
router.post("/livros", () => {
    console.log("post livros")
});
router.delete("/livros/:id", () => {
    console.log("delete livros")
});
router.patch("/livros/:id", () => {
    console.log("patch livros")
});

export default router;