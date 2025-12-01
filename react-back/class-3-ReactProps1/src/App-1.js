import CompA from "./props/CompA";
import Movie from './Movie/Movie';
import User from  './props2/User'
let App=()=>{
    
    const user_Name="Rahul";
    const user_Id=101;

    return <div>
                <h2>App Component</h2>
                <hr/>
                <CompA/>
            </div>
}
export default App;