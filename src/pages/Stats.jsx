import TierCard from "../components/TierCard";
import Nurse from '../img/Nurse_AHL_2025_logo.png';
import General from '../img/General_AHL_2025.png';
import Tier2 from '../img/Tier_2_AHL_2025.png';
import Spirit from '../img/Spirit_AHL_2025_logo_2.png';
import Krasue from '../img/Krasue_AHL_2025_logo.png';
import Tier3 from '../img/Tier_3_AHL_2025.png';
import Singu from '../img/Singularity_AHL_2025_logo.png';


const Stats = () => {
    // Array of tier card data with different attributes
    const tierCardsData = [
        {
            name: "General",
            imageUrl: General,
            tier: "General",
            rating: 0,
            onClick: () => alert("General balancing")
        },
        {
            name: "The Nurse",
            imageUrl: Nurse,
            tier: "Tier 1",
            rating: 5,
            onClick: () => alert("The Nurse Balacing")
        },
        {
            name: "The Spirit",
            imageUrl: Spirit,
            tier: "Tier 1",
            rating: 5,
            onClick: () => alert("The Hilbilly Balancing")
        },
        {
            name: "Tier 2",
            imageUrl: Tier2,
            tier: "Tier 2",
            rating: 4,
            onClick: () => alert("The Blight Balancing")
        },
        {
            name: "The Krasue",
            imageUrl: Krasue,
            tier: "Tier 2",
            rating: 4,
            onClick: () => alert("The Ghoul Balancing")
        },
        {
            name: "The Singularity",
            imageUrl: Singu,
            tier: "Tier 2",
            rating: 4,
            onClick: () => alert("The Ghoul Balancing")
        },
        {
            name: "Tier 3",
            imageUrl: Tier3,
            tier: "Tier 3",
            rating: 3,
            onClick: () => alert("The Ghoul Balancing")
        }
    ];

    return (
        <div style={{ zIndex: 20, position: 'relative', marginTop: '90px'}}>
            <h1 style={{ color: "white", marginTop: '0px'}}>Stats</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', gap: '25px', maxWidth: '100%', margin: '30px'}}>
                {tierCardsData.map((cardData, index) => (
                    <TierCard 
                        key={index}
                        name={cardData.name}
                        imageUrl={cardData.imageUrl}
                        tier={cardData.tier}
                        rating={cardData.rating}
                        onClick={cardData.onClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stats;
