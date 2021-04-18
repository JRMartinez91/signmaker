//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TemplateSelector from './components/TemplateSelector'
import retrieve from './/components/aggregator'
import RoadSign1 from './components/templates/RoadSign1';
import WarningSign1 from './components/templates/WarningSign1';
import WarningSign4 from './components/templates/WarningSign4';
import WarningSign3 from './components/templates/WarningSign3';
import StreetSign1 from './components/templates/StreetSign1';
import PotionLabel1 from './components/templates/PotionLabel1';
import PotionLabel2 from './components/templates/PotionLabel2';
const templateMasterlist = require('./components/templateMasterlist')

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className={'whole-page-container'}>
        <TemplateSelector/>
        <div className={"rightside-wrapper"}>
          <h1>Welcome to the Signmaker</h1>
          <h2>Select a Template to Begin</h2>
          {/* router stuff goes here */}
          <Router>
            <Switch>
              {/* generated list of links--connected to a masterlist of hard-coded
              information about what's in each template */}
              <Route path="/warningsign_1">
                <WarningSign1/>
              </Route>
              <Route path="/warningsign_4">
                <WarningSign4/>
              </Route>
              <Route path="/warningsign_3">
                <WarningSign3/>
              </Route>
              <Route path="/streetsign_1">
                <StreetSign1/>
              </Route>
              <Route path="/potionlabel_1">
                <PotionLabel1/>
              </Route>
              <Route path="/potionlabel_2">
                <PotionLabel2/>
              </Route>
            </Switch>
          </Router>
        </div>
        {/* <RenderButton/> */}
      </div>
    </div>
  );
}

function detectSize(){

}

function parseRoutesTemp(){
  const a = retrieve();
  console.log("parseRoutesTemp called")
  console.log(a)
  let result = []
  for(const key in a){
    console.log(key)
    result.push(
      <Route path={"/"+key}>{a[key]}</Route>
    )
  }
  // return(
  //   <div>
  //     <Route path={"/roadsign_1"} component={a.RoadSign1}/>
  //   </div>
  // )
  console.log(result)
  return result
}

function parseRoutes(){
  let routeList = []
  const masterlist = templateMasterlist.getData
  for(const item of masterlist){
    routeList.push(
      <Route path={"/"+item.link}>
        <h1>{item.name}</h1>
      </Route>
    )
  }
  return routeList;
}

export default App;
