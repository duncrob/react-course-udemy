import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';
import Button from "./Button";

function App() {
  return <div>
    <div>
      <Button secondary rounded outline>
        <GoBell />
        Click me!
      </Button>
    </div>
    <div>
      <Button danger outline>
        <GoDownload />
        Buy now!
      </Button>
    </div>
    <div>
      <Button warning>
        <GoDatabase />
        See deal!
      </Button>
    </div>
    <div>
      <Button secondary outline>Hide ads!</Button>
    </div>
    <div>
      <Button primary rounded>Something!</Button>
    </div>
  </div>;
}

export default App;