/* 图片手动上传 */
var uploadCount = 0,  
    uploadCustomFileList = [];

aiui.uploader('#uploader', {
    url: 'http://' + location.hostname + ':8002/upload', //你要上传的url地址
    auto: false,
    type: 'file',
    fileVal: 'fileVal',  //文件上传域的name，后台通过该name拿到传输的文件
    // 上传图片压缩
    compress: { 
      width: 800,
      quality: .8
  },
    onBeforeQueued: function onBeforeQueued(files) {
      //上传前，对上传的情况做以下多个判断，保证合法性，可自行删改
      var uploadCountSize=$('#uploader').data('size');
        if (["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0) {
            aiui.alert('请上传图片');
            return false;
        }
        if (this.size > 10 * 1024 * 1024) {
            aiui.alert('请上传不超过10M的图片');
            return false;
        }
        // 如果图片数量上传不限制请配置false，否则配置相应的数量
        if(uploadCountSize==false){
          if (files.length > 5) {
            // 防止一下子选中过多文件
            aiui.alert('最多只能上传5张图片，请重新选择');
            return false;
         }
        }else{
          if (files.length > uploadCountSize) {
            // 防止一下子选中过多文件
            aiui.alert('最多只能上传'+uploadCountSize+'张图片，请重新选择');
            return false;
          }
          if (uploadCount + 1 > uploadCountSize) {
              aiui.alert('最多只能上传'+uploadCountSize+'张图片');
              return false;
          }
          ++uploadCount;
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
   
   

