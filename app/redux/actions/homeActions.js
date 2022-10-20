import * as USER_CONST from "../../utils/Constants";

//*GO FOOD API ENDED
export const getAllFoodList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_FOOD_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getAllFoodCategoryList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_FOOD_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getAllFoodMenuList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_FOOD_MENU_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getFoodByCategoryList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_FOOD_BY_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const getTrendingFoodList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_TRENDING_FOOD_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}
//*GO FOOD API ENDED

//*GO SHOP API STARTED
export const getTrendingShopList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_TRENDING_SHOP_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const getAllShopList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_SHOP_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getAllShopCategoryList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_SHOP_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getAllShopMenuList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_SHOP_MENU_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getShopByCategoryList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_SHOP_BY_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}
//*GO SHOP API ENDED

//*GO GADGET API STARTED
export const getAllGadgetList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_GADGET_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getAllGadgetCategoryList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_GADGET_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getAllGadgetMenuList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_GADGET_MENU_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getGadgetByCategoryList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_GADGET_BY_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}
//*GO GADGET API ENDED

//*GO MART / GROCERIES API STARTED
export const getAllMartCategoryList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_MART_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getMartCategoryByNameList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_MART_CATEGORY_BY_NAME_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}
//*GO MART / GROCERIES API ENDED

export const getFoodSearchList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_FOOD_SEARCH_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const getCartByEmail = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_CART_BY_EMAIL,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const addCartItem = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.ADD_CART_ITEM,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const removeCartItem = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.REMOVE_CART_ITEM,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const removeCartItemById = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.REMOVE_CART_ITEM_BY_ID,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const getAllServiceCategoryList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_SERVICE_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getAllServiceSubCategoryList = (successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_SERVICE_SUB_CATEGORY_LIST,
        payload: {
            successCallBack,
            failureCallBack,
        }
    }
}

export const getBookingOrderByDate = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_BOOKING_ORDER_BY_DATE,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const getAllServiceSubCategoryListByName = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ALL_SERVICE_SUB_CATEGORY_LIST_BY_NAME,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const saveServiceOrder = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.SAVE_SERVICE_ORDER,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const getProductList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_PRODUCT_LIST,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}