// 引入路由
import React, { Component, lazy ,Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//引入样式重置
import './style/base.scss'
//全局样式
import './style/index.scss'
// 引入组件
import Loading from './components/Loading'
import Tab from './components/Tab/Tab'
const HomePage = lazy(()=>import('./pages/home-page/index'))
const MainIndex = lazy(()=>import('./pages/main/index'))
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div id='app'>
          <Suspense fallback={Loading}>
            <Switch>
                {/* 路由重定向 */}
                <Route path="/" exact render={()=><Redirect to="/index"/>}/> 
                <Route path='/index' component={HomePage}></Route>
                <Route path='/main' component={MainIndex}></Route>
            </Switch>
            </Suspense>
            <Tab></Tab>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;