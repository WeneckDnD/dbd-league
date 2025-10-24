import TierCard from "../components/TierCard";

const Stats = () => {
    return (
        <div style={{ zIndex: 20, position: 'relative', marginTop: '90px'}}>
            <h1 style={{ color: "white", marginTop: '0px'}}>Stats</h1>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'}}>
                <TierCard />
                <TierCard />
                <TierCard />
            </div>
        </div>
    );
};

export default Stats;
