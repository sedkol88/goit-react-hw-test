// import MainMenu from './components/MainMenu/MainMenu';
import Button from './components/Button/Button';

// import menuItems from './data/button.json';

function App() {
  return (
    <div className="App">
      {/* <MainMenu items={menuItems} /> */}
      {/* 
      const obj = new MainMenu({items: menuItems});
      obj.render();
      */}
      <Button text="click me" type="button" />
    </div>
  );
}

export default App;
