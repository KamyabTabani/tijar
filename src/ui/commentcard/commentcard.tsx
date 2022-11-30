import "./commentcard.scss";

export interface ICommentCard {
    img: string
    name: string
    time: string
    comment: string
}

const CommentCard = ({img, name, time, comment}: ICommentCard) => {
    return (
        <div className="Comment-Card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-end align-items-center">
                    <img src={img} alt="photo" className="img-fluid Comment-Avatar"/>
                    <div className="pe-3" style={{transform: "translateY(10px)"}}>
                        <h5>{name}</h5>
                        <p>{time}</p>
                    </div>
                </div>
                <img src={require("../../assets/images/Comment.png")} alt="" className="img-fluid Comment-Img"/>
            </div>
            <p className="pt-4">{comment}</p>
        </div>
    );
}

export default CommentCard;