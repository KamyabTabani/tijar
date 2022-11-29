import "./propertycard.scss";

export interface IPropertyCard {
    header:string
    body:string
    footer:string
}

const PropertyCard = ({header,body,footer}:IPropertyCard) => {
    return(
        <div className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="Property-Card d-flex flex-column justify-content-center align-items-center">
                <h1 className="red-text">{header}</h1>
                <h3 className="mb-4">{body}</h3>
                <p>{footer}</p>
            </div>
        </div>
    );
}

export default PropertyCard;