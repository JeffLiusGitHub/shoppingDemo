import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from '@mui/material/Grid';

export default function SkeletonGrid({loading}) {
  return (
    <Grid container wrap="nowrap">
    { Array.from(new Array(3)).map(  <Skeleton variant="rectangular" width={210} height={118}></Skeleton>)}
      
    </Grid>
  );
}
