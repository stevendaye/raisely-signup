import axios from "axios";

const SIGNUP_URL = "https://api.raisely.com/v3/signup";
const CHECK_URL = "https://api.raisely.com/v3/check-user";
const CAMPAIGN_UUID = "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a";

const signUpUser = async payload => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({
        campaignUuid: CAMPAIGN_UUID,
        data: {
            ...payload
        }
    });

    return await axios.post(SIGNUP_URL, body, config);
};

const checkUser = async payload => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({
        campaignUuid: CAMPAIGN_UUID,
        data: {
            email: payload
        }
    });

    return await axios.post(CHECK_URL, body, config);
}

export default signUpUser;
export { checkUser };
