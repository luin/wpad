
var direct = 'DIRECT;';
var domains = {
   "windowsazure.com": 1,
   "developer.apple.com": 1,
   "youtu.be": 1,
   "ggpht.com": 1,
   "gstatic.com": 1,
   "tumblr.com": 1,
   "dropboxstatic.com": 1,
   "googleapis.com": 1,
   "modmyi.com": 1,
   "sstatic.net": 1,
   "stackoverflow.com": 1,
   "cloudfront.net": 1, 
   "crashlytics.com": 1, 
   "githubusercontent.com": 1,
   "github.global.ssl.fastly.net": 1, 
   "googlecode.com": 1, 
   "github.com": 1, 
   "twitch.tv": 1, 
   "mobile01.com": 1, 
   "blogcdn.com": 1, 
   "blogsmithmedia.com": 1, 
   "fbcdn.net": 1, 
   "goo.gl": 1, 
   "feedburner.com": 1, 
   "gmail.com": 1, 
   "google.com": 1, 
   "dropbox.com": 1, 
   "4shared.com": 1, 
   "appspot.com": 1, 
   "blog.com": 1, 
   "blogger.com": 1, 
   "blogspot.com": 1, 
   "box.net": 1, 
   "facebook.com": 1, 
   "facebook.net": 1, 
   "android.com": 1, 
   "chromium.org": 1, 
   "twitter.com": 1, 
   "wikipedia.org": 1, 
   "imageshack.us": 1, 
   "megaupload.com": 1, 
   "bigfools.com": 1, 
   "youtube.com": 1, 
   "youtube-nocookie.com": 1, 
   "googlevideo.com": 1, 
   "ytimg.com": 1, 
   "wordpress.com": 1, 
   "cl.ly": 1, 
   "thepiratebay.org": 1, 
   "t.co": 1, 
   "iphone-dev.org": 1, 
   "pinboard.in": 1, 
   "googleusercontent.com": 1, 
   "staticflickr.com": 1, 
   "flickr.com": 1, 
   "twimg.com": 1, 
   "engadget.com": 1, 
   "bit.ly": 1, 
   "github.com": 1, 
   "wikipedia.com": 1, 
   "hootsuite.com": 1, 
   "openvpn.net": 1, 
   "freeweibo.com": 1, 
   "bitbucket.org": 1
};

function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}
