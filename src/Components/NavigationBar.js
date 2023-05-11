// import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import styled from 'styled-components';

// Copied from https://stackoverflow.com/questions/56099829/how-to-make-nav-link-href-work-with-gh-pages
// it has to be falt out so
//

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }
//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;
//     &:hover {
//       color: white;
//     }
//   }
// `;

// export const NavigationBar = () => (
//     <Styles>
//         <Navbar expand="lg">
//             <Navbar.Brand href="/">AMC</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <Nav.Item>
//                         <Nav.Link href="/">Home</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link href="/about">About</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link href="/contact">Contact</Nav.Link>
//                     </Nav.Item>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     </Styles >
// )

//

// package.json :

// {
//     "name": "amc-webapp",
//         "version": "0.1.0",
//             "private": true,
//                 "dependencies": {
//         "bootstrap": "^4.3.1",
//             "react": "^16.8.6",
//                 "react-bootstrap": "^1.0.0-beta.6",
//                     "react-dom": "^16.8.6",
//                         "react-particles-js": "^2.6.0",
//                             "react-router-dom": "^5.0.0",
//                                 "react-scripts": "3.0.0",
//                                     "styled-components": "^4.2.0"
//     },
//     "scripts": {
//         "start": "react-scripts start",
//             "build": "react-scripts build",
//                 "test": "react-scripts test",
//                     "eject": "react-scripts eject",
//                         "predeploy": "npm run build",
//                             "deploy": "gh-pages -d build"
//     },
//     "eslintConfig": {
//         "extends": "react-app"
//     },
//     "browserslist": {
//         "production": [
//             ">0.2%",
//             "not dead",
//             "not op_mini all"
//         ],
//             "development": [
//                 "last 1 chrome version",
//                 "last 1 firefox version",
//                 "last 1 safari version"
//             ]
//     },
//     "devDependencies": {
//         "gh-pages": "^2.0.1"
//     },
//     "homepage": "http://alvincabayan.github.io/amc-webapp"
// }

// NavigationBar.js:

// import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import styled from 'styled-components';

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }
//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;
//     &:hover {
//       color: white;
//     }
//   }
// `;

// export const NavigationBar = () => (
//     <Styles>
//         <Navbar expand="lg">
//             <Navbar.Brand href="/">AMC</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <Nav.Item>
//                         <Nav.Link href="/">Home</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link href="/about">About</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link href="/contact">Contact</Nav.Link>
//                     </Nav.Item>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     </Styles >
// )
// App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Home } from './components/Home';
// import { About } from './components/About';
// import { Contact } from './components/Contact';
// import { NoMatch } from './components/NoMatch';
// import { Layout } from './components/Layout';
// import { NavigationBar } from './components/NavigationBar';
// import { HomeJumbotron } from './components/HomeJumbotron';



// function App() {
//     return (
//         <React.Fragment>
//             <Router>
//                 <NavigationBar />
//                 <HomeJumbotron />
//                 <Layout>
//                     <Switch>
//                         <Route exact path="/" component={Home} />
//                         <Route path="/about" component={About} />
//                         <Route path="/contact" component={Contact} />
//                         <Route component={NoMatch} />
//                     </Switch>
//                 </Layout>
//             </Router>

//         </React.Fragment>
//     );
// }

// export default App;

//Shouldn't the codes:

//     < Nav.Link href = "/" > Home</ >
// <Nav.Link href="/about">About</Nav.Link>
// <Nav.Link href="/contact">Contact</Nav.Link>
// point to:

// https://alvincabayan.github.io/amc-webapp/
// https://alvincabayan.github.io/amc-webapp/about
// https://alvincabayan.github.io/amc-webapp/contact
// I can see that the corresdponding js are loaded when I inspected the page but trying to show them by dragging them into the browser results in 404.

// Please help.Thanks.

// asked May 12, 2019 at 13: 42
// Alvin's user avatar
// Alvin

// 1 In your routes's path you have to put the name of the repo. As you can see, right now when you click on a Link the name of the repo disapear.

// So you can do for home page :

//     <Route exact path="amc-webapp/" component={Home} />

//     I had the same issue, posted on SO without answer.It might not be the best things to do but it works.

// What I did is: <Route path="/amc-webapp/about" component={About} /> and on navigator: <Link to="/amc-webapp/about">About</Link> and it works.Thanks for that.Another thing I found out is that when I click the about button the link: alvincabayan.github.io / amc - webapp / about will be displayed on URL.but when I go to that URL via URL directly, it gives me 404. Why is that ? –
// Alvin
//  May 12, 2019 at 23: 09
// I thinks it's the way github works. May be you have to access the repo before navigating. I'm glad that it works for you.Have fun. –
// Jonathan Aurry
//  May 13, 2019 at 16: 18



//
// 