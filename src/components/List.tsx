import { Grid } from "@mui/material"
import CardItem from "./CardItem"

interface Props {
  loading: boolean,
  data: any
}

const List = (props: Props) => {
  const { loading } = props
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      {loading ?
        <div>
          loading...
        </div> :
        <Grid container spacing={2}>
          {arr.map(el => <CardItem key={el} />)}
        </Grid>
      }
    </>
  )
}

export default List
