<div class="panel">

    <label for="" class="has-icon">{{__ "Load your GGB project"}}</label>
    <span class="icon-help tooltipstered tooltip_GGB" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info" aria-describedby="tooltip_GGB"></span>
    <div class="tooltip-content">{{__ 'Use your GGB project id to quickly load your GeoGebra file. You can find the Id at the end of your project URL hosted on GeoGebra Website'}}</div>
    <div class="sectionApp">
        <input id="projectGGBID" type="text" placeholder="project ID eg.: kUmRhNnN" />
        <div id="miniat" class="miniat"></div>
        <button type="button" class="btn btn-primary openAppLib" style="margin-bottom:15px; width:100%; color: black!important; background-color: orange; border-color: orangered; text-shadow:none!important">Open
            Project</button>

    </div>




    <label for="" class="has-icon">{{__ "GeoGebra applet settings"}}</label>
    <span class="icon-help tooltipstered tooltip_GGB" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info" aria-describedby="tooltip_GGB"></span>
    <div class="tooltip-content">{{__ 'Use these parameters to reconfigure the GeoGebra application.Proceed pressing the "change GeoGebra settings" button.'}}</div>


    <div class="paramSection param4" data-section="4">Applets</div>
    <div class="section4 paramContent">
        <input type="radio" name="applet" value="classic" id="classic"><label for="classic">Classic</label><br />
        <input type="radio" name="applet" value="graphing" id="Graphing"><label for="Graphing">Graphing
            Calculator</label><br />
        <input type="radio" name="applet" value="geometry" id="Geometry"><label for="Geometry">Geometry</label><br />
        <input type="radio" name="applet" value="3d" id="3D"><label for="3D">3D Graphing Calculator</label><br />
        <input type="radio" name="applet" value="suite" id="Calculator"><label for="Calculator">Calculator
            Suite</label><br />
        <input type="radio" name="applet" value="evaluator" id="Equation"><label for="Equation">Equation
            Editor</label><br />
        <input type="radio" name="applet" value="scientific" id="Scientific"><label for="Scientific">Scientific
            Calculator</label><br />
        <input type="radio" name="applet" value="notes" id="Notes"><label for="Notes">Notes</label>
    </div>

    <div class="paramSection param1" data-section="1">Size and scale</div>
    <div class="section1 paramContent">
        <div class="panelElem" style="white-space:nowrap">
            <label for="appWidth">Width : </label>
            <input placeholder="900px" style="min-width:80px!important; width:80px!important" type="text" name="appWidth" id="appWidth">
        </div>
        <div class="panelElem" style="white-space:nowrap">
            <label for="appHeight">Height : </label>
            <input placeholder="600px" style="min-width:80px!important; width:80px!important" type="text" name="appHeight" id="appHeight">
        </div>
        <div class="panelElem" style="white-space:nowrap">
            <input type="checkbox" name="appDragZoom" id="appDragZoom">
            <label for="appDragZoom">Enable Shift Drag Zoom</label>
        </div>
        <div class="panelElem" style="white-space:nowrap">
            <input type="checkbox" name="appShowZoomBT" id="appShowZoomBT">
            <label for="appShowZoomBT">Show Zoom Buttons</label>
        </div>
        <div class="panelElem" style="white-space:nowrap">
            <input type="checkbox" name="appShowFScreenBT" id="appShowFScreenBT">
            <label for="appShowFScreenBT">show Fullscreen Button</label>
        </div>



    </div>

    <div class="paramSection param2" data-section="2">International</div>
    <div class="section2 paramContent">

        <label for="language">Language</label>
        <select class="gwt-ListBox" id="language">
            <option value="sq">Albanian / Gjuha Shqipe</option>
            <option value="ar">‎Arabic‎ / ‏العربية‏</option>
            <option value="ar-MA">‎Arabic (Morocco)‎ / ‏العربية (المغرب)‏</option>
            <option value="ar-TN">‎Arabic (Tunisia)‎ / ‏العربية (تونس)‏</option>
            <option value="hy">Armenian / Հայերեն</option>
            <option value="eu">Basque / Euskara</option>
            <option value="bn">Basque / Euskara</option>
            <option value="bs">Bosnian / босански</option>
            <option value="bg">Bulgarian / български език</option>
            <option value="ca">Catalan / Català</option>
            <option value="ca-XV">Catalan / Català (Valencià)</option>
            <option value="zh-CN">Chinese Simplified / 简体中文</option>
            <option value="zh-TW">Chinese Traditional / 繁體中文</option>
            <option value="hr">Croatian / Hrvatska</option>
            <option value="cs">Czech / Čeština</option>
            <option value="da">Danish / Dansk</option>
            <option value="nl">Dutch / Nederlands (België)</option>
            <option value="nl-NL">Dutch / Nederlands (Nederland)</option>
            <option value="en">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="en-AU">English (Australia)</option>
            <option value="et">Estonian / Eesti keel</option>
            <option value="fil">Filipino</option>
            <option value="fi">Finnish / Suomi</option>
            <option value="fr">French / Français</option>
            <option value="gl">Galician / Galego</option>
            <option value="ka">Georgian / ქართული ენა</option>
            <option value="de">German / Deutsch</option>
            <option value="de-AT">German / Deutsch (Österreich)</option>
            <option value="el">Greek / Ελληνικά</option>
            <option value="he">Hebrew / עִבְרִית</option>
            <option value="hi">Hindi / मानक हिन्दी</option>
            <option value="hu">Hungarian / Magyar</option>
            <option value="is">Icelandic / Íslenska</option>
            <option value="id">Indonesian / Bahasa Indonesia</option>
            <option value="it">Italian / Italiano</option>
            <option value="ja">Japanese / 日本語</option>
            <option value="kn">Kannada</option>
            <option value="kk">Kazakh / Қазақ тілі</option>
            <option value="km">Khmer</option>
            <option value="ko">Korean / 한국말</option>
            <option value="lv">Latvian / Latviešu valoda</option>
            <option value="lt">Lithuanian / Lietuvių kalba</option>
            <option value="ms">Malay / Bahasa Malaysia</option>
            <option value="mk">Macedonian / Македонски јазик</option>
            <option value="mn">Mongolian / Монгол хэл</option>
            <option value="ne">Nepalese / नेपाली</option>
            <option value="nb">Norwegian / Bokmål</option>
            <option value="nn">Norwegian / Nynorsk</option>
            <option value="fa">Persian / فارسی</option>
            <option value="pl">Polish / Język polski</option>
            <option value="pt">Portuguese / Português (Brasil)</option>
            <option value="pt-PT">Portuguese / Português (Portugal)</option>
            <option value="ro">Romanian / Română</option>
            <option value="ru">Russian / Русский язык</option>
            <option value="si">Sinhala / සිංහල</option>
            <option value="sr">Serbian / српски</option>
            <option value="sk">Slovak / Slovenský jazyk</option>
            <option value="sl">Slovenian / Slovenščina</option>
            <option value="es">Spanish / Español</option>
            <option value="es-UY">Spanish / Español (Uruguay)</option>
            <option value="es-ES">Spanish / Español (España)</option>
            <option value="sv">Swedish / Svenska</option>
            <option value="ta">Tamil / தமிழ்</option>
            <option value="th">Thai / ภาษาไทย</option>
            <option value="tr">Turkish / Türkçe</option>
            <option value="uk">Ukrainian / Українська мова</option>
            <option value="ug">Uyghur</option>
            <option value="uz">Uzbek</option>
            <option value="vi">Vietnamese / Tiếng Việt</option>
            <option value="cy">Welsh / Cymraeg</option>
            <option value="xh">Xhosa / isiXhosa</option>
            <option value="yi">Yiddish / ייִדיש</option>
        </select>

    </div>

    <div class="paramSection param5" data-section="5">Change GGB settings</div>
    <div class="section5 paramContent" style="text-align: center;">
        <div>You are about to change the GGB settings. Be careful, the application will be reset. Please confirm.</div>
        <br>
        <button type="button" class="btn btn-primary neGGBPCIApp" style="color: black!important; background-color: orange; border-color: orangered; text-shadow:none!important">Confirm
            modification</button>
    </div>
    <hr>
    <div class="optionOther">
        <input type="checkbox" name="MenuBar" id="MenuBar"><label for="MenuBar">Show Menu Bar</label><br />
        <input type="checkbox" name="ToolBar" id="ToolBar"><label for="ToolBar">Show Tool Bar</label><br />
        <input type="checkbox" name="RightClick" id="RightClick"><label for="RightClick">Enable Right
            Click</label><br />
    </div>
    <hr>

    <div style="text-align:center">
        <button type="button" class="btn btn-primary btn-lg saveAppData" style="color: black!important; background-color: skyblue; border-color: skyblue; text-shadow:none!important">Save
            App data</button>
    </div>


</div>

<div>
    <input type="checkbox" name="saveB64" id="saveB64">
    <label for="saveB64"> Save GGB-file (B64)</label>
    <span class="icon-help tooltipstered" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info"></span>
    <div class="tooltip-content">{{__ 'Enable this option to allow test takers to retrieve the last state of the application\'s interactive elements when returning to an item during a non-linear test, or during test review. You can disable this option in linear tests to reduce the volume of results, but you won\'t be able to analyze the test taker\'s input in detail
.'}}
    </div>
    
</div>


<div class="panel">
    <hr>
    <label for="" class="has-icon">{{__ "Response identifier"}}</label>
    <span class="icon-help tooltipstered" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info"></span>
    <div class="tooltip-content">{{__ 'The identifier of the choice. This identifier must not be used by any other response or item variable. An identifier is a string of characters that must start with a Letter or an underscore ("_") and contain only Letters, underscores, hyphens
        ("-"), period (".", a.k.a. full-stop), Digits, CombiningChars and Extenders.'}}</div>

    <input type="text" name="identifier" value="{{identifier}}" placeholder="e.g. RESPONSE" data-validate="$notEmpty; $qtiIdentifier; $availableIdentifier(serial={{serial}});">
</div>

<div class="panel">
    <label for="" class="has-icon">{{__ "Response treatment"}}</label>
    <span class="icon-help tooltipstered" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info"></span>
    <div class="tooltip-content">{{__ 'The GGB PCI can be use without storing any results as a helper tool.You can choose to use the GGB-PCI scoring system. Click on Response tab and choose your response processing method: match correct if you want to use the TAO score system or
        Raw data : it is expecting to collect 3 types of data. Respect the naming and type of your data in GGB\'s Algebra panel :answers(string), correct(boolean), score(integer). Attention : think to hide the algebra panel and the tool bar. You can also
        store the whole GGB-file under B64 format. Click on the option below'}}
    </div>

    <hr>

    <div style="font-size: x-small;">Any question ?<br /> <a href="mailto:jean.philippe.riviere@gmail.com ?subject=GGB PCI contact">Jean-Philippe Riviere</a>
    </div>


</div>