import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Avatar, Button, Card, Col, List, Row, Space } from 'antd';
import { Seo } from '../Seo';

const { Meta } = Card;
export const BlogLists = () => {
    const [blogs, setBlogs] = useState([]);
    const [details, setDetails] = useState();
    function fetchBlogs() {
        fetch("https://dummyjson.com/posts?limit=10")
            .then(response => response.json())
            .then(data => setBlogs(data.posts));
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleClick = (item) => {
        setDetails(item);
    }
    return (
        <Fragment>
            <Seo
                title="Blog Lists Page | React App"
                description="List of all blogs"
                type="webapp"
            />
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <List
                        itemLayout="vertical"
                        size="small"
                        dataSource={blogs}
                        renderItem={(item, index) => (
                            <><List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={item.title}
                                    description={item.body} />
                                {/* {item.body} */}
                                <Button type="primary" onClick={() => handleClick(item)}>Quick View</Button>

                                <div style={{ textAlign: 'right' }}>
                                    <a href={`details/${item.id}`}>Read More ...</a>
                                </div>
                            </List.Item>
                            </>
                        )} />
                </Col>
                <Col span={12}>
                    <Card
                        style={{ width: '100%' }}
                    >
                        <Meta
                            title={details?.title}
                            description={details?.body} />
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
