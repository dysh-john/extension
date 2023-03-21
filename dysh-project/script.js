console.log("Extension active now by john");


chrome.runtime.onMessage.addListener(gotMsg);




function gotMsg(message, sender, sendResponse){
    console.log(message.txt);

    if (message.txt === "hello"){



        /* -------- Start main script -------- */


        /* Change url */
        var currentUrl = location.href;
        var currentDomain = window.location.host;

        var dyshUrl = 'https://sdms.dysh.tyc.edu.tw/school/Roll_Call/Admin/RC/RC_card?title=%u5237%u5361%u9ede%u540dz';
        var dyshDomain = 'sdms.dysh.tyc.edu.tw';


        if(currentUrl != dyshUrl && currentDomain == dyshDomain) {
            window.open(dyshUrl);
        }
        else{
            var paragraphs = document.getElementsByTagName("tr");
            for(var i = 0; i < paragraphs.length; i++)
            {
                showText = paragraphs[i].innerText;
                if(showText.length > 14){
                    if(showText.length < 50){
            
                        showText = showText.replace(/(\n|\t02|\t|\r)/gm, "");
                        sdtInfo = showText;
            
                        /* Start fillter */
                        /* 未刷卡ver */
                        if(showText.substr(-11) == "未刷卡(未到)已到遲到"){
                            sdtInfo = sdtInfo.slice(0, -4);
            
                            /* Edit text */
                            sdtInfo = sdtInfo.slice(0, -7);
                            sdtInfo = (sdtInfo+":  未刷卡(未到)")
            
                            alert(sdtInfo);
                        }
                        /* 遲到ver */
                        else if(showText.substr(-6) == "遲到未到已到"){
                            sdtInfo = sdtInfo.slice(0, -4);
            
                            /* Edit text */
                            sdtInfo = sdtInfo.slice(0, -2);
                            sdtInfo = (sdtInfo+":  遲到")
            
                            alert(sdtInfo);
                        }
                        /* 未到ver */
                        else if(showText.substr(-6) == "未到已到遲到"){
                            sdtInfo = sdtInfo.slice(0, -4);
            
                            /* Edit text */
                            sdtInfo = sdtInfo.slice(0, -2);
                            sdtInfo = (sdtInfo+":  未到")
            
                            alert(sdtInfo);
                        }
    
                    }
                    else{
                        console.log('ErroR... '+showText.length)
                    }
                }
            }



            alert("Done...");



        }


        


        /* -------- Done main script -------- */




    }
}