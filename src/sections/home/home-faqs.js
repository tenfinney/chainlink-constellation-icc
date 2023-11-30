import { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
const faqs = [
{
question: 'What is a CLEC?',
answer: 'CLEC is an acronym for Continuing Legal Education Course. The are sometimes referred to as activities, programs, classes, seminars, and courses.'
},
{
question: 'Do you have a free CLEC demo to review the course before purchasing?',
answer: 'Yes. Visit LexAutomatico at https://lexautomatico.com to learn more.'
},
{
question: 'What can I do with LexAutomatico',
answer: 'It in an informational website that focuses on legaltech related subjects.'
},
{
question: 'How can I attend a CLEC?',
answer: 'Visit Web3LegalTools at https://web3legaltools.com to purchase a course or attend a CLE activity.'
},
{
question: 'What browsers does the CLEC support?',
answer: 'Firefox and Chrome or any other browser that supports Web3 or uses a plugin like Metamask to make the Web3 connection.'
},
{
question: 'For what kind of account is required for attending the CLEC?',
answer: 'All courses are open to the public. Licensed attorneys may receive CLE credit for some courses and activities that satisfy Continuing Legal Education requirements.'
}
];

const otherLinks = [
{
url: 'https://terms-conditions.freeweb3.com',
imageUrl: './assets/sqbacklinks/fav12/fav12-04.png',
imageAlt: 'terms-conditions',
imageTitle: 'terms-conditions.freeweb3',
},
];

    const Faq = (props) => {
const { answer, question } = props;
const [isExpanded, setIsExpanded] = useState(false);
return (
<Stack
onClick={() => setIsExpanded((prevState) => !prevState)}
spacing={2}
sx={{ cursor: 'pointer' }}
>
<Stack
alignItems="center"
direction="row"
justifyContent="space-between"
spacing={2}
>
<Typography variant="subtitle1">
{question}
</Typography>
<SvgIcon>
{isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
</SvgIcon>
</Stack>
<Collapse in={isExpanded}>
<Typography
color="text.secondary"
variant="body2"
>
{answer}
</Typography>
</Collapse>
</Stack>
);
};
Faq.propTypes = {
question: PropTypes.string.isRequired,
answer: PropTypes.string.isRequired
};


const renderOtherLink = (otherLink, index) => (
    <Grid item 
    key={index} 
    xs={12}
    sm={6} 
    md={3}>
    <a href={otherLink.url}
    target="_blank" 
    rel="noopener noreferrer"
    >
    <Paper 
    elevation={3} 
    style={{ textAlign: 'center' }}
    >
    <img
    src={otherLink.imageUrl}
    alt={otherLink.imageAlt || `Other Link ${index}`}
    title={otherLink.imageTitle || ''}
    style={{ maxWidth: '100%', height: 'auto' }}
    />
    <Typography
    variant="subtitle2" 
    gutterBottom
    >
    {otherLink.imageTitle || ''}
    </Typography>
    </Paper>
    </a>
    </Grid>
    );
  
  
export const HomeFaqs = () => {

return (

<Box sx={{ py: '120px' }}>

<Container maxWidth="lg">
<Grid
container
spacing={4}
>
{/* <Grid
xs={12}
md={6}
>
<Stack spacing={2}>
<Typography variant="h3">
FAQs
</Typography>
<Typography
color="text.secondary"
variant="subtitle2"
>
Frequently asked questions
</Typography>
</Stack>
</Grid> */}





{/* <Grid
xs={12}
md={6}
>
<Stack spacing={4}>
{faqs.map((faq, index) => (
<Faq
key={index}
{...faq} />
))}
</Stack>
</Grid> */}


</Grid>

<br/>
<br/>
<hr/>
<br/>

<Box>
<Typography
sx={{ mb:3 }}
align="left"
variant="h4"
>Active Terms and Conditions of Use
</Typography>

<Grid 
container 
spacing={2}
>


{otherLinks.map((otherLink, index) => renderOtherLink(otherLink, index))}

</Grid>
</Box>





</Container>
</Box>
);
};
