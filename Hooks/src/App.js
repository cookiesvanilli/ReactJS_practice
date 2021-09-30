import PlaceholderPost from './PlaceholderPost';
import CommentHook from './CommentHook';
import CommentList from './Comment2Hook';
import Comment2 from './Comment2';
import './App.css';

function App() {
  return (
    <div className="App">
{/* <PlaceholderPost/> */}
<CommentHook/>
<CommentList/>
<Comment2/>
    </div>
  );
}

export default App;
