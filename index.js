/*
    SCRIPT BY SUPARDYKE
    WHATSAP FLOATING BUTTON
*/
(function () {
    var options = {
        whatsapp: "+23480XXXXXXX", // WhatsApp number
        company_logo_url: "", // URL of company logo (png, jpg, gif)
        greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.", // Text of greeting message
        call_to_action: "Message us", // Call to action
        position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();