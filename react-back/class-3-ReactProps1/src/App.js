let App=()=>{
    const items = ["Mac Pro", "ThinkPad","Dell"];
    return <div>
                <ul>
                    {items.map(item => <li>{item}</li>)}
                </ul>
            </div>
}
export default App;