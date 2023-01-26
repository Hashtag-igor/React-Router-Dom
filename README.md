# React-Router-Dom v6

React Router é um pacote para criação de rotas em React. Permite nosso app ter varias páginas. /home, /login etc;

Precisamos instalar e importar no nosso projeto para usar-lo;

**Para instalar o react router dom, use:**
npm i react-router-dom

_________________________________________________________________________________________________________________________
**Importados**

import { createBrowserRouter, RouterProvider, Outlet, Link, useParams, useNavigate } from "react-router-dom";

*createBrowserRouter:*
Vai receber as rotas configuradas (dentro dele vai ter um array);

*RouterProvider:*
Vai receber a const "router" (que tem as rotas) e passar para o projeto por meio de props;

*Outlet:*
Serve para reaproveitar a estrutura, para não ter que repetir o código. Onde o Outlet for colocado, vai ser onde o conteúdo do router vai ser colocado. Cada página do router será inserida ali;

*Link:*
Funciona como uma tag <a>. Ao ser clicado, manda o usuario para uma rota especifica (rota definida dentro do próprio link) ex: <Link to="/algumarota">AlgumaRota<Link/>. Sempre depois do to="", vem o "/" + o nome da rota que você quer difinir, a nãoo ser que você queira colocar na página padrão, ai basta apenas colocar to="/"

*useParams:*
Faz com que possamos extrair informações que vem da URL, entregue em forma de obj.
ex:  const {id} = useParams()  //Esse nome "id" tem que combinar com o nome passado lá no "path" do index.js, no element.
Seria mais interessante ainda caso estivesse utilizando um banco de dados, por que definiria uma rota especifica propria para cada usuario salvo, buscando uma id do proprio banco de dados.

*useNavigate:*
Permite a navegação entre páginas na parte da lógica. Por exemplo, você está para enviar a parte de cadastro do seu formulario, quando clicar no botão e em enviar, automaticamente você voltará para a página de home do projeto. Você pode usar na função do botão o "Navigate" e colocar para uma rota que você queria (no ex acima foi para a home), então ficaria por exemplo:
    function submit(){
      console.log("Retornando para a home")    //Aqui poderia retornar algo para o banco de dados caso estivesse usando
      return navigate("/")                     //Ao executar a função, será renderizado para a rota "/";
    }

*Navigate:*
Suponhamos que umma página do projeto deixou de existir por causa de um link antigo, por exemplo. Ao inves do usuario cair nessa rota que não existe mais, o componente exportado do react-router-dom "Navigate" transporta essa rota antiga, para uma nova.
ex: {
      path: "oldcontact",                     
      element: <Navigate to="/contact" />,
    }

_________________________________________________________________________________________________________________________
**Como criar uma **estrutura de Rotas e caminhos**

const router =  createBrowserRouter([  
    {
      path: "/",                 //Caminho da url
      element: <Home />,         //Conteúdo que será mostrado no caminho definido acima
    },
    {
      path: "contact",           //Caminho da url
      element: <Contact />,      //Conteúdo que será mostrado no caminho definido acima
    }
  ])

**Se você quiser respeitar a hierarquia entra pai e filho, você pode usar uma estrutura onde o <App /> será a rota PRINCIPAL e todas as outras rotas virão apartir dele, ou seja, seus filhos "children"**

const router =  createBrowserRouter([  
  {
    path: "/",                   //Caminho da url
    element: <App />,            //Conteúdo que será mostrado no caminho definido acima
    errorElement: <ErrorPage/>   //Se digitar a path diferente da definida, vai disparar o errorElement e o conteúdo
    children: [                  //Rotas "filho" da rota princiapl <App />
      {
        path: "contact",         //Caminho da url
        element: <Home />,       //Conteúdo que será mostrado no caminho definido acima
      },
      {
        path: "contact",         //Caminho da url
        element: <Contact />,    //Conteúdo que será mostrado no caminho definido acima
      },
      {
        path: "/contact/:id",               //":id" = que representa o <Link>. Cada <Link> na msm pagina, :id vai ser +1;
        element: <ContactDetails />,
      }, 

      //navigate para páginas não existentes mais
      {
        path: "oldcontact",                     //Rota do projeto que deixou de existir..
        element: <Navigate to="/contact" />,    //Troca a rota antiga, para uma nova com o <Navigate to=""/>
      }
    ] 
  },
])