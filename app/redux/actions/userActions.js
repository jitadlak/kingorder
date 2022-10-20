import * as USER_CONST from "../../utils/Constants";

export const onOnBoardingUser = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.ONBOARDING,
        payload: {
            successCallBack, 
            failureCallBack
        }
    }
}

export const onLoginUser = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.LOGIN_USER,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const onSignUpUser = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.SIGNUP_USER,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const forgotPassword = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.FORGOT_PASSWORD,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const verifyOTP = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.FORGOT_PASSWORD_OTP,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const onVendorRegistartion = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.VENDOR_REDISTARTION,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const onEmployeeRegistartion = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.EMPLOYEE_REGISTARTION,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const getAllPromoTabList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_PROMO_TAB_LIST,
        payload: {
            successCallBack, 
            failureCallBack
        }
    }
}

export const getAllRebateTabList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_REBATE_TAB_LIST,
        payload: {
            successCallBack, 
            failureCallBack
        }
    }
}

export const getUserProfileData = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_USER_PROFILE_DATA,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const getAboutUsData = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ABOUT_US,
        payload: {
            successCallBack, 
            failureCallBack
        }
    }
}

export const getContactUsData = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_CONTACT_US,
        payload: {
            successCallBack, 
            failureCallBack
        }
    }
}

export const getPolicyData = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_POLICY,
        payload: {
            successCallBack, 
            failureCallBack
        }
    }
}

export const postFeedback = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.POST_FEEDBACK,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const uploadProfileImage = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.UPLOAD_USER_PROFILE_IMAGE,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}