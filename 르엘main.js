$(document).ready(function() {
  // 페이지 로드 후 첫 번째 페이지로 스크롤 이동
  $('html, body').animate({
    scrollTop: $('#p1-wrapper').offset().top
  }, 0);  // 0은 즉시 이동을 의미
});
//--------------------------------------------
// 메뉴 토글 기능
$('#menuToggle').on('click', function () {
  const menuContent = $('#menuContent'); // jQuery 객체
  if (menuContent.css('display') === 'none') {
    menuContent.css('display', 'inline-flex'); // 보이도록 설정
  } else {
    menuContent.css('display', 'none'); // 숨김
  }
});

//---------------------

$(window).scroll(function() {
  var scrollY = ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100).toFixed(3);
  $(".bar").css({"width" : scrollY + "%"});
});

//---------------------------
$(window).on('scroll', function () {
  // 스크롤 위치가 특정 범위에 도달하면 이미지가 점차 투명해지도록 설정
  if ($(window).scrollTop() > 100) { // 스크롤이 100px 이상 내려가면
    $('.p1-img img').css('opacity', 0);  // 이미지 투명하게 만들기
  } else {
    $('.p1-img img').css('opacity', 1);  // 스크롤이 100px 이하일 때는 불투명하게 유지
  }
});




// ---------------------------


function updateLayout() {
  if (window.innerWidth <= 768) { 
    $('.사업개요1').addClass('close'); // 작은 화면에서 숨김
    $('.사업개요2').removeClass('display-none').addClass('show'); // 보이기
  } else {
    $('.사업개요1').removeClass('close'); // 큰 화면에서 보이기
    $('.사업개요2').removeClass('show').addClass('display-none'); // 숨김
  }
}

// 화면 크기가 변경될 때마다 호출
$(window).resize(updateLayout);

// 페이지 로드 시 즉시 실행
$(document).ready(updateLayout);



//----------------------------



$(document).ready(function() {
  // 스크롤 이벤트 핸들러
  $(window).scroll(function() {
    // 현재 페이지의 위치가 #p5-wrapper인 경우 버튼 숨기기
    if ($(window).scrollTop() >= $('#p5-wrapper').offset().top) {
      $('#liveAlertBtn').hide();
    } else {
      $('#liveAlertBtn').show();
    }
  });
});


//-------------------------------


$(document).ready(function() {
  $('#phone-input').submit(function(event) {
      event.preventDefault(); // 기본 폼 제출 동작을 막습니다.
      var phoneNumber = $('#phone').val();
      $('#display').text('입력된 전화번호: ' + phoneNumber);
  });
});

