import "./FirstComponent.css";

function FirstComponent() {
  const gameDateRelease = new Date(2017, 2, 22);
  const BetaGameDateRelease = new Date(2014, 2, 21);
  const gameRating = "Meh";
  const gamePrice = 2222.22;
  return (
    <div className="main_div">
      <h1 className="lol_player">
        hahaaaa this dude plays lol he muse be depressed
      </h1>
      <h1 className="valorant_player">
        this dude plays valornat he must have alot of friends
      </h1>
      <h1 className="otherStuff">
        this dude plays a differnet game we don't care
      </h1>
      <h2>{gameDateRelease.toISOString()}</h2>
      <h2>{gameRating}</h2>
      <h2>{gamePrice}</h2>
    </div>
  );
}

export default FirstComponent;
