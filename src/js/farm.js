$(function() {
  var $sunshineTotal = $("#sunshineTotal");
  var $sunshineChange = $("#sunshineChange");
  var $sunshineToast = $("#sunshineToast");
  var $sunshineThumb = $(".user-info").find(".thumb");

  // 显示阳光值增减提示
  function showSunshineToast(changevalue) {
    var $sunshineTotalValue = $("#sunshineTotal").html();
    $sunshineChange.html(changevalue);
    $sunshineThumb.addClass("rotate");

    setTimeout(function() {
      $sunshineThumb.removeClass("rotate");
      $sunshineTotal.html($sunshineTotalValue - changevalue);

      $sunshineToast
        .delay(300)
        .fadeIn()
        .delay(1500)
        .fadeOut();
    }, 1000);
  }

  // 操作按钮点击波纹效果
  $(".planting-operation-btn").bind("click", function() {
    var $this = $(this);
    $this.addClass("active");
    // 先禁用关闭动画弹窗
    $(".daily-operation__close").attr("disabled", "disabled");
    //动画完成后可关闭
    setTimeout(function() {
      $(".daily-operation__close").removeAttr("disabled");
    }, 3000);
  });
  // 浇水提示弹窗
  $(".jiaoshui-btn").bind("click", function() {
    $("#jiaoshuiTipsDialog").fadeIn(200);

    // 确认浇水动作
    $("#jiaoshuiSubmitBtn").bind("click", function() {
      // 移除浇水提示按钮
      $(".jiaoshui-btn")
        .removeClass("active")
        .remove();
      // 隐藏浇水提示弹窗
      $("#jiaoshuiTipsDialog").fadeOut(200);

      // 播放浇水动画
      setTimeout(function() {
        $("#jiaoshuiDialog").fadeIn(200);
        $(".jiaoshui-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
      }, 500);
    });
    // 取消浇水动作，关闭提示弹窗
    $("#jiaoshuiCancelBtn").bind("click", function() {
      $(".jiaoshui-btn").removeClass("active");
    });
    var $spendSunshineValue = $("#jiaoshuiTipsDialog")
      .find(".spend-sunshine")
      .html();

    $("#jiaoshuiDialog").on("click", ".daily-operation__close,.aiui-btn", function() {
      showSunshineToast($spendSunshineValue);
    });
  });

  // 施肥交互动画
  $(".shifei-btn").bind("click", function() {
    $("#shifeiTipsDialog").fadeIn(200);

    // 确认施肥动作
    $("#shifeiSubmitBtn").bind("click", function() {
      // 移除施肥提示按钮
      $(".shifei-btn")
        .removeClass("active")
        .remove();
      // 隐藏施肥提示弹窗
      $("#shifeiTipsDialog").fadeOut(200);

      // 播放施肥动画
      setTimeout(function() {
        $("#shifeiDialog").fadeIn(200);
        $(".shifei-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
      }, 500);
    });
    // 取消施肥动作，关闭提示弹窗
    $("#shifeiCancelBtn").bind("click", function() {
      $(".shifei-btn").removeClass("active");
    });
  });

  // 播种交互动画
  var newTree = '<div class="land-tree land-tree--jump">' + '<img src="../images/seedlings-primary.png" alt="西红柿树苗">' + "</div>";

  $(".bozhong-btn").bind("click", function() {
    var $land = $(this).parents(".land");
    $("#bozhongTipsDialog").fadeIn(200);

    // 确认播种动作
    $("#bozhongSubmitBtn").bind("click", function() {
      // 移除播种提示按钮
      $(".bozhong-btn")
        .removeClass("active")
        .remove();
      // 隐藏播种提示弹窗
      $("#bozhongTipsDialog").fadeOut(200);

      // 播放播种动画
      setTimeout(function() {
        $("#bozhongDialog").fadeIn(200);
        $(".bozhong-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
        setTimeout(function() {
          $land.removeClass("land-unplanted").addClass("land-terrestrial");
          $land.append(newTree);
        }, 3200);
      }, 500);
    });
    // 取消播种动作，关闭提示弹窗
    $("#bozhongCancelBtn").bind("click", function() {
      $(".bozhong-btn").removeClass("active");
    });
  });

  // 除草交互动画
  $(".chucao-btn").bind("click", function() {
    $("#chucaoTipsDialog").fadeIn(200);

    // 确认除草动作
    $("#chucaoSubmitBtn").bind("click", function() {
      // 移除除草提示按钮
      $(".chucao-btn")
        .removeClass("active")
        .remove();
      // 隐藏除草提示弹窗
      $("#chucaoTipsDialog").fadeOut(200);

      // 播放除草动画
      setTimeout(function() {
        $("#chucaoDialog").fadeIn(200);
        $(".chucao-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
      }, 500);
    });
    // 取消除草动作，关闭提示弹窗
    $("#chucaoCancelBtn").bind("click", function() {
      $(".chucao-btn").removeClass("active");
    });
  });

  // 除虫交互动画
  $(".chuchong-btn").bind("click", function() {
    $("#chuchongTipsDialog").fadeIn(200);

    // 确认除虫动作
    $("#chuchongSubmitBtn").bind("click", function() {
      // 移除除虫提示按钮
      $(".chuchong-btn")
        .removeClass("active")
        .remove();
      // 隐藏除虫提示弹窗
      $("#chuchongTipsDialog").fadeOut(200);

      // 播放除虫动画
      setTimeout(function() {
        $("#chuchongDialog").fadeIn(200);
        $(".chuchong-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
      }, 500);
    });
    // 取消除虫动作，关闭提示弹窗
    $("#chuchongCancelBtn").bind("click", function() {
      $(".chuchong-btn").removeClass("active");
    });
  });

  // 松土交互动画
  $(".songtu-btn").bind("click", function() {
    $("#songtuTipsDialog").fadeIn(200);

    // 确认松土动作
    $("#songtuSubmitBtn").bind("click", function() {
      // 移除松土提示按钮
      $(".songtu-btn")
        .removeClass("active")
        .remove();
      // 隐藏松土提示弹窗
      $("#songtuTipsDialog").fadeOut(200);

      // 播放松土动画
      setTimeout(function() {
        $("#songtuDialog").fadeIn(200);
        $(".songtu-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
      }, 500);
    });
    // 取消松土动作，关闭提示弹窗
    $("#songtuCancelBtn").bind("click", function() {
      $(".songtu-btn").removeClass("active");
    });
  });

  // 铲除交互动画
  $(".chanchu-btn").bind("click", function() {
    var $landTree = $(this)
      .parents(".land")
      .find(".land-tree");

    $("#chanchuTipsDialog").fadeIn(200);

    // 确认铲除动作
    $("#chanchuSubmitBtn").bind("click", function() {
      // 移除铲除提示按钮
      $(".chanchu-btn")
        .removeClass("active")
        .remove();
      // 隐藏铲除提示弹窗
      $("#chanchuTipsDialog").fadeOut(200);

      // 播放铲除动画
      setTimeout(function() {
        $("#chanchuDialog").fadeIn(200);
        $(".chanchu-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
        $("#chanchuDialog")
          .find(".daily-operation__tree")
          .delay(2000)
          .fadeOut();
        // 移除土地枯萎树
        setTimeout(function() {
          $landTree.remove();
        }, 3000);
      }, 500);
    });
    // 取消铲除动作，关闭提示弹窗
    $("#chanchuCancelBtn").bind("click", function() {
      $(".chanchu-btn").removeClass("active");
    });
  });

  // 采摘交互动画
  $(".caizhai-btn").bind("click", function() {
    $("#caizhaiTipsDialog").fadeIn(200);

    // 确认采摘动作
    $("#caizhaiSubmitBtn").bind("click", function() {
      // 移除采摘提示按钮
      $(".caizhai-btn")
        .removeClass("active")
        .remove();
      // 隐藏采摘提示弹窗
      $("#caizhaiTipsDialog").fadeOut(200);

      // 播放采摘动画
      setTimeout(function() {
        $("#caizhaiDialog").fadeIn(200);
        $(".caizhai-gif")
          .delay(500)
          .fadeIn()
          .delay(1000)
          .fadeOut();
        // 切换树状态
        var $img = $("#caizhaiDialog").find(".daily-operation__tree img");
        setTimeout(function() {
          $img.attr({ src: "../images/tomato-tree-mature-picked.png", alt: "采摘中" });
        }, 2000);
      }, 500);
    });
    // 取消采摘动作，关闭提示弹窗
    $("#caizhaiCancelBtn").bind("click", function() {
      $(".caizhai-btn").removeClass("active");
    });
  });

  // 关闭演示动画弹窗
  $("#dailyOperation").on("click", ".daily-operation__close,.aiui-btn", function() {
    $(".aiui-dialog__wrap").fadeOut(200);
  });
});
