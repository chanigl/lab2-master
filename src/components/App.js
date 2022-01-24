import {Welcome, firstName} from './Welcome'
import '../handlers/font-handler.js'


let posts = [
  {
    id: '1',
    title: 'post1'
  },
  {
    id: '3',
    title: 'post3'
  },
  {
    id: '10',
    title: 'post10'
  }
]


const getName = (a,b) => {
  if (a && b) {
      return `${a}  ${b}`;
  }
  return 'Foreign' 
}

//const color = 'classRedExemple';
const color = 'classBlueExemple';

const familyName = 'Glikson';

function App() {
  return (
    <div className={color}>
      {firstName == "Yossef"  ? <Welcome /*name={getName(firstName, familyName)} */dodo='by'/> : 'By'}
      {posts.map((post, index) => 
         <Welcome key={index} name={post.id} dodo={index} />
                )
      }
      {posts.map((post, index) =>          
         getName(firstName, familyName)
                )
      }
    </div>
  );
}

export default App;
