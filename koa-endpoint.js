const koa = require('koa');
const app =  new koa();

app.use(function* () {
    this.body = 'Hello and welcome to the KOA server';
});

app.listen(3000);