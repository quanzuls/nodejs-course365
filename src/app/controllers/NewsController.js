class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    } // [GET] /news:slug
    show(req, res) {
        res.send('NEWS SLUG');
    }
}
// module.exports = new NewsController;
export default new NewsController();
