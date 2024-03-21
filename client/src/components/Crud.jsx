import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";

const CenteredContainer = styled(CardMedia)`
  filter: drop-shadow(0 0 20px #241468) drop-shadow(0 0 20px #000);
  animation: glow 2s alternate infinite;

  @keyframes glow {
    0% {
      filter: drop-shadow(0 0 20px #241468) drop-shadow(0 0 20px #000);
    }
    100% {
      filter: drop-shadow(0 0 30px #241468) drop-shadow(0 0 30px #000);
    }
  }
`;

export default function ActionAreaCard() {
  return (
    <CenteredContainer>
      <Card
        sx={{
          maxWidth: 400,
          margin: "auto",
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          padding: 5,
          flexDirection: "column",
          border: "2px solid #000",
          borderRadius: 10,
          transformStyle: "preserve-3d",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="crud.icon.png"
            alt="CRUD-APP"
          />

          <CardContent>
            <Typography sx={{fontStyle:'italic',fontSize:30}} gutterBottom variant="h5" component="div">
              CRUD-OPERATION
            </Typography>
            <Typography  sx={{fontSize:17,fontStyle:'italic'}}variant="body2" color="text.primary">
              CRUD is the acronym for CREATE, READ, UPDATE, and DELETE. These
              terms describe the four essential operations for creating and
              managing persistent data elements, mainly in relational and NoSQL
              databases.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CenteredContainer>
  );
}
