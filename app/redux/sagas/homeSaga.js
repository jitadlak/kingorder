/**
 * @UserSaga will listen for the requests of user related stuffs, call a api using apiService and return back to corresponding reducer
 */

import {
  call, put
} from 'redux-saga/effects';
import * as API_SERVICE from '../../services/apiService/AxioUtils';
import * as commonActions from '../actions/commonActions';
import * as homeActions from '../actions/homeActions';

// Define Worker Sagas
//*GO FOOD API STARTED
//*> GET FOOD LIST SAGA
export function* getAllFoodList(action) {
  let path = `/food/findAllRestaurant`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Food List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Food List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET FOOD CATEGORY LIST SAGA
export function* getAllFoodCategoryList(action) {
  let path = `/food/findRestaurantSubCategory`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Food Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Food Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET FOOD MENU LIST SAGA
export function* getAllFoodMenuList(action) {
  let path = `/food/findAllRestaurantMenu`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Food Menu List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Food Menu List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET FOOD By CATEGORY LIST SAGA
export function* getFoodByCategoryList(action) {
  let path = `/food/findRestaurantMenuByCategory?categoryName=${action.payload.data.categoryName}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Food By Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Food By Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}
//*> GET FOOD LIST SAGA
export function* getTrendingFoodList(action) {
  let path = `/food/trendingRestaurant?offset=${action.payload.data.offset}&limit=${action.payload.data.limit}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Trending Food List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Trending Food List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}
//*GO FOOD API Ended

//*GO SHOP API STARTED
//*> GET SHOP LIST SAGA
export function* getTrendingShopList(action) {
  let path = `/shop/trendingShop?offset=${action.payload.data.offset}&limit=${action.payload.data.limit}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Trending Shop List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Trending Shop List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET SHOP LIST SAGA
export function* getAllShopList(action) {
  let path = `/shop/findAllShop`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Shop List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Shop List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET SHOP CATEGORY LIST SAGA
export function* getAllShopCategoryList(action) {
  let path = `/shop/findAllShopCategory`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Shop Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Shop Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET SHOP MENU LIST SAGA
export function* getAllShopMenuList(action) {
  let path = `/shop/findAllShopMenu`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Shop Menu List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Shop Menu List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET SHOP By CATEGORY LIST SAGA
export function* getShopByCategoryList(action) {
  let path = `/shop/findShopByCategory?categoryName=${action.payload.data.categoryName}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Shop By Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Shop By Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}
//*GO SHOP API ENDED

//*GO GADGET API STARTED
//*> GET GADGET LIST SAGA
export function* getAllGadgetList(action) {
  let path = `/gadget/findAllGadget`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Gadget List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Gadget List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET GADGET CATEGORY LIST SAGA
export function* getAllGadgetCategoryList(action) {
  let path = `/gadget/findAllGadgetSubCategory`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Gadget Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Gadget Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET GADGET MENU LIST SAGA
export function* getAllGadgetMenuList(action) {
  let path = `/gadget/findAllGadgetMenuCategory`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Gadget Menu List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Gadget Menu List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET GADGET By CATEGORY LIST SAGA
export function* getGadgetByCategoryList(action) {
  let path = `/gadget/findGadgetByCategory?categoryName=${action.payload.data.categoryName}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Gadget By Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Gadget By Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}
//*GO GADGET API ENDED

//*GO MART API STARTED
//*> GET ALL MART CATEGORY LIST SAGA
export function* getAllMartCategoryList(action) {
  let path = `/mart/findAllMartCategory`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Mart List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Mart List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET MART CATEGORY BY NAME LIST SAGA
export function* getMartCategoryByNameList(action) {
  let path = `/mart/findMartMenuByCategoryName?categoryName=${action.payload.data.categoryName}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Mart Category By Name List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Mart Category By Name List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}
//*GO MART API ENDED

//*> GET CART BY EMAIL LIST SAGA
export function* getCartByEmail(action) {
  let path = `/cart/findCartCategoryByEmailId?emailID=${action.payload.data.emailID}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Cart By Email List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Cart By Email List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> ADD CART ITEM SAGA
export function* addCartItem(action) {
  let path = `/cart/addCartItemByUserIdAndMenuId`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Add Cart Item Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Add Cart Item Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> DELETE CART ITEM SAGA
export function* removeCartItem(action) {
  let path = `/cart/removeAllCartByEmailID`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performDeleteRequest, path, action.payload.data);
    console.log('@@@ Remove Cart Item Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Remove Cart Item Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> DELETE CART ITEM BY ID SAGA
export function* removeCartItemById(action) {
  let path = `/cart/removeCartItemByCartIdAndEmailId`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performDeleteRequest, path, action.payload.data);
    console.log('@@@ Remove Cart Item By Id Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Remove Cart Item By id Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET VENDOR SEARCH LIST SAGA
export function* getFoodSearchList(action) {
  let path = `/vendor/search?categoryName=${action.payload.data.categoryName}&searchParam=${action.payload.data.searchParam}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Food Search List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Food Search List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET ALL SERVICE CATEGORY SAGA
export function* getAllServiceCategoryList(action) {
  let path = `/service/findAllServiceCategory`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Service Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Service Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET ALL SERVICE SUB CATEGORY SAGA
export function* getAllServiceSubCategoryList(action) {
  let path = `/service/findAllServiceSubCategory`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Service Sub Category List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Service Sub Category List Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET ALL SERVICE BOOKING ORDER SAGA
export function* getBookingOrderByDate(action) {
  let path = `/service/findBookingOrderByDate?date=${action.payload.data.date}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Booking Order By Date Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Booking Order By Date Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET ALL SERVICE SUB CATEGORY BY NAME SAGA
export function* getAllServiceSubCategoryListByName(action) {
  let path = `/service/findServiceSubCategoryByName?serviceName=${action.payload.data.serviceName}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get All Service Sub Category Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get All Service Sub Category Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> SAVE SERVICE ORDER SAGA
export function* saveServiceOrder(action) {
  let path = `/service/saveServiceOrder`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
    console.log('@@@ Save Service Order Response =======', res);
    if (res !== undefined && res.data !== null && res.status === 200) {
      yield put(commonActions.stopSpinner());
      action.payload.successCallBack(res);
    } else {
      yield put(commonActions.stopSpinner());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Save Service Order Error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      // let response = JSON.parse(error);
      action.payload.failureCallBack(error);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}

//*> GET PRODUCT LIST SAGA
export function* getProductList(action) {
  let path = `categories/${action.payload.data.id}/get_products?page=${action.payload.data.pageCount}&per_page=10&uuid=${action.payload.data.uuid}`;
  try {
    yield put(commonActions.startSpinner());
    const res = yield call(API_SERVICE.performGetRequest, path);
    console.log('@@@ Get Product List Response =======', res);
    if (res !== undefined && res.status === 200) {
      yield put(commonActions.stopSpinner());
      yield put(homeActions.getProductListSuccess(res.data.data));
      action.payload.successCallBack(res.data);
    } else {
      yield put(commonActions.stopSpinner());
      yield put(homeActions.getProductListFailure());
      action.payload.failureCallBack(null);
    }
  } catch (error) {
    console.log('@@@ Get Product List error ========', error);
    yield put(commonActions.stopSpinner());
    if (error.request._response && error.request.status !== 0) {
      let response = JSON.parse(error);
      action.payload.failureCallBack(response);
    } else {
      action.payload.failureCallBack(null);
    }
  }
}
