import Subsite from "../../components/page-templates/subsite";
import {InputField, PasswordField, EmailField} from "../../components/Elements/inputs";

const ComponentWorkshop = () => {
    document.title="Component Workshop";
    return <Subsite>
        <div>
            <h2>Inputs</h2>
            <InputField placeholder="Text" />
            <EmailField placeholder="Email" errorMessage="Please enter a valid email address" />
            <PasswordField placeholder="Password" />
        </div>
    </Subsite>
};

export default ComponentWorkshop;
  