import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import globalStyles from "../../../shared/styles/styles.module.css";

const MovieCardSkelton: React.FC = () => {
  return (
    <Card sx={{ height: "250px", minWidth: 150 }}>
      <Skeleton variant="rounded" height={175} width={150} />
      <CardContent>
        <Typography
          fontWeight="bold"
          className={globalStyles.textEllipsis}
          variant="body1"
        >
          <Skeleton variant="text" />
        </Typography>
        <Typography
          className={globalStyles.textEllipsis}
          variant="body2"
          color="text.secondary"
        >
          <Skeleton variant="text" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCardSkelton;
