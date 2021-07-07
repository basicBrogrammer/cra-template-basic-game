import "./App.css";
import GameContext, { useGameState } from "./GameContext";
import { initialState, reducer } from "./state";

const Header = () => {
  return (
    <header className='header'>
      <p>React Game</p>
      <p>Score: (TBD)</p>
      <button>Play</button>
    </header>
  );
};

const GameOverBanner = () => {
  const { status } = useGameState();

  return status === "ENDED" ? (
    <div className='game-over'>
      <p>GAME OVER</p>
    </div>
  ) : null;
};

function App() {
  return (
    <GameContext initialState={initialState} reducer={reducer}>
      <Header />
      <main className='main'>
        <div className='board'>
          <GameOverBanner />
          <p>Hello World</p>
        </div>
      </main>
    </GameContext>
  );
}

export default App;
