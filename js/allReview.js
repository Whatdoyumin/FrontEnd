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

var storeId = localStorage.getItem("storeId");
alert(storeId);
$(document).ready(function () {
  $.ajax({
    url: "http://localhost:8080/api/review/list/" + parseInt(storeId),
    type: "GET",
    success: function (data) {
      var reviewNum = document.getElementById("allReviewHeader");
      var reviewNumP = document.createElement("p");
      reviewNumP.innerText = "리뷰 수(" + data.content.length + "/100)";
      reviewNum.appendChild(reviewNumP);

      var reviewBigWrap = document.getElementById("reviewBigWrap");

      for (var i = 0; i < data.content.length; i++) {
        var wrapAllReviewContainer = document.createElement("div");
        wrapAllReviewContainer.className = "wrap_allReview_container";

        var allReviewContainer = document.createElement("div");
        allReviewContainer.className = "allReview_container";

        var box = document.createElement("div");
        box.className = "box";
        box.innerHTML =
          '<div class="box"><p class="review1">' +
          (i + 1) +
          "</p><button type='button' class=\"sendCoupon\">쿠폰 전달</button></div>";

        var verticalReview = document.createElement("div");
        verticalReview.className = "vertical_review";
        verticalReview.style = `
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 80%;
        margin-right: 6%;`;

        var starLevel = document.createElement("div");
        starLevel.className = "starLevel";

        verticalReview.appendChild(starLevel);

        for (var j = 0; j < data.content[i].starRating; j++) {
          var like = document.createElement("p");
          like.id = "like";
          like.innerText = "*";
          starLevel.appendChild(like);
        }

        for (var k = 0; k < 5 - data.content[i].starRating; k++) {
          var dislike = document.createElement("p");
          dislike.id = "dislike";
          dislike.innerText = "*";
          starLevel.appendChild(dislike);
        }

        var h4 = document.createElement("h4");
        h4.className = "review3";
        h4.innerText = data.content[i].customerName;
        h4.style = `
        text-align: start;
        margin: 0 0 14% 0;`;

        var reviewContentBox = document.createElement("div");
        reviewContentBox.className = "review_contentbox";
        reviewContentBox.style = `
            border-radius: 0.5rem;
            width: 60%;
            height: 130px;
            word-break:break-all;`;

        var reviewContentBoxP = document.createElement("p");
        reviewContentBoxP.innerText = data.content[i].content;
        reviewContentBoxP.style = `
          font-size: smaller;
          padding: 10px;`;

        reviewContentBox.appendChild(h4);
        reviewContentBox.appendChild(reviewContentBoxP);

        allReviewContainer.appendChild(box);
        allReviewContainer.appendChild(verticalReview);
        allReviewContainer.appendChild(reviewContentBox);

        reviewBigWrap.appendChild(allReviewContainer);
      }
    },
  });
});
