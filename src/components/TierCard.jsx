import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import styles from "./TierCard.module.css";

const TierCard = ({
  userName = "",
  name = "Role",
  imageUrl = "https://images.gamewatcherstatic.com/image/file/4/ab/102064/dead-by-daylight-wallpaper-1.jpg",
  tier = "Tier S",
  rating = 5,
  onClick = () => alert("I'm coming for you..."),
}) => {
  return (
    <Card className={styles.tierCard} onClick={onClick}>
      <CardHeader className={styles.header}>
        <CardTitle className={styles.title}>{userName}</CardTitle>
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
