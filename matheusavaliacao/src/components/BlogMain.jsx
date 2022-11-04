
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';

export default function BlogMain() {
    const [posts, setPosts] = useState([]);
    // do fetch from a json file with dummy data
    // and set the state with the data
    function doAFetch() {
        fetch('')
            .then((response) => response.json())
            .then((json) => { console.log(json); return setPosts(json) });
    }

    useEffect(() => {
        doAFetch();
    }, [])

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                backgroundImage: '',
                '& .markdown': {
                    py: 3,
                },
            }}
        >

            <Divider />
            {posts.map((post) => (
                <Card className="markdown" key={post.id}>
                    {post.title}
                </Card>
            ))}
        </Grid>
    );
}

