import Subsite from "../../components/page-templates/subsite";
import {InputField, PasswordField} from "../../components/Elements/inputs";

const ComponentWorkshop = () => {
    document.title="Component Workshop";
    return <Subsite>
        <div>
            <h2>Inputs</h2>
            <InputField placeholder="Text" />
            <PasswordField placeholder="Password" />
        </div>
    </Subsite>
};

export default ComponentWorkshop;
  