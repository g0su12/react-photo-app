import React from 'react';
import { Button } from 'reactstrap';
import './PhotoCard.scss';

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;
  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
  };

  return (
    <div className="photo">
      <img
        className="img-fluid"
        src={`https://robohash.org/bgset_bg1/set_set${photo.imageURL.setID}/${photo.imageURL.randomID}?size=300x300`}
        alt={photo.title}
      />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
