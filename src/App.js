import react from 'react';
import './App.css';

function App() {
  return(
    <div className='container'>
        <h1>Hello world!</h1>
        <ul>
            <li>
                <button>
                    <span role='img' aria-label='grinning face' id='grinning face'>😀</span>
                </button>
            </li>
            <li>
                <button>
                    <span role='img' aria-label='party popper' id='party popper'>🎉</span>
                </button>
            </li>
            <li>
                <button>
                    <span role='img' aria-label='women dancing' id='women dancing'>💃</span>
                </button>
            </li>
        </ul>
    </div>

  )
}

export default App;
