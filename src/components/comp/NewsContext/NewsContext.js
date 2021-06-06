import React from 'react'
import { Card } from 'react-bootstrap';
import '../../comp/NewsContext/NewsContext.css';
function NewsContext(props) {

    if (props.news !== undefined && props.news !== null) {
        if(props.news.articles!==undefined)
        var shownews = props.news.articles.map((articles) =>  <div >
         <Card className="col-sm-12 my-3 news-card">
            {/* <Card.Img variant="top" src={articles.urltoImage} /> */}
            <Card.Body className='News'>
                <Card.Title>{articles.title}</Card.Title>
                <Card.Text>{articles.description}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={articles.url} target="_blank">Read More</Card.Link>
            </Card.Body>
        </Card>
        </div>
        );

    }
    return (
        <div className='NewsCards'>{shownews}</div>
    );

}

export default NewsContext