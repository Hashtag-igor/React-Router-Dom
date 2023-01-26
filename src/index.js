import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ContactDetails from './routes/ContactDetails';
import ErrorPage from './routes/ErrorPage';
import Home from "../src/routes/Home"
import Contact from "../src/routes/Contact"
import App from './App';

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
//createBrowserRouter = Vai receber as rotas configuradas (dentro dele vai ter um array)
//RouterProvider = Vai receber a const "router" (que tem as rotas) e passar para o projeto por meio de props;


//Para respeitar a Hierarquia, a rota "principal" será a <App /> e as rotas "childrens" estarão dentro da <App />, como filhos dela;
const router =  createBrowserRouter([  
  {
    path: "/", 
    element: <App />,                     //Rota Principal, rota pai;
    errorElement: <ErrorPage />,          //Se digitar algo diferente da path, vai disparar o conteúdo definido no errorElement (a ErrorPage.jsx);
    children: [                           //Rotas filho;
      {
        path: "/",                         //O caminho da rota aqui é igual a do pai, porque será mostrado no pai também;
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/contact/:id",               //":" significa que o dado é dinâmino (vai ser sempre alterado) + o "id" (não precisa ser esse nome) que representa a const que foi definida no useParams. A cada <Link> da página que for clicado, o :id na url será +1. ex: /contact/1, /contact/2 etc etc;
        element: <ContactDetails />,
      },

      //navigate para páginas não existentes mais
      {
        path: "oldcontact",                     //Rota que não existe mais
        element: <Navigate to="/contact" />,    //Navigate transporta essa rota antiga (que não existe mais), para uma nova;
      }
    ] 
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
