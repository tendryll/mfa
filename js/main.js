$(function () {
  $("#cform").submit(function (e) {
    const NUM_CHARS_ERR = 7;
    let name = $("#name").val();
    let email = $("#email").val();
    let msg = $("#message").val();
    let errMsg = "<p>";

    if (!assertName(name)) {
      errMsg
        += "<span class='err'>Name is required and needs to be less than or equal to 50 characters in length</span>";
    }

    if (!assertEmail(email)) {
      errMsg += "<span class='err'>Email is required and must be in a valid format</span>";
    }

    if (!assertMessage(msg)) {
      errMsg
        += "<span class='err'>Message is required and needs to be less than or equal to 200 characters in length</span>";
    }

    errMsg += "</p>";

    if (errMsg.length > NUM_CHARS_ERR) {
      $("#errors").html(errMsg);
      e.preventDefault();
    }
  });
});

function assertName(name) {
  return name.length > 0 && name.length <= 50;
}

function assertEmail(email) {
  return (email.length > 0 && email.length <= 150) &&
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function assertMessage(msg) {
  console.log(`msg: "${msg}"`);
  return msg.length > 0 && msg.length <= 200;
}

