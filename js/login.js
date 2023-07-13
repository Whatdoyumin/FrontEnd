function login(){
    var id = $('#inputId').val();
    var pw = $('#inputPw').val();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/user/login',
        contentType: 'application/json',
       
        data: JSON.stringify({
            'userId' : id,
            'userPw' : pw
        }),
        success : function(data){
            localStorage.setItem('grantType', data.grantType);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            alert('로그인에 성공했습니다.');
            location.href='main.html';
        },
        error: function(request, status, error){
            alert('로그인에 실패했습니다.');
        }
    })
}
