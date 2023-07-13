

var storeId = localStorage.getItem('storeId');
$(document).ready(function(){
    var grantType = localStorage.getItem("grantType");
    var accessToken = localStorage.getItem("accessToken");
    var refreshToken = localStorage.getItem("refreshToken");

    $.ajax({
        url: 'http://localhost:8080/api/store/detail/' + storeId,
        type: 'GET',
        contentType: "application/json",
        headers: {
            Authorization: grantType + " " + accessToken,
            Refresh: refreshToken,
        },
        success: function (data) {
            var storeName = document.getElementById('storeName');
            storeName.innerHTML = '<h2>' + data.storeName + '</h2>';

            var storeAddr = document.getElementById('storeLocation');
            storeAddr.innerHTML = '<p>' + data.storeAddr + '</p>';

            var storeDetail = document.getElementById('storeDetail');
            storeDetail.innerHTML = '<p>' + data.storeIntro + '</p>';

            var storeMenu = document.getElementById('storeMenu');
            for(var i = 0; i < data.menus.length; i++){
                var storeMenuList = document.createElement('p');
                storeMenuList.innerText = data.menus[i].menuName;
                storeMenu.appendChild(storeMenuList);
            }

            var storeTime = document.getElementById('storeTime');
            var storeGetTime = document.createElement('p');
            storeGetTime.innerText = data.storeTime;
            storeTime.appendChild(storeGetTime);

            for (var i = 0; i < data.reviews.length; i++) {
                var storeReview = document.getElementById('storeReviewBox');
                var storeReviewTap = document.createElement('div');
                storeReviewTap.className = 'store_reviewtab';

                var dateStar = document.createElement('div');
                dateStar.className = 'dateStar';

                var storeDateStarP = document.createElement('div');
                storeDateStarP.className = 'reviewStar';
                storeDateStarP.innerHTML = '<h2><span style="color: rgb(247, 230, 45);">★</span>' +data.reviews[i].starRating + '</h2>';

                dateStar.appendChild(storeDateStarP);

                var nameContent = document.createElement('div');
                nameContent.className = 'nameContent';

                var reviewContent = document.createElement('div');
                reviewContent.className = 'reviewContent';

                var reviewContentP = document.createElement('p');
                reviewContentP.innerText = data.reviews[i].content;

                reviewContent.appendChild(reviewContentP);
                nameContent.appendChild(reviewContent);

                storeReviewTap.appendChild(dateStar);
                storeReviewTap.appendChild(nameContent);

                storeReview.appendChild(storeReviewTap);
            }
        }
    })
})