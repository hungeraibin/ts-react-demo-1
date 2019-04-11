import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button'

function onClick(e: React.MouseEvent<HTMLDivElement>) {
  console.log(e.currentTarget.style.width)
}

ReactDOM.render(
  <div>
    <Button onClick={onClick}>你好</Button>
  </div>,
  document.getElementById('root')
);

