import "./membercard.scss";

export interface IMemberCard {
    img:string
    name:string
    role:string
}

const MemberCard = ({img,name,role}:IMemberCard) => {
    return(
        <div className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="Member-Card d-flex flex-column justify-content-center align-items-center">
                <img src={img} alt="photo" className="img-fluid Member-Img"/>
                <div className="Member-Info">
                    <h4>{name}</h4>
                    <h6>{role}</h6>
                </div>
            </div>
        </div>
    );
}

export default MemberCard;