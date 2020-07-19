import React from 'react';
import Button from '@material-ui/core/Button';
import './App.scss';
function App() {
  return (
    <div className="App">
      <div className={'Bac_Wrapper'}>
        <div className={'B_Wrapper'}>
          <h1 className="animate__animated animate__backInDown">Font End Developer</h1>
          <Button variant="contained" color="primary" className={'animate__animated animate__heartBeat Hire__Button'}>
            Hire
          </Button>
        </div>
      </div>
      <div className={'TextSection'}>
            <h4> I'm Ayar Hlaine</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illum repellendus inventore, temporibus delectus, maxime molestiae excepturi nostrum non doloribus beatae amet sequi aspernatur! Fugit, atque. Minus quo obcaecati asperiores.</p>
      </div>
    </div>
  );
}

export default App;
