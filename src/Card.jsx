import './styleCard.css';

const n = 1;

export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <span className="badge">TOP {n}</span>
        
        <h2 className="title">TEAM #{n}</h2>
        <p className="description">
          Invictus is currently the most anticipated and skilled team in the World
        </p>
        
        <div className="footer">
          <div className="tags">
            <span className="tag tag-live">INV</span>
            <span className="tag">🏆 60x</span>
          </div>
          
          <button className="btn">About</button>
        </div>
      </div>
    </div>
  );
}