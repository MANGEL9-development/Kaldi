import Subsite from "../../components/page-templates/subsite";
import {AccountForm} from "../../components/pieces/sections";
import {InputField} from "../../components/Elements/inputs";

const SignIn = () => {
    return <Subsite>
        <AccountForm title="Sign In">
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Password" />
        </AccountForm>
    </Subsite>
};

export default SignIn;
