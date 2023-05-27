
import duplicates from "./component/data";
//import Show from "./component/Show";
import "./App.css";

const dup = [];


// let initialObj = {
//   name:"",
//   count:0
// }
//store obj in count
const countArr = [];

//duplicacy logic 
for (let i = 0; i < duplicates.length; i++){
  if (!dup.includes(duplicates[i].name)){
    dup.push(duplicates[i].name)
    countArr.push({
      name:duplicates[i].name,
      count:1
    })
  } else{
    for (let k = 0; k < countArr.length; k++){
      if (countArr[k].name === duplicates[i].name){
        countArr[k].count++;
      } 
    }
  }
}

function App() {
  return<>
  <div >
  <table border={1}>
    <tr>

      <td>NAME</td>
      <td>COUNT</td>

    </tr>
    
  {
    countArr.map((c) => (
    <tr>
      <td>{c.name}</td>
      <td>{c.count}</td>
    </tr>
    ))
  }
  </table>
  </div>
  </>
}

export default App;
