import ReactDOM from 'react-dom/client'
import App from './App'
let root=ReactDOM.createRoot(document.getElementById('airtelroot'))
//root.render("Good Afternoon")
//root.render(<h1>Good Afternoon</h1>)
//root.render(<h1>Good Afternoon</h1><h2>Good Evening</h2>)
//root.render(<div><h1>GM</h1><h2>GE</h2></div>)
root.render(<App/>)