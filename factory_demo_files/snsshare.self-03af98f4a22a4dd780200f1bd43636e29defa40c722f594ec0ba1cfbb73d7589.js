
function setSnsShare(shareUrl, description) {
    // 都合に合わせてセレクタは変えてね！
    setTwitterLink(".twitter_back", shareUrl, description);
    setFacebookLink(".facebook_back", shareUrl, description);
    setGooglePlusLink(".google_back", shareUrl, description);
    setHatebuLink(".hatena_back", shareUrl, description);
    setLineLink(".line_back", shareUrl, description);
}


function setTwitterLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "http://twitter.com/intent/tweet?url=" + shareUrl + "&text=" + encodeURIComponent(description));
    setShareEvent(shareSelector, 'Twitter', shareUrl);
}

function setFacebookLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl + "&t=" + encodeURIComponent(description));
    setShareEvent(shareSelector, 'Facebook', shareUrl);
}

function setGooglePlusLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "https://plus.google.com/share?shareUrl=" + shareUrl);
    setShareEvent(shareSelector, 'Google+', shareUrl);
}

function setHatebuLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "https://b.hatena.ne.jp/add?mode=confirm&shareUrl=" + shareUrl + "&description=" + encodeURIComponent(description));
    setShareEvent(shareSelector, 'Hatena Bookmark', shareUrl);
}

function setLineLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "http://line.me/R/msg/text/?" + encodeURIComponent(description + " " + shareUrl));
    setShareEvent(shareSelector, 'LINE', shareUrl);
}

function setShareEvent(selector, snsName, shareUrl) {
    $(selector).on('click', function(e) {
        var current = this;
        // このあたりは適当に書き換えて下さい
        window.open(current.href, '_blank', 'width=600, height=600, menubar=no, toolbar=no, scrollbars=yes');
        e.preventDefault();
    });
}
