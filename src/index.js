import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Single from './components/single';
import { render } from 'react-dom';



// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, 
//     document.getElementById('root')
// )

ReactDOM.render(
        <App />,
    document.getElementById('root')
)

// const Root = function() {
//     return (
//       <BrowserRouter>
//         <div>
//         {/* <Link className='results-url' to={`/brewery/${id}/${slug(name)}`}>
//           <h5 className='results-url'>{name}</h5>
//         </Link> */}
//           <Route path="/beer/:beerId/:beerSlug" component={Single} />
//         </div>
//       </BrowserRouter>
//     );
//   };
  
//   render(<App/>, document.querySelector('#root'));