import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';


const app = express();
app.use('api',proxy('http://react-ssr-api.herokuapp.com',{

    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }

}))
app.use(express.static('public'));
app.get('*',(req,res)=>{
    const store = createStore();
    matchRoutes(Routes,req.path).map(({ route }) => {
        return route.loadData ? route.loadData() : null;
    });

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log("in port 3000");
})