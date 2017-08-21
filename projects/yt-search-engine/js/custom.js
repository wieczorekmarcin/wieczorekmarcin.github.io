// Searchbar Handler
$(function(){
    var searchField = $('#query');
    var icon = $('#search-btn');
    $('.packages').hide();
    $('.bg-yt-result').addClass('bg-static');
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $(searchField).keyup(function() {
        $('body').addClass('bg-loader');
      delay(function(){
        search();
        $('body').removeClass('bg-loader');
      }, 500 );
    });
})

function search(){

    //Clear Results
    $('#results').html('');
    $('#buttons').html('');
    var viewCount = '';

    //Get Form Input
    q = $('#query').val();
    if (q == '') {
        $('.packages').hide();
        $('.row packages-group').children().remove();
        $('.bg-yt-result').addClass('bg-static');
    }else{

        $('.packages').show();
        $('.bg-yt-result').removeClass('bg-static');

        //Run GET Request on API
        $.get(
            "https://www.googleapis.com/youtube/v3/search",{
                part: 'snippet, id',
                q: q,
                type: 'video',
                maxResults: 10,
                key: 'AIzaSyBX3FaWqtscxqDCVXwePjHm_nYIJhQb2E0'
            },
            function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;

                // Log Data
                console.log(data);
                var totalResults = (data.pageInfo.totalResults);
                $('#totalResults').html('Total results:'+totalResults);

                $.each(data.items, function(i,item){
                    //Get Output
                    var output = getOutput(item);

                    //Display Results
                    $('#results').append(output);
                });

                var buttons = getButtons(prevPageToken, nextPageToken);

                // Display Buttons

                if (totalResults != 0) {
                    $('#buttons').append(buttons);
                }
            }
        );
    }
}


// Next Page Function
function nextPage(){
    var token = $('#next-button').data('token');
    var q = $('#next-button').data('query');

    //Clear Results
    $('#results').html('');
    $('#buttons').html('');

    //Get Form Input
    q = $('#query').val();

    //Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            maxResults: 10,
            key: 'AIzaSyBX3FaWqtscxqDCVXwePjHm_nYIJhQb2E0'
        },
        function(data){
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            // Log Data
            console.log(data);

            $.each(data.items, function(i,item){
                //Get Output
                var output = getOutput(item);

                //Display Results
                $('#results').append(output);
            });

            var buttons = getButtons(prevPageToken, nextPageToken);

            // Display Buttons
            if (totalResults != 0) {
                $('#buttons').append(buttons);
            }
        }
    );
}

// prev Page Function
function prevPage(){
    var token = $('#prev-button').data('token');
    var q = $('#prev-button').data('query');

    //Clear Results
    $('#results').html('');
    $('#buttons').html('');

    //Get Form Input
    q = $('#query').val();

    //Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            maxResults: 10,
            key: 'AIzaSyBX3FaWqtscxqDCVXwePjHm_nYIJhQb2E0'
        },
        function(data){
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            // Log Data
            console.log(data);
            $.each(data.items, function(i,item){
                //Get Output
                var output = getOutput(item);

                //Display Results
                $('#results').append(output);
            });
            var buttons = getButtons(prevPageToken, nextPageToken);

            // Display Buttons
            if (totalResults != 0) {
                $('#buttons').append(buttons);
            }
        }
    );
}


// Build Output
function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;

    // Build Output String

    var output = '<div class="col-md-12 video-box">' + 
    '<div class="col-md-4">' +
    '<img class="img-responsive" src="'+thumb+'">' +
    '</div>' +
    '<div class="col-md-8"style="margin-top: -20px !important">' +
    '<h3><a target="_blank" href="http://www.youtube.com/embed/'+videoId+'" title="'+title+'">'+title+'</a></h3>' +
    '<small><span class="cTitle">'+channelTitle+'</span></small><br/><small>'+videoDate+'</small><br/>' +
    '<small>'+description+'</small>' +
    '</div>' +
    '</div>' +
    '<div class="clearfix"></div>' +
    '';

    return output;
}

// Build the buttons
function getButtons(prevPageToken, nextPageToken){
    if(!prevPageToken){
        var btnoutput = '<div class="button-container">' +
                        '<button id="next-button" class="paging-button pull-right" data-token="'+nextPageToken+'" data-query="'+q+'"' +
                        'onclick="nextPage();">Next Page</button></div>';
    }else{
        var btnoutput = '<div class="button-container">' +
                        '<button id="next-button" class="paging-button pull-right" data-token="'+nextPageToken+'" data-query="'+q+'"' +
                        'onclick="nextPage();">Next Page</button>' +
                        '<button id="prev-button" class="paging-button pull-right" data-token="'+prevPageToken+'" data-query="'+q+'"' +
                        'onclick="prevPage();">Prev Page</button></div>';
    }
    return btnoutput;
}

