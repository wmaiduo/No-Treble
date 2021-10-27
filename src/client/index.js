import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrentPlayListProvider from "./providers/currentPlaylistProvider";

ReactDOM.render(<CurrentPlayListProvider><App /></CurrentPlayListProvider>, document.getElementById('root'));
