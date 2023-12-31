import swagggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
    definition : {
        openapi:"3.0.0",
        info : { 
            title: 'API SERV FOTO BID', 
            version:"1.0.0", 
            description: 'Una API para gestionar fotos y usuarios',
            contact: {
                name: 'Igor Ramos Cruzado',
                email: 'igor.ramos.c@hotmail.com',
            },
            license: {
                name: 'Licencia de la API',
                url: 'https://url-de-tu-licencia.com',
            },
            servers: [
                {
                  url: 'http://localhost:3000', // URL de tu servidor
                  description: 'Servidor local',
                },
                // Puedes agregar más servidores si tu API está desplegada en varios lugares
            ],
        },
    },
    apis: ['src/routes/*.js','../models/user.model.js'],
};

const swaggerSpec = swagggerJSDoc(options);

export const swagggerJSDocs = (app,port) =>{
    app.use('/',swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get('docs.json',(req,res) =>{
        res.setHeader('Content-Type','application/json');
        res.send(swaggerSpec);
    })
};

