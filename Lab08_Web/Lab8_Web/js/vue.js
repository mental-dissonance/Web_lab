$.ajax({
    url: 'https://isidea.ru/rgups_data.json',
    method: 'get',
    dataType: 'json',
    success: function(data){
			let app = new Vue({
            el: "#app",
            data: {
            posts: data
            } 
        });
    }
});