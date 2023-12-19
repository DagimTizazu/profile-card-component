import image from './assets/image-victor.jpg';
import Card from './Card.jsx';
import './app.css';

function App() { 
 
  return (
      <div className='container'>
        
        <Card
          image={image}
          name='Victor Crest'
          age={26}
          location='London'
          followers='80K'
          likes='803K'
          photos='1.4K'
        />
        
      </div>
  )
}

export default App
