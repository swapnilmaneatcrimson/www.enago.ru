/********************************************************************
    File:   
        common.js
    Brief:  
        Implementation of common functionality for whole website
    Dependencies:
        jquery-1.3.2.min.js             (jQuery library)
        jquery.easing.1.2.js            (jQuery library plugin)          
        cufon-yui.js                    (font replacement tool) 

*********************************************************************/

/*************************************
    BROWSER DETECTING CODE
**************************************/
   
var g_browserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++)    {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return
parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {     string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {        // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {         // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
               string: navigator.userAgent,
               subString: "iPhone",
               identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
// init detection
g_browserDetect.init();

// alias to jQuery library, function noConflict release control of the $ variable 
var $j = jQuery.noConflict();

/**************************
    GLOBAL FUNCTIONALITY
**************************/

// global settings
function setupGlobal()
{
    // blur focus then user click on <a> element
    $j("a").focus(function(){$j(this).blur();});
    // the same for object with id searchBoxBtn
    $j("#searchBoxBtn").focus(function(){$j(this).blur();}); 
}


/**************************
   COMMUNITY BUTTONS
**************************/

// function change image source for community buttons then user hover it with mouse
function setupCommunityButtons()
{
    // set hover action for flickr, twitter, facebook and rss button
    $j("#enagoBtn, #enagoTWBtn, #enagoCNBtn, #enagoJPBtn").hover(
        function()
        {
            $j(this).css("background-position", "0px -26px");
        },
        function()
        {
            $j(this).css("background-position", "0px 0px"); 
        }
    );    
} // end of function setupCommunityButtons


/**************************
   TOOLTIP TEXT
**************************/

function setupToolTipText()
{  
    // when user move cursor on element witch class textTooltipCenterTop
    // fallowing code will be executed, one function when the mouse is move on
    // element, and one function when mouse cursor is moved out,
    //       
    $j(".textTooltipCenterTop, .textTooltipLeftTop, .textTooltipRightTop").hover(function(e)
    {
        var yoffset = -10;
        var tip = $j(this).find(".desc").html();

        // adding to page text preview container
        $j("body").append(
            "<div id='textPreview'><div id='textPreviewDesc'></div></div>");
        
        // set tip text    
        $j("#textPreviewDesc").html(tip);
        // get width off tip container
        var textToolTipWidth = $j("#textPreview").width();
                
        // check the class name, and calculate display offset
        var xoffset = 0;
        if($j(this).hasClass("textTooltipCenterTop"))
        {
            xoffset = -Math.round(textToolTipWidth/2)
        } else
        if($j(this).hasClass("textTooltipLeftTop"))
        {
            xoffset = -textToolTipWidth;
        } else
        if($j(this).hasClass("textTooltipRightTop"))
        {
            xoffset = 0;
        }                
 
        // set position of tip container and animte it
        $j("#textPreview").css("width", textToolTipWidth+"px")
            .css("left", (e.pageX + xoffset) + "px")
            .css("top", (e.pageY + yoffset - $j("#textPreview").height()) + "px")
            .css("visibility", "visible")
            .css("opacity", "0.0")
            .animate({opacity: 1.0}, 400);                                   
    },
    // when hover is out, we need to remove #textPreview container from page
    function()
    {
        $j("#textPreview").remove();
    });    
    
    // bind function to mouse move event, we move the tooltip with mouse cursor
    $j(".textTooltipCenterTop, .textTooltipLeftTop, .textTooltipRightTop").mousemove(
    function(e)
    {
        var yoffset = -10;
        var textToolTipWidth = $j("#textPreview").width();
         
        // check the class name, and calculate display offset
        var xoffset = 0;
        if($j(this).hasClass("textTooltipCenterTop"))
        {
            xoffset = -Math.round(textToolTipWidth/2)
        } else
        if($j(this).hasClass("textTooltipLeftTop"))
        {
            xoffset = -textToolTipWidth;
        } else
        if($j(this).hasClass("textTooltipRightTop"))
        {
            xoffset = 0;
        }        
        
        // set postion of tip container        
        $j("#textPreview")
            .css("top",(e.pageY + yoffset - $j("#textPreview").height()) + "px")
            .css("left",(e.pageX + xoffset) + "px");
    });
}; // end of function setupToolTipText



