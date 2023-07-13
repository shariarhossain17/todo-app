import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import AddTodo from '../pages/AddTodo/AddTodo';
import AllTodo from '../pages/AllTodo/AllTodo';
import Home from '../pages/Home/Home';
import MyTodo from '../pages/MyTodo/MyTodo';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'add-todo',
                element:<PrivateRoute><AddTodo/></PrivateRoute>
            },
            {
                path:'my-todo',
                element:<PrivateRoute><MyTodo/></PrivateRoute>
            },
            {
                path:'all-todo',
                element:<AllTodo/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
    }
])

export default Router;