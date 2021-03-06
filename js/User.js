        $.urlParam = function(name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results[1] || 0;
        }
        $(function(){
            //Get user Id from querystring parameters
            var id = $.urlParam('id');
            //Create a Web Api url for getting a member info
            var url = "http://membershipwebapi977290.azurewebsites.net/api/Members/" + id;        
            // console.log(url);
            $.get(url, function(data, status) {
                console.log(data);
                $('.username').html(data.UserName);
                
                //If user click edit, go to edituser page
                $("#viewprofile").click(function () {
                    window.location.href = "Viewprofile.html?id=" + data.Id;
                });  

                $("#edituser").click(function () {
                    window.location.href = "EditUser.html?id=" + data.Id;
                });  

                $("#editpass").click(function () {
                    window.location.href = "Editpass.html?id=" + data.Id;
                });              
            });        
        });
