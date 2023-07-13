
function signup(){
    var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');
    var id = $('#inputId').val();
    var pw = $('#inputPw').val();
    var email = $('#inputEmail').val();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/user/signup/customer',
        contentType : 'application/json',
        headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
        },
        data: JSON.stringify({
            'userId' : id,
            'userPw' : pw,
            'email' : email
        }),
        success : function(data){
          location.href='../login.html';
        },
        error: function(request, status, error){
          alert('Error');
        }
    })
}