import "./backdrop.scss";

interface IBackDrop {
    show:boolean;
    close: () => void
}

const BackDrop = ({show,close}:IBackDrop) => {
    return(
        show ? <div onClick={close} className="BackDrop"></div> : null
    );
}

export default BackDrop;