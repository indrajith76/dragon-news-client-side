import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url, rating, total_view } = news;
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            className="me-3"
            roundedCircle
            style={{ height: "60px" }}
            src={author.img}
          ></Image>
          <div>
            <p className="mb-0">{author.name}</p>
            <p className="mb-0">{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url}></Card.Img>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 250) + "..."}{" "}
            <Link to={`/news/${_id}`}>Read More</Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
