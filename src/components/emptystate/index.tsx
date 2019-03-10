import React from "react";

interface Props {
  createNewCard: () => void;
}

const EmptyState = ({ createNewCard }: Props) => {
  return (
    <div className="empty">
      <div className="empty-icon">
        <i className="icon icon-people" />
      </div>
      <p className="empty-title h5">No cards yet</p>
      <p className="empty-subtitle">Add a new Card to get started</p>
      <div className="empty-action">
        <button onClick={createNewCard} className="btn btn-primary">
          Add card
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
