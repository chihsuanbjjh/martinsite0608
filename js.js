/*
密碼規則：
至少8個位元、可看到輸入的字元、
密碼欄輸入字元後，確認密碼欄變成可以輸入文字
密碼欄有字元的時候，『請輸入密碼』不會下來
按下眼睛圖示可以看見明碼
*/

let originalPw = $('#originalPw');
let confirmPw = $('#confirmPw');
let eye = $('.show');

// 按下眼睛的動作：顯示明碼(input type)、更換圖示(change class)
eye.click(function() {
  if (originalPw.attr('type') == 'password') {
    originalPw.attr('type', 'text');
    confirmPw.attr('type', 'text');
    eye.removeClass('fa-eye-slash').addClass('fa-eye');
  } else {
    originalPw.attr('type', 'password');
    confirmPw.attr('type', 'password');
    eye.removeClass('fa-eye').addClass('fa-eye-slash');
  }
});

// keyup完後，值就已經輸入好了
originalPw.keyup(function() {
  if (originalPw.val().trim().length >= 8) {
    confirmPw.removeAttr('disabled');
  } else {
    confirmPw.attr('disabled', 'true');
  }
});

// 判斷異同、有輸入值
$('#checkbtn').click(function() {
  if (originalPw.val().length > 0 && originalPw.val() == confirmPw.val()) {
    $('.alert .text').text('密碼相同');
    $('.alert .error').css('display', 'none');
    $('.alert .text').css('color', '#a6a6a6');
  } else {
    $('.alert .text').text('密碼不相同');
    $('.alert .text').css('color', '#D93025');
    $('.alert .error').css('display', 'block');
    console.log('false');
  }
});
