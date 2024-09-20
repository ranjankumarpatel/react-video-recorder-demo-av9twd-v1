import React from 'react';
import { render } from 'react-dom';
import { MyVideoRecorder } from './video-recorder';
import MediaRecorder from './media-recorder';

const App = () => (
  <div>
    <MediaRecorder />
  </div>
);

render(<App />, document.getElementById('root'));
