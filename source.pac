
var direct = 'DIRECT;';

var whiteDomains = {
   "phobos.apple.com": 1
};

var domains = {
   "4shared.com": 1, 
   "amazonaws.com": 1,
   "android.com": 1, 
   "appspot.com": 1, 
   "apple.com": 1,
   "bigfools.com": 1, 
   "bit.ly": 1, 
   "bitbucket.org": 1,
   "blog.com": 1, 
   "blogcdn.com": 1, 
   "blogger.com": 1, 
   "blogsmithmedia.com": 1, 
   "blogspot.com": 1, 
   "box.net": 1, 
   "chromium.org": 1, 
   "cl.ly": 1, 
   "cloudfront.net": 1,
   "cocoapods.org": 1,
   "crashlytics.com": 1, 
   "developer.apple.com": 1,
   "dropbox.com": 1, 
   "dropboxstatic.com": 1,
   "engadget.com": 1, 
   "facebook.com": 1, 
   "facebook.net": 1, 
   "fbcdn.net": 1, 
   "feedburner.com": 1, 
   "flickr.com": 1, 
   "freeweibo.com": 1, 
   "ggpht.com": 1,
   "github.com": 1, 
   "github.global.ssl.fastly.net": 1, 
   "githubusercontent.com": 1,
   "gmail.com": 1, 
   "goo.gl": 1, 
   "google.com": 1, 
   "google.com.hk": 1, 
   "google.co.jp": 1, 
   "googleapis.com": 1,
   "googlecode.com": 1, 
   "googleusercontent.com": 1, 
   "googlevideo.com": 1, 
   "gstatic.com": 1,
   "hootsuite.com": 1, 
   "imageshack.us": 1, 
   "iphone-dev.org": 1, 
   "imgur.com": 1,
   "megaupload.com": 1, 
   "mobile01.com": 1, 
   "modmyi.com": 1,
   "mzstatic.com": 1,
   "openvpn.net": 1, 
   "ow.ly": 1,
   "pinboard.in": 1, 
   "raiya.co": 1,
   "sstatic.net": 1,
   "stackoverflow.com": 1,
   "staticflickr.com": 1, 
   "t.co": 1, 
   "thepiratebay.org": 1, 
   "tumblr.com": 1,
   "twimg.com": 1, 
   "twitch.tv": 1, 
   "twitter.com": 1, 
   "wikipedia.com": 1, 
   "wikipedia.org": 1, 
   "windowsazure.com": 1,
   "wordpress.com": 1, 
   "youtu.be": 1,
   "youtube-nocookie.com": 1, 
   "youtube.com": 1, 
   "ytimg.com": 1
};

function FindProxyForURL(url, host) {
    var lastPos;
    
    var whiteHost = host;
    do {
        if (whiteDomains.hasOwnProperty(whiteHost)) {
            return direct;
        }
        lastPos = whiteHost.indexOf('.') + 1;
        whiteHost = whiteHost.slice(lastPos);
    } while (lastPos >= 1);
    
    var blackHost = host;
    do {
        if (domains.hasOwnProperty(blackHost)) {
            return proxy;
        }
        lastPos = blackHost.indexOf('.') + 1;
        blackHost = blackHost.slice(lastPos);
    } while (lastPos >= 1);
    
    return direct;
}
