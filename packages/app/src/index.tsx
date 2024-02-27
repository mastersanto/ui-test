import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider  } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import localClient from './localClient';
import './index.css';
import Pages from './pages';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={localClient}>
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);

loadDevMessages();
loadErrorMessages();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
