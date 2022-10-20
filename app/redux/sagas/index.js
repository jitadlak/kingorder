import {
    takeEvery,
    takeLatest
  } from 'redux-saga/effects';

import * as CONST from '../../utils/Constants'
import { addCartItem, getAllFoodCategoryList, getAllFoodList, getAllFoodMenuList, getAllGadgetCategoryList, getAllGadgetList, getAllGadgetMenuList, getAllMartCategoryList, getAllServiceCategoryList, getAllServiceSubCategoryList, getAllServiceSubCategoryListByName, getAllShopCategoryList, getAllShopList, getAllShopMenuList, getBookingOrderByDate, getCartByEmail, getFoodByCategoryList, getFoodSearchList, getGadgetByCategoryList, getMartCategoryByNameList, getShopByCategoryList, getTrendingFoodList, getTrendingShopList, removeCartItem, removeCartItemById, saveServiceOrder, } from './homeSaga';
import { forgotPassword, getAboutUsData, getAllPromoTabList, getAllRebateTabList, getContactUsData, getPolicyData, getUserProfileData, getUserProfileList, onEmployeeRegistartion, onLoginUser, onOnBoardingUser, onSignUpUser, onVendorRegistartion, postFeedback, uploadProfileImage, verifyOTP } from './userSaga';
  
  const watchLogin = function* watchLogin() {
    //* USER_CALLS *//
    yield takeEvery(CONST.LOGIN_USER, onLoginUser);
    yield takeEvery(CONST.SIGNUP_USER, onSignUpUser);
    yield takeEvery(CONST.ONBOARDING, onOnBoardingUser);
    yield takeEvery(CONST.FORGOT_PASSWORD, forgotPassword);
    yield takeEvery(CONST.FORGOT_PASSWORD_OTP, verifyOTP);
    yield takeEvery(CONST.GET_ALL_FOOD_LIST, getAllFoodList);
    yield takeEvery(CONST.GET_ALL_FOOD_CATEGORY_LIST, getAllFoodCategoryList);
    yield takeEvery(CONST.GET_ALL_FOOD_MENU_LIST, getAllFoodMenuList);
    yield takeEvery(CONST.GET_FOOD_BY_CATEGORY_LIST, getFoodByCategoryList);
    yield takeEvery(CONST.GET_TRENDING_FOOD_LIST, getTrendingFoodList);
    yield takeEvery(CONST.GET_TRENDING_SHOP_LIST, getTrendingShopList);
    yield takeEvery(CONST.GET_ALL_SHOP_LIST, getAllShopList);
    yield takeEvery(CONST.GET_ALL_SHOP_CATEGORY_LIST, getAllShopCategoryList);
    yield takeEvery(CONST.GET_ALL_SHOP_MENU_LIST, getAllShopMenuList);
    yield takeEvery(CONST.GET_SHOP_BY_CATEGORY_LIST, getShopByCategoryList);
    yield takeEvery(CONST.GET_ALL_GADGET_LIST, getAllGadgetList);
    yield takeEvery(CONST.GET_ALL_GADGET_CATEGORY_LIST, getAllGadgetCategoryList);
    yield takeEvery(CONST.GET_ALL_GADGET_MENU_LIST, getAllGadgetMenuList);
    yield takeEvery(CONST.GET_GADGET_BY_CATEGORY_LIST, getGadgetByCategoryList);
    yield takeEvery(CONST.GET_ALL_MART_CATEGORY_LIST, getAllMartCategoryList);
    yield takeEvery(CONST.GET_MART_CATEGORY_BY_NAME_LIST, getMartCategoryByNameList);
    yield takeEvery(CONST.VENDOR_REDISTARTION, onVendorRegistartion);
    yield takeEvery(CONST.EMPLOYEE_REGISTARTION, onEmployeeRegistartion);
    yield takeEvery(CONST.GET_CART_BY_EMAIL, getCartByEmail);
    yield takeEvery(CONST.ADD_CART_ITEM, addCartItem);
    yield takeEvery(CONST.REMOVE_CART_ITEM, removeCartItem);
    yield takeEvery(CONST.REMOVE_CART_ITEM_BY_ID, removeCartItemById);
    yield takeEvery(CONST.GET_FOOD_SEARCH_LIST, getFoodSearchList);
    yield takeEvery(CONST.GET_ALL_PROMO_TAB_LIST, getAllPromoTabList);
    yield takeEvery(CONST.GET_ALL_REBATE_TAB_LIST, getAllRebateTabList);
    yield takeEvery(CONST.GET_USER_PROFILE_DATA, getUserProfileData);
    yield takeEvery(CONST.UPLOAD_USER_PROFILE_IMAGE, uploadProfileImage);
    yield takeEvery(CONST.GET_ALL_SERVICE_CATEGORY_LIST, getAllServiceCategoryList);
    yield takeEvery(CONST.GET_ALL_SERVICE_SUB_CATEGORY_LIST, getAllServiceSubCategoryList);
    yield takeEvery(CONST.GET_BOOKING_ORDER_BY_DATE, getBookingOrderByDate);
    yield takeEvery(CONST.GET_ALL_SERVICE_SUB_CATEGORY_LIST_BY_NAME, getAllServiceSubCategoryListByName);
    yield takeEvery(CONST.SAVE_SERVICE_ORDER, saveServiceOrder);
    yield takeEvery(CONST.GET_ABOUT_US, getAboutUsData);
    yield takeEvery(CONST.GET_POLICY, getPolicyData);
    yield takeEvery(CONST.GET_CONTACT_US, getContactUsData);
    yield takeEvery(CONST.POST_FEEDBACK, postFeedback);
  };
  
  /*
    Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
  */
  const Sagas = function* mySagas() {
    yield watchLogin();
  };
  /*
    Alternatively you may use takeLatest.
  
    Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
    dispatched while a fetch is already pending, that pending fetch is cancelled
    and only the latest one will be run.
  */
  // function* mySaga() {
  //   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  // }
  
  export default Sagas;
  