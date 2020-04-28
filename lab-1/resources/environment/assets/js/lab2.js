
$(document).ready(function(){
    
	var $doc = atob('PGRpdj48cCBjbGFzcz0idGV4dC1jZW50ZXIiPiZsdDtDb2RlZCZndDsgYnkgQGFoc2FuMDQ0ICA8YnIgLz4KCQkgCQkJIGdpdGh1Yi5jb20vYWhzYW4wNDQKCQkgCQk8L3A+PC9kaXY+');
    $($doc).attr('id','credits').appendTo('.container'); 
    $("#checkLogin").click(function(){
    	var $username = $("#username").val();
    	var $password = $("#password").val();
    	
    	if($username=== '' || $password=== ''){
    		$("#error").show();
            $('#error').text('');
    		$("#error").append('<br /> Username/Password feild(s) are missing!');
    	}
    	else{
            $("#error").hide();
    		var formData = {
    			username : $username,
    			password : $password
    		}
    		//alert('Success');
    		$.ajax({
    			url: "check_login.php",
    			type: "post",
                dataType: "json",
    			data: formData,
    			success: function(response){
                    if(response.msg){
                        $("#success").show();

                        $("#success").text(response.msg + "- Redirecting. Please wait");
                        window.location = "home.php";
                    }
                    if(response.error){
                        $("#error").show();
                        $("#error").text(response.error);
                    }
    			},
    			error: function(){
    				alert("failed");
    				}
                    //coded by Ahsan Shabbir (github.com/ahsan044)
    			});

    		};

    	});
    	    	
    });
