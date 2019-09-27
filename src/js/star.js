$(function (options) {
  var settings = {
    title_format: function (value) {
      var title = '';
      switch (value) {
        case 0:
          title = '非常差';
          break;
        case 1:
          title = '差';
          break;
        case 2:
          title = '一般';
          break;
        case 3:
          title = '好';
          break;
        case 4:
          title = '非常好';
          break;
        default:
          break;
      }
      return title;
    }
  };
  // 自定义参数
  var __PROTO__ = {
    move: function () {
      var $this = this;
      $(".star li").mouseover(function () {
        var _that = $(this),
          _index = parseInt(_that.index()),
          _html = $this.options.title_format(_index);
        console.log(_html);
        _that.parent().find('li').removeClass('on');
        _that.addClass("on").prevAll().addClass("on");
        _that.parent().siblings(".star-result").html(_html);

      });
      $(".star li").mouseout(function () {
        var _that = $(this);
        var scoreNum = parseInt($(this).parent().attr('score')),
          _html = $this.options.title_format(scoreNum - 1);
        //  console.log(scoreNum);
        if (scoreNum == 0) {
          _that.removeClass("on")
            .siblings().removeClass("on")
            .parent().next().html("");
        } else {
          _that.parent().find('li').removeClass('on')
            .eq(scoreNum - 1).addClass('on')
            .prevAll().addClass('on');
          _that.parent().siblings(".star-result").html(_html);
        }

      });
      $(".star li").click(function () {
        var _index = $(this).index() + 1;
        $(this).parents('ul').attr('score', _index);
      });
    }

  }
  this.options = $.extend(settings, options);
  $.extend(this, __PROTO__);
  this.move();
});