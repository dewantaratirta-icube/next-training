import { useState } from "react";
import { Button, Typography, Container, Card } from "@material-ui/core";
import useStyle from "./styles";

const Page = () => {
    const [btnColor, setBtnColor] = useState('default');
    const classes = useStyle();

    const changeColor = () => {
        let colors = ['default', 'primary', 'secondary'];
        let rand = Math.floor(Math.random() * (colors.length));
        return colors[rand];
    }

    const clickHandler = async (event) => {
        event.preventDefault();
        
        let color = changeColor();
        while(btnColor == color){
            color = changeColor();
        }
        let result = await setBtnColor(color);
        return;
    }

    return (<Container className={classes.root}>
        <Typography variant="h5">Material UI</Typography>

        <Card className={classes.card}>
            <Typography variant="h4">Card</Typography>
        </Card>

        <Button variant="contained" className={classes.button} onClick={clickHandler} color={btnColor}>Default</Button>
    </Container >)
}

export default Page;