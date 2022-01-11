import { Card, CardMedia, Grid, Typography } from "@mui/material"
import { SIZE } from "../theme"

const CardItem = () => {
  return (
    <Grid item xs={6} md={4} lg={2} >
      <Card sx={{ maxWidth: SIZE.card }}>
        <CardMedia
          component='img'
          height={SIZE.image}
          image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
          alt={'character'}
        />
        <Typography variant="h6" component="div" align="center" sx={{ paddingY: 1, paddingX: 0.5 }}>
          Lizard
        </Typography>
      </Card>
    </Grid>
  )
}

export default CardItem
