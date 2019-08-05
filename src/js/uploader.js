/* 图片手动上传 */
var uploadCustomFileList = [];
aiui.uploader('#uploader', {
    url: 'http://' + location.hostname + ':8002/upload',
	auto: false,
    onBeforeQueued: function onBeforeQueued(files) {
        if (["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0) {
            aiui.alert('请上传图片');
            return false;
        }
        if (this.size > 10 * 1024 * 1024) {
            aiui.alert('请上传不超过10M的图片');
            return false;
        }
    },
    onQueued: function onQueued() {
        uploadCustomFileList.push(this);
    }
});

// 缩略图预览
     var $uploaderInput = $("#uploaderInput"),
      $uploaderFiles = $("#uploaderFiles");

    $uploaderInput.on("change", function (e) {
      var src,
        url = window.URL || window.webkitURL || window.mozURL,
        files = e.target.files;
      for (var i = 0, len = files.length; i < len; ++i) {
        var file = files[i];

        if (url) {
          src = url.createObjectURL(file);
        } else {
          src = e.target.result;
        }

        $uploaderFiles.append($(tmpl.replace('#url#', src)));
        if (url) {
	        url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
	    }
      }
    });
    $uploaderFiles.on("click", function (e) {
        var target = e.target;
        while (!target.classList.contains('aiui-uploader__file') && target) {
	        target = target.parentNode;
	    }
	    if (!target) return;
      var url = target.getAttribute('style') || '';
      if (url) {
        url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
        }
      var gallery = aiui.gallery(url, {
        className: 'custom-name',
        onDelete: function onDelete() {
            aiui.confirm('确定删除该图片？', {
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function(){  }
                }, {
                    label: '确定',
                    type: 'primary',
                    onClick: function(){   
                          console.log(target);
                        target.remove();
                        gallery.hide(); }
                }]
            });        
    }
});
});
   
   

