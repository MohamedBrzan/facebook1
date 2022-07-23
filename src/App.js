import './App.css';

function App() {
  document.querySelectorAll('ul li').forEach((ele) => {
    ele.onclick = function () {
      console.log('yeshg');
    };
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
