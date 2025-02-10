import 'bulma/css/bulma.css'
import './App.css';
import  Course  from './Course';
import Cpp from './images/c++.png'
import Java from './images/java.png'
import Python from './images/python.png'
import Keras from './images/keras.png'

function App() {
  return (
    <div className="App">
        <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <section>
          <div className='container'>
            <section className='section'>
            <div className='container'>
        <div className='columns'>
          <div className='column'>
          <Course 
            image = {Java}
            title="Java"
            description="Eiusmod duis aliqua non cupidatat nisi esse esse sunt non laboris duis. Ullamco reprehenderit tempor culpa
              laboris officia ipsum non magna nulla id eu. Pariatur amet dolore duis do sint."
              />
          </div>
          <div className='column'>
          <Course 
            image = {Cpp}
            title="C++"
            description="Eiusmod duis aliqua non cupidatat nisi esse esse sunt non laboris duis. Ullamco reprehenderit tempor culpa
              laboris officia ipsum non magna nulla id eu. Pariatur amet dolore duis do sint."
              />
          </div>
          <div className='column'>
          <Course 
            image = {Python}
            title="Python"
            description="Eiusmod duis aliqua non cupidatat nisi esse esse sunt non laboris duis. Ullamco reprehenderit tempor culpa
              laboris officia ipsum non magna nulla id eu. Pariatur amet dolore duis do sint."
            />
          </div>
          <div className='column'>
          <Course 
            image = {Keras}
            title="Keras"
            description="Eiusmod duis aliqua non cupidatat nisi esse esse sunt non laboris duis. Ullamco reprehenderit tempor culpa
              laboris officia ipsum non magna nulla id eu. Pariatur amet dolore duis do sint."
              />
          </div>
        </div>
      </div>
            </section>
          </div>
        </section>
    </div>
    
  );
}

export default App;
