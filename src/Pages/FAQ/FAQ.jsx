import { useState } from 'react'
import styles from './FAQ.module.css'
import "./FAQ.css";
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { useContext } from 'react'
import ScreenContext from '../../context/ScreenContext'


const FAQ = () => {
    const { medium } = useContext(ScreenContext)

    const [faqs, setfaqs] = useState([
        {
            question: 'What are the objectives of this Website?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 0
        },
        {
            question: 'Get things done with this beautiful app?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 1
        },
        {
            question: 'What is the best features and services we deiver?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 2
        },
        {
            question: 'Starting with Aviki is easier than anything?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 3
        },
        {
            question: 'Why this Prevention important to me?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 4,
        },
        {
            question: '20k+ Customers Love Aviki App?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 5

        },
        {
            question: 'How may I take part in and purchase this?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 6
        },
        {
            question: 'Whatever Work You Do You Can Do It In Aviki?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 7
        },
        {
            question: 'What kinds of security policy do you maintain?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 8
        },
        {
            question: 'Download our guide manage your daily works?',
            answer: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.',
            open: false,
            id: 9
        }
    ]);
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }
    const faq1 = faqs.filter(faq => (
        faq.id < 5
    ))
    const faq2 = faqs.filter(faq => (
        faq.id > 4
    ))

    return (
        <Box py={8} id="FAQ" className={styles.container}>
            <Container maxWidth="lg">
                <Box mb={5}>
                    <Box mb={2}>
                        <Typography variant="h4" className={cx(fontWeight.bold, "heading")}>
                            Friquently Ask Questions
                        </Typography>
                    </Box>
                    <Box maxWidth="70%" mx="auto">
                        <Typography variant="subtitle1" className="title">
                            Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.
                        </Typography>
                    </Box>
                </Box>
                <Box className="bg">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={6}>
                            {faq1.map(faq => (
                                <Box my={4} key={faq.id} maxWidth={medium ? "100%" : "80%"}>
                                    <button
                                        className={cx("faq__toggle", {
                                            "faq__toggle--active": faq.open
                                        })}
                                        onClick={() => toggleFAQ(faq.id)}
                                        style={{ backgroundColor: 'transparent', outline: 'none' }}
                                    >
                                        <Box>
                                            <InfoRoundedIcon
                                                className="icon"
                                                style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)", fontSize: 42 }}
                                            />
                                        </Box>
                                        <Typography
                                            className={cx("faq__toggle-text", fontWeight.bold)}
                                            variant="body1"
                                            component="p"
                                            style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)" }} >
                                            {faq.question}
                                        </Typography>
                                    </button>
                                    <Collapse
                                        isOpen={faq.open}
                                        className={
                                            "faq__collapse faq__collapse--gradient " +
                                            (faq.open ? "faq__collapse--active" : "")
                                        }
                                    >
                                        <Box >
                                            <Typography
                                                className={cx("faq__content", fontWeight.regular)}
                                                variant="body2"
                                                component="p">
                                                {faq.answer}
                                            </Typography>
                                        </Box>
                                    </Collapse>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            {faq2.map(faq => (
                                <Box mt={medium ? 0 : 4} mb={4} key={faq.id} maxWidth={medium ? "100%" : "80%"}>
                                    <button
                                        className={cx("faq__toggle", {
                                            "faq__toggle--active": faq.open
                                        })}
                                        onClick={() => toggleFAQ(faq.id)}
                                        style={{ backgroundColor: 'transparent', outline: 'none' }}
                                    >
                                        <Box>
                                            <InfoRoundedIcon
                                                className="icon"
                                                style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)", fontSize: 42 }}
                                            />
                                        </Box>
                                        <Typography
                                            className={cx("faq__toggle-text", fontWeight.bold)}
                                            variant="body1" component="p"
                                            style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)" }} >
                                            {faq.question}
                                        </Typography>
                                    </button>
                                    <Collapse
                                        isOpen={faq.open}
                                        className={
                                            "faq__collapse faq__collapse--gradient " +
                                            (faq.open ? "faq__collapse--active" : "")
                                        }
                                    >
                                        <Box >
                                            <Typography
                                                className={cx("faq__content", fontWeight.regular)}
                                                variant="body2"
                                                component="p">
                                                {faq.answer}
                                            </Typography>
                                        </Box>
                                    </Collapse>
                                </Box>
                                // </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default FAQ;
