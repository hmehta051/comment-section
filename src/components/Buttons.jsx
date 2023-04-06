import replySVG from "../images/icon-reply.svg";
import editSVG from "../images/icon-edit.svg";
import deleteSVG from "../images/icon-delete.svg";

export default function Buttons(props) {
  return (
    <div className="comment-buttons">
      {props.isYou ? (
        <div className="you-button">
          <div
            className="comment-delete"
            onClick={() => props.deleteComment(props.data.id)}
          >
            <img src={deleteSVG} alt="delete" />
            <span>Delete</span>
          </div>
          <div onClick={props.toggleEdit} className="edit-button">
            <img src={editSVG} alt="edit" />
            <span>Edit</span>
          </div>
        </div>
      ) : (
        <div className="blue-button" onClick={props.openCommentEditor}>
          <img src={replySVG} alt="reply" />
          <span>Reply</span>
        </div>
      )}
    </div>
  );
}
