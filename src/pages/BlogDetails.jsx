import React, { Fragment, useEffect, useState } from 'react'
import { Typography } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import { Seo } from '../Seo';

import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";
const { Title } = Typography;

export const BlogDetails = () => {
    const params = useParams();
    // console.log(params)
    const location = useLocation();
    const currentUrl = window.location.href;
    const [details, setDetails] = useState();
    const fetchBlogs = () => {
        fetch(`https://dummyjson.com/posts/${params.id}`)
            .then((response) => response.json())
            .then((data) => setDetails(data));
    };
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <Fragment>
            {details && (
                <>
                    <Seo
                        title={`Blog Details Page | ${details.title}`}
                        description={details.body}
                        type="webapp"
                    />
                    <section style={{ padding: '25px' }}>
                        <Title level={4}>{details.title}</Title>
                        <p>{details.body}</p>
                        <FacebookShareButton
                            url={currentUrl}
                            quote={details.title}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={currentUrl}
                            title={details.title}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={currentUrl}
                            title={details.title}
                            className="Demo__some-network__share-button">
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                    </section>
                </>
            )}
        </Fragment>
    );

};