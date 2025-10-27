import TierCard from "../components/TierCard";

const Stats = () => {
    return (
        <div style={{ zIndex: 20, position: 'relative', marginTop: '90px'}}>
            <h1 style={{ color: "white", marginTop: '0px'}}>Stats</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', gap: '25px', maxWidth: '100%', margin: '30px'}}>
                {[...Array(5)].map((_, index) => (<TierCard key={index}/>))}
            </div>
        </div>
    );
};

export default Stats;
