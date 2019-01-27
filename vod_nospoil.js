//https://alchemytheory.blogspot.com/2019/01/watch-youtube-spoiler-free.html

var youtube_regex = 
/^https:\/\/www\.youtube\.com\/watch\?v=([^&]*)(?:.*(?:(?=(?:&t=(?:(?:(?:[01]?\d|2[0-3])h)?(?:[0-5]?\d)m)?(?:[0-5]?\d)s))))?(&t=(?:(?:([01]?\d|2[0-3])h)?([0-5]?\d)m)?([0-5]?\d)s)?/
;
var twitch_regex = /^https:\/\/www.twitch.tv\/videos\/([^?]*)(?:.*(?:(?=(?:&t=(?:(?:(?:[01]?\d|2[0-3])h)?(?:[0-5]?\d)m)?(?:[0-5]?\d)s))))?(?:\?t=((?:(?:([01]?\d|2[0-3])h)?([0-5]?\d)m)?([0-5]?\d)s))?/;

var source_url = window.location.href;

var youtube_match = youtube_regex.exec(source_url);
youtube_match;
if (youtube_match!==null){
        var new_url_youtube = source_url.replace(youtube_regex,
        "https://www.youtube.com/embed/$1?controls=0");
        if (youtube_match[2]!=null){
            var start_time = 0;
            if (youtube_match[5]!=null) {start_time += parseInt(youtube_match[5]);}
            if (youtube_match[4]!=null) {start_time += parseInt(youtube_match[4]) * 60;}
            if (youtube_match[3]!=null) {start_time += parseInt(youtube_match[3]) * 3600;}
            new_url_youtube += "&start=";
            new_url_youtube += start_time.toString();
        }
        window.location.href = new_url_youtube;}
        
var twitch_match = twitch_regex.exec(source_url);
twitch_match;
if (twitch_match!==null){
        var new_url_twitch = source_url.replace(twitch_regex,
        "https://player.twitch.tv/?video=v$1&controls=false";);
        if (twitch_match[2]!=null){
            new_url_twitch = new_url_twitch.replace(twitch_regex,
        "https://player.twitch.tv/?video=v$1&controls=false&time=$2";
        }
        window.location.href = new_url_twitch;}
