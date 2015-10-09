/**
 * 
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

/**
 * 這是一個 singleton 物件
 */
var AppActionCreators = {

    /**
     * app 啟動後，第一次載入資料
     */
    load: function(){
        //        
    },

    /**
     * 
     */
    createUser: function( user ) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.USER_CREATE,
            item: user
        });
    },
    /**
     * 
     */
    saveDates: function( dates ){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.DATE_SAVE,
            item: dates
        });
    }
};

module.exports = AppActionCreators;
