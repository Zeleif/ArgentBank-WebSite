import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux/Store/Store.jsx"
import App from "./App.js"
import "./Style/index.scss";



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)