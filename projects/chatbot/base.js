var me = {};
me.avatar = "img/questionIcon.jpg";

var you = {};
you.avatar = "img/iconBot.ico";


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}            


function insertChat(who, text, time = 0){
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me") {
        control = '<li class="chat-me">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    } else {
        control = '<li class="chat-bot">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +             
                  '</li>';
    }

    setTimeout(
        function(){                        
            $("ul").append(control);
            $(".conversation-container").animate({ scrollTop: $('.conversation').height() }, "slow");
        }, time
    );
}

function resetChat(){
    $("ul").empty();
}

function writemssng(ansArray){  
    var j = 0;  
    for(var i = 0; ansArray.length > i; i++){                 
        
        if(i == 0){ j = 1000;}
        insertChat("bot", ansArray[i], 1000 * i+j ); 
        j ++;
    }
}
var dictanswer = {
                    0 : ansNumber,
                    1 : ansString,
                    2 : ansList,
                    3 : ansHelp,
                    4 : ansif, 
                    5 : answho, 
                    6 : ansfor, 
                    7 : ansbye
                }

var arrquestion = [qNumber,qString,qList, qHelp, qif, qwho, qfor, qbye]
                
$(document).keypress(function(e) {

    if(e.which == 13) {
        var text = $(".mytext").val();
        if (text !== ""){
            var hi = false;
                var bye = false;
            insertChat("me", text); 
            text = text.toLowerCase().split(' ');
            for(var i = 0;i<=text.length;i++){
                var z = 0;
                var find = false;
                
                t = text[i]
                if(qHi.indexOf(t) != -1) {
                    insertChat("bot", arrayHi[Math.floor(Math.random() * 4)], 1000);
                    hi = true;
                    break;
                }else if(qbye.indexOf(t) != -1){
                    insertChat("bot", ansbye[Math.floor(Math.random() * 2)]);                    
                    hi = false;
                    bye = true; 
                    break;
                }else{
                    do {
                        console.log("odpowiedz");
                        if(arrquestion[z].indexOf(t) != -1){
                            find = true;
                            break;
                        }
                        if(find != true){
                            z++;
                        }
                    }while (arrquestion.length > z && find != true)
                    if(find === true){
                        break;
                    }
                }  
            }   
            if(hi != true) {
                if(find != true && bye != true) {
                    insertChat("bot", "I dont understund your question. Sorry let's try again :)");
                    insertChat("bot", "Or try scream \"HELP\"",1500);
                }else if(bye == true && find == false){
                   setTimeout(function(){
                        resetChat();
                   }, 1000) 
                    
                } else {
                    writemssng(dictanswer[z]);
                }            
            }        
            $(".mytext").val('');
        }
    }
});

//-- Clear Chat
resetChat();
$(document).ready(function(){ 
    insertChat("bot", "Here is chatbot you can ask me about Python Language Programming", 0);
})
