import React from 'react';
import Page1 from './components/Page1';
// Part1: No code splitting:
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

// Part3: Async component:
// import asyncComponent from './components/AsyncComponent';

// Part4: React.lazy:
import { Suspense } from 'react';
const Page2 = React.lazy(() => import('./components/Page2'))
const Page3 = React.lazy(() => import('./components/Page3'))

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      route : 'page1',
      // Part2: Code splitting manually:
      // component : null
    }
  }

  onRouteChange = (route) => {
    // Part1&3&4: No code splitting & Async component & React.lazy:
    this.setState({route: route})

    // Part2: Code splitting manually:
    // if(route === 'page1'){
    //   this.setState({route: route})
    // } else if (route === 'page2'){
    //   import('./components/Page2').then((Page2) => {
    //     console.log(Page2)
    //     this.setState({
    //       route: route,
    //       component: Page2.default
    //     })
    //   })
    // } else if (route === 'page3'){
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({
    //       route: route,
    //       component: Page3.default
    //     })
    //   })
    // }

  }
  
  render(){
    // Part1: No code splitting:
    // if(this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // } else if(this.state.route === 'page2') {
    //   return <Page2 onRouteChange={this.onRouteChange}/>
    // } else if(this.state.route === 'page3') {
    //   return <Page3 onRouteChange={this.onRouteChange}/>
    // }

    // Part2: Code splitting manually:
    // if(this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange}/>
    // }

    // Part 3: Cleaner Code Splitting:
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2') {
    //   const AsyncPage2 = asyncComponent(() => import("./components/Page2"));
    //   return <AsyncPage2 onRouteChange={this.onRouteChange} />
    // } else {
    //   const AsyncPage3 = asyncComponent(() => import("./components/Page3"));
    //   return <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }

    // Part4: React.lazy:
    if(this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange}/>
    } else if(this.state.route === 'page2') {
      return(
        <Suspense fallback={<div>Cargando...</div>}>
          <Page2 onRouteChange={this.onRouteChange}/>
        </Suspense>
      )
    } else if(this.state.route === 'page3') {
      return(
        <Suspense fallback={<div>Cargando...</div>}>
          <Page3 onRouteChange={this.onRouteChange}/>
        </Suspense>
      )
    }

  }
}

export default App;
