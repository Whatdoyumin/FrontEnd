function toggleUserPanel() {
    var userPanel = document.getElementById("userPanel");
    if (userPanel.style.display === "none") {
        userPanel.style.display = "block";
    } else {
        userPanel.style.display = "none";
    }
}

var grantType = localStorage.getItem("grantType");
var accessToken = localStorage.getItem("accessToken");
var refreshToken = localStorage.getItem("refreshToken");

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8080/api/store/list',
        type: 'GET',
        contentType: "application/json",
        headers: {
            Authorization: grantType + " " + accessToken,
            Refresh: refreshToken,
        },
        success: function(data) {
            for (var i = 0; i < data.totalElements; i++) {
                var storeInfo = data.content[i];
                var storeCardWrap = document.getElementById('store-list');
                var storeCard = document.createElement('div');
                storeCard.class = 'store_card';
                storeCard.style.width = '20%';
                storeCard.style.border = '1px solid #ccc';
                storeCard.style.borderRadius = '5px';
                storeCard.style.overflow = 'hidden';
                storeCard.style.float = 'left';
                storeCard.style.margin = '0 30px 30px 25px';

                var storeCardImg = document.createElement('img');
                storeCardImg.src = 'download.png';
                storeCardImg.style.width = '100%';
                storeCardImg.style.height = '200px';
                storeCardImg.style.objectFit = 'cover';

                var storeCardContent = document.createElement('div');
                storeCardContent.className = 'store_card_content';
                storeCardContent.id = 'store_card_content';
                storeCardContent.style.padding = '15px';

                var storeCardH3 = document.createElement('h3');
                storeCardH3.innerText = storeInfo.storeName;
                storeCardH3.style.marginTop = '0';

                var storeCardP = document.createElement('p');
                storeCardP.innerText = storeInfo.storeAddr;
                storeCardP.style.marginBottom = '10px';

                var storeCardButton = document.createElement('p');
                storeCardButton.className = 'storeCardButton';
                storeCardButton.id = storeInfo.id;
                storeCardButton.innerText = '장소 자세히 보기';
                storeCardButton.style.cssText = `
                    display: inline-block;
                    padding: 5px 10px;
                    background-color: #4965C7;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 10px;
                    cursor: pointer;
                `;

                storeCardContent.appendChild(storeCardH3);
                storeCardContent.appendChild(storeCardP);
                storeCardContent.appendChild(storeCardButton);

                storeCard.appendChild(storeCardImg);
                storeCard.appendChild(storeCardContent);
                storeCardWrap.appendChild(storeCard);
            }

            $('.storeCardButton').hover(function () {
                $(this).css('background-color', '#23527c');
            }, function () {
                $(this).css('background-color', '#4965C7');
            })

            $('.storeCardButton').click(function () {
                var cardButton = $(this).attr('id');
                console.log(cardButton);
                localStorage.setItem('storeId', cardButton);
                window.location.href = 'storedetail.html';
            })
        }
    })
})