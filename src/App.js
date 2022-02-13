import Main from "./components/main";
import {Datas} from'./constant'
function App() {
 const myfetch=()=>{fetch("https://assessment-edvora.herokuapp.com/").then((res)=>res.json())}
  
  const myyy= myfetch();
  
  return (
<Datas.Provider value={myfetch()}>
    <Main />
    </Datas.Provider>
  );
}

export default App;
