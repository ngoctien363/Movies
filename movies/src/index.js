import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './childComp/style/show-loading.css'
// import styled from 'styled-components';
// import Spinners from './childComp/spinners/Spinners'

// const ModalContent = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: white;
//     opacity: 0.5;
//     padding: 1rem 1.5rem;
//     width: auto;
//     border-radius: 0.5rem;
// `;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  {/* <div id="Modal-show-loading-data-api-call" className="Modal-show-loading-data-modal">
  <ModalContent>
      <Spinners />
  </ModalContent>
</div> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
