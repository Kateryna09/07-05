$(function() {
    $(".spinner").each(function(c, b) {
        $(b).on("click", ".btn-default", function() {
            var a = $(".form-control", b)[0];
            $(".btn-default", b).index(this) ? a.value-- : a.value++;
            0 > a.value && (a.value = 0)
        })
    })
});