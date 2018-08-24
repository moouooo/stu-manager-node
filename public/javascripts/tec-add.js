$('#btnSave').click(function (e) {
    e.preventDefault();
    // 客户端判断。
    var tno = $.trim($('#tno').val());
    var name = $.trim($('#name').val());
    var sex = $.trim($('#sex').val());
    var birthday = $.trim($('#birthday').val());
    var card = $.trim($('#card').val());
    var majorId = $.trim($('#majorId').val()) - 0;
    var classId = $.trim($('#classId').val()) - 0;
    var departId = $.trim($('#departId').val()) - 0;
    if (!tno || !name || !sex || !birthday || !card || majorId == -1 || classId == -1 || departId == -1) {
        $('#myModal .modal-body').text('编号,姓名,性别,生日,身份证号,所学专业,所属班级,所属院系不能为空！');
        $('#myModal').modal();
        return;
    }
    // 身份证格式和邮箱格式验证省略。

    var nativePlace = $.trim($('#nativePlace').val());
    var address = $.trim($('#address').val());
    var qq = $.trim($('#qq').val());
    var phone = $.trim($('#phone').val());
    var email = $.trim($('#email').val());

    var data = { tno,name,sex,birthday,card,majorId,classId,departId,nativePlace,address,qq,phone,email };
    $.post('/teachers/add', data, function (d) {
        if(d.code != 200){
            $('#myModal .modal-body').text(d.message);
            $('#myModal').modal();
            console.log("成功")
            return;
        }

        location.href = '/teachers/list';
    })
})