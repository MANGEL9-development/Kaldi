import {Link} from "react-router-dom";

export function HomescreenSubsection(props){
    return(
        <div className="homescreen-subsection">
            <h2 className="homescreen-subsection-title">{props.title}</h2>
            <div className="homescreen-subsection-options-container">
                {props.children}
            </div>
        </div>
    );
}

export function HomescreenSubsectionOption(props){
    return(
        <Link to={"/menu#"+props.title} className="homescreen-subsection-option">
            <div className="homescreen-subsection-option-image">
                <img src={props.image} alt={props.title} />
            </div>
            <h3 className="homescreen-subsection-option-title">{props.title}</h3>
        </Link>
    )
}

export function AccountForm({title,children}){ // TODO: add an onSubmit property
    return(
        <section className="accountform-container">
            <h2 className="accountform-title">{title}</h2>
            <form className="accountform">
                {children}
            </form>
        </section>
    );
}
