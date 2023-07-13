// img 클릭됬을 때 함수
// function handleImgClick6(data) {
//   var num = data.id.substring(data.id.length - 1);
//   var input = document.getElementById(`input_allReview_img_${num}`);
//   input.click();
// }
//
// //input 클릭됬을 때 함수
// function readURL6(input) {
//   var num = input.id.substring(input.id.length - 1);
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       document.getElementById(`allReview_img_${num}`).src = e.target.result;
//     };
//     reader.readAsDataURL(input.files[0]);
//   } else {
//     document.getElementById(`allReview_img_${num}`).src = "";
//   }
// }

var storeId = localStorage.getItem('storeId');
alert(storeId);
$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:8080/api/review/list/' + parseInt(storeId),
    type: 'GET',
    success: function(data){
      alert('성공');
    }
  })
})