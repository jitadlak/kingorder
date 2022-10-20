/**
 * @UserSaga will listen for the requests of user related stuffs, call a api using apiService and return back to corresponding reducer
 */

import {
  call, put
} from 'redux-saga/effects';
import * as API_SERVICE from '../../services/apiService/AxioUtils';
import * as commonActions from '../actions/commonActions';

// Define Worker Sagas

//*> ONBOARDING USER SAGA
export function* onOnBoardingUser(action) {
  let path = `/welcome/listOfSlider`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ OnBoarding User Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ OnBoarding User Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error.request._response);
      action.payload.failureCallBack(response.error_description);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> LOGIN USER SAGA
export function* onLoginUser(action) {
  let path = `/jwt/authenticate`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Login Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Login Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> SIGNUP USER SAGA
export function* onSignUpUser(action) {
  let path = `/user/saveUser`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ SignUp Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ SignUp Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> VERIFY OTP USER SAGA
export function* verifyOTP(action) {
  let path = `api/send_password?mobile=${action.payload.data.mobile}&otp=${action.payload.data.otp}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Verify OTP Password Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@  Verify OTP Password error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error.request._response);
      action.payload.failureCallBack(response.error_description);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> FORGOT PASSWORD USER SAGA
export function* forgotPassword(action) {
  let path = `api/send_otp_before_reset_password`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Forgot Password Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@  Forgot Password error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error.request._response);
      action.payload.failureCallBack(response.error_description);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> VENDOR REGISTRATION SAGA
export function* onVendorRegistartion(action) {
  let path = `/food/vendorRegistration`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Vendor Registration Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Vendor Registration Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> EMPLOYEE REGISTRATION SAGA
export function* onEmployeeRegistartion(action) {
  let path = `/employee/saveEmployee`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Employee Registration Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Employee Registration Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET PROMO TAB LIST SAGA
export function* getAllPromoTabList(action) {
  let path = `/offer/findAllPromos`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Promo Tab List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Promo Tab List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET Rebate TAB LIST SAGA
export function* getAllRebateTabList(action) {
  let path = `/offer/findAllRebate`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Rebate Tab List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Rebate Tab List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET FIND USER PROFILE SAGA
export function* getUserProfileData(action) {
  let path = `/user/findUserByemailId?emailId=${action.payload.data.emailId}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get User Profile Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get User Profile Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET ABOUT US SAGA
export function* getAboutUsData(action) {
  let path = `/welcome/findAboutUs`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get About Us Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get About Us Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET CONTACT US SAGA
export function* getContactUsData(action) {
  let path = `/welcome/findAllContactUs`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Contact Us Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Contact Us Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET PRIVACY POLICY SAGA
export function* getPolicyData(action) {
  let path = `/welcome/findPolicy`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Policy Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Policy Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> YOU FEEDABCK SAGA
export function* postFeedback(action) {
  let path = `/user/updateProfileImage`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Upload Profile Image Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Upload Profile Image Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> UPLOAD PROFILE IMAGE SAGA
export function* uploadProfileImage(action) {
  let path = `/user/updateProfileImage`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPutRequest, path, action.payload.data);
    console.log('@@@ Upload Profile Image Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Upload Profile Image Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}