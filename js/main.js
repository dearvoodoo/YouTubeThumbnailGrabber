﻿$(function () {
    $('#YTThumb').keypress(function (e) {
        if (e.which == 13) {
            $('#button-addon3').html('<i class=\'fal fa-spinner fa-spin\'></i>')
            var id = YouTubeGetID($('#YTThumb').val())
            pageUrl = window.location.origin + "?id=" + id
            window.location = pageUrl
        }
    })
    $('#button-addon3').click(function() {
        $('#button-addon3').html('<i class=\'fal fa-spinner fa-spin\'></i>')
        var id = YouTubeGetID($('#YTThumb').val())
        pageUrl = window.location.origin + "?id=" + id
        window.location = pageUrl
    });

    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id') == true) {
        var id = searchParams.get('id')
        console.log("I found a video id in the page URL [" + id + "]")
        getThumb(id)
    }
})

function getThumb(id) {
    var maxresdefault = "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg"
    var sddefault = "https://img.youtube.com/vi/" + id + "/sddefault.jpg"
    var hqdefault = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg"
    var mqdefault = "https://img.youtube.com/vi/" + id + "/mqdefault.jpg"
    var defaultYT = "https://img.youtube.com/vi/" + id + "/default.jpg"

    getMeta(maxresdefault,
        function (width, height) {
            var img = "<h4>Max Res " + width + "x" + height + "</h4><div class='col'><a class='d-block mb-4 h-100' href='" + maxresdefault + "' target='_blank'><img src='" + maxresdefault + "' class='mx-auto d-block'></a></div>"
            $("#YT_THUMB_1").empty();
            $("#YT_THUMB_1").css("display", "inherit")
            $("#YT_THUMB_1").append(img);
        }
    );

    getMeta(sddefault,
        function (width, height) {
            var img = "<h4>SD " + width + "x" + height + "</h4><div class='col'><a class='d-block mb-4 h-100' href='" + sddefault + "' target='_blank'><img src='" + sddefault + "' class='mx-auto d-block'></a></div>"
            $("#YT_THUMB_2").empty();
            $("#YT_THUMB_2").css("display", "inherit")
            $("#YT_THUMB_2").append(img);
        }
    );

    getMeta(hqdefault,
        function (width, height) {
            var img = "<h4>HQ " + width + "x" + height + "</h4><div class='col'><a class='d-block mb-4 h-100' href='" + hqdefault + "' target='_blank'><img src='" + hqdefault + "' class='mx-auto d-block'></a></div>"
            $("#YT_THUMB_3").empty();
            $("#YT_THUMB_3").css("display", "inherit")
            $("#YT_THUMB_3").append(img);
        }
    );

    getMeta(mqdefault,
        function (width, height) {
            var img = "<h4>MQ " + width + "x" + height + "</h4><div class='col'><a class='d-block mb-4 h-100' href='" + mqdefault + "' target='_blank'><img src='" + mqdefault + "' class='mx-auto d-block'></a></div>"
            $("#YT_THUMB_4").empty();
            $("#YT_THUMB_4").css("display", "inherit")
            $("#YT_THUMB_4").append(img);
        }
    );

    getMeta(defaultYT,
        function (width, height) {
            var img = "<h4>Default " + width + "x" + height + "</h4><div class='col'><a href='" + defaultYT + "' target='_blank'><img src='" + defaultYT + "' class='mx-auto d-block'></a></div>"
            $("#YT_THUMB_5").empty();
            $("#YT_THUMB_5").css("display", "inherit")
            $("#YT_THUMB_5").append(img);
        }
    );
}

function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

function getMeta(url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
        callback(this.width, this.height);
    }
}