$(document).ready(function() {
    var storeId = localStorage.getItem("storeId");
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8080/api/review/list/"+storeId,
        success: function(response) {
            $.each(response.content, function(index, item){
                var reviewData = response;

                var reviewBox = document.createElement("div");
                reviewBox.className = "review-box";

                var starLevel = document.createElement("div");
                starLevel.className = "starLevel";

                for(var j = 0; j < response.content[index].starRating; j++){
                    var like = document.createElement('p');
                    like.id = 'like';
                    like.innerText = '★';
                    starLevel.appendChild(like);
                }

                for(var k = 0; k < 5 - response.content[index].starRating; k++){
                    var dislike = document.createElement('p');
                    dislike.id = 'dislike';
                    dislike.innerText = '★';
                    starLevel.appendChild(dislike);
                }

                reviewBox.appendChild(starLevel);

                var reviewContent = document.createElement("div");
                reviewContent.className = "review-content";
                reviewBox.appendChild(reviewContent);

                var userInfo = document.createElement("div");
                userInfo.className = "user-info";
                reviewContent.appendChild(userInfo);

                var userName = document.createElement("div");
                userName.className = "user-name";
                var userNameHeading = document.createElement("h3");
                userNameHeading.innerHTML = item.customerName;
                userName.appendChild(userNameHeading);
                userInfo.appendChild(userName);

                // var uploadDate = document.createElement("div");
                // uploadDate.className = "upload-date";
                // var uploadDateParagraph = document.createElement("p");
                // uploadDateParagraph.innerHTML = reviewData.upload_date;
                // uploadDate.appendChild(uploadDateParagraph);
                // userInfo.appendChild(uploadDate);


                reviewBox.appendChild(starLevel);

                var userReview = document.createElement("div");
                userReview.className = "user-review";
                var userReviewParagraph = document.createElement("p");
                userReviewParagraph.innerHTML = item.content;
                userReview.appendChild(userReviewParagraph);
                reviewContent.appendChild(userReview);

                $('.review-list').append(reviewBox);


            });


        },
        error: function() {
            // Ajax 요청 실패 시 실행되는 코드
            console.log("리뷰 불러오기에 실패했습니다.");
        }
    });
});
