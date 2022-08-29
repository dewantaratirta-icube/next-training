import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import useStyle from "./styles";

const Page = () => {
    let classes = useStyle();

    return (<Container maxWidth="md" className={classes.root}>
        <Typography variant="h5">Material UI</Typography>

        <Card className={classes.card}>
            <Typography variant="h4">Card</Typography>
        </Card>
    </Container >)
}

export default Page;