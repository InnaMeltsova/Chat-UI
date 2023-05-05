import { BrowserRouter as Router} from 'react-router-dom';
import { Chat } from './features/chat';

function App() {
  return (
    <Router>
      <Chat/>
    </Router>
  );
}

export default App;
