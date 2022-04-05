import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
    <Box
        component="span"
        sx={{
            display: "inline-block",
            mx: "2px",
            transform: "scale(0.8)",
        }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <div className="flex flex-col w-[250px] hover:bg-[green] ">
            <CardContent className="flex flex-col ">
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                    className="flex justify-center"
                >
                    Word of the Day
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    className="flex justify-center"
                >
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    className="flex justify-center"
                >
                    adjective
                </Typography>
                <Typography variant="body2" className="flex justify-center">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions className="flex justify-center">
                <Button size="small" className="hover:text-white">
                    Learn More
                </Button>
            </CardActions>
        </div>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <div className="mx-auto w-[250px] my-8 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] ">
            <Box className="flex justify-center items-center">
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
}
