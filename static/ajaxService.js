var ajaxService = function(){

    //to test if ajaxService can be called.
    testCall = function(){
        console.log('test');
    }
    makeAjaxRequest = function(httpMethod, url, data, async, cache){
        if(typeof async == "undefined"){
            async = true;
        }

        if(typeof cache == "undefined"){
            cache = false;
        }

        var ajaxObject = $.ajax({
            type: httpMethod.toUpperCase(),
            url: url,
            data: data,
            dataType: 'json',
            async: async,
            cache: cache,
            beforeSend: function(request){
                request.setRequestHeader("content-type", "application/json")
            }
        });

        return ajaxObject;


    }

    //public API
    return {
        makeAjaxRequest: makeAjaxRequest,
        testCall:testCall
    }

}();