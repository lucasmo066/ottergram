import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

const ottersArray = [
  { image: Barry, name: 'Barry' },
  { image: Robin, name: 'Robin' },
  { image: Maurice, name: 'Maurice' },
  { image: Lesley, name: 'Lesley' },
  { image: Barbara, name: 'Barbara' },
];

function App() {
 
  const [selectedPostName, setSelectedPostName] = useState('Barry');

  const selectedPost = ottersArray.find(otter => otter.name === selectedPostName);

  return (
     <div>
     <Header />
     <div className='app-content'>
       <ul className='post-list'>
       {ottersArray.map((otter) => (
          <Post
            key={otter.name}
            image={otter.image}
            name={otter.name}
            setSelectedPostName={setSelectedPostName}
          />
        ))}
      </ul>
      <SelectedItem
          image={selectedPost.image}
          name={selectedPost.name}
        />
      </div>
    </div>
  );
}
export default App;
