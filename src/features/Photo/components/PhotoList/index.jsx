import React from 'react';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;
  return (
    <Row>
      {photoList.map((photo, index) => (
        <Col key={index} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
