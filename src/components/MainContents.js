import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// MainPage(메인 화면)에서 두 커뮤니티(foodBoard, tourBoard)의 최신 글 3개를 보여주는 컴포넌트

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));

const cards = [1, 2, 3];

export default function MainContents({ type }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    {type === "food" ? (
                                        <div style={{}}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Planter - Busan Gwang'alli
                                                </Typography>
                                                <Typography>
                                                    This shop is all delicious, especially seafood pasta~
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    ) : (
                                            <>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image="https://source.unsplash.com/random+1"
                                                    title="Image title"
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Thebay101, Busan Haeundae
                                                    </Typography>
                                                    <Typography>
                                                        It's really gorgeous like the future city here
                                                    </Typography>
                                                </CardContent>
                                            </>
                                        )
                                    }
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
