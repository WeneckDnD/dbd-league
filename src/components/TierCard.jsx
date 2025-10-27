import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./Card";
import styles from "./TierCard.module.css";
import Nurse from '../img/Nurse_AHL_2025_logo.png';

const TierCard = ({
  name = "Nurse",
  imageUrl = Nurse,
  tier = "Tier S",
  rating = 5,
  onClick = () => alert("I'm coming for you..."),
}) => {
  return (
    <Card className={styles.tierCard} onClick={onClick}>
      <CardHeader className={styles.header}>
        <CardDescription className={styles.description}>
          {name}
        </CardDescription>
      </CardHeader>
      <CardContent className={styles.content}>
        <img src={imageUrl} alt={name} />
      </CardContent>
      <CardFooter className={styles.footer}>
        <span className={styles.tierBadge}>{tier}</span>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={styles.star}>
              {i < rating ? "★" : "☆"}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TierCard;
