<%--
  Created by IntelliJ IDEA.
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>




<html>
    <head>
        <!-- Meta -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1">
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="google" content="notranslate">
        <meta name="format-detection" content="telephone=no">
        <!-- Stylesheet -->
        <style type="text/css">
            html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,img,ins,kbd,q,s,samp,small,strike,sub,sup,tt,var,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}
            article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
            body{line-height:1}
            ol,ul{list-style:none}
            blockquote,q{quotes:none}
            blockquote:before,blockquote:after,q:before,q:after{content:none}
            table{border-collapse:collapse;border-spacing:0}
            textarea{resize:none}
            address{font-style:normal}
            input,textarea,button{outline:none}
            /*** --- Document params --- ***/
            html,
            body {
                height: 100%;
                background: #101114;
                color: #6c7382;
                font: normal 12px/1.3 Arial, Helvetica, sans-serif;
                -webkit-font-smoothing: antialiased;
            }


            /*** --- Fonts --- ***/
            @font-face {
                font-family: 'Tele2 Bold';
                src: url(data:application/x-font-woff;charset=utf-8;base64,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) format('woff'),
                    url('tele2-bold-webfont.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
            }


            /*** --- Links --- ***/
            a {
                color: #687083;
                text-decoration: underline;
                outline: none;
            }
            a:hover {
                color: #384053;
            }


            /*** --- Page --- ***/
            h1.title > div {
                font-size: inherit !important;
                font-weight: 500 !important;
                white-space: normal !important;
            }

            .page {
                position: relative;
                min-height: 100%;
            }

            .container {
                padding: 15px 10px 10px;
                margin: 0 auto;
            }

            .main-content {
                background-color: #f7f8f8;
                padding: 20px 5% 20px 5%;
            }

            .title {
                margin-bottom: 20px;
                font: normal 23px/1.2 'Tele2 Bold', Arial, Helvetica, sans-serif;
                -webkit-font-smoothing: antialiased;
                color: #383d43;
            }

            .payment-info tr td {
                padding-bottom: 9px;
                padding-right: 5px;
            }
            .payment-info tr td:first-child {
                color: #bec6cf;
            }
            .payment-info tr td {
                color: #6c7382;
            }

            .note {
                margin-top: 17px;
                line-height: 1.375;
            }
            .note span {
                color: #383d43;
                white-space: nowrap;
                text-decoration: none !important;
            }


            .form {
                margin-top: 11px;
            }
            .field {
                display: block;
                width: 100%;
                padding: 11px 12px;
                margin: 0 0 11px;
                border: 1px solid #e4e9ee;
                background: #FFF;
                color: #373c43;
                font: normal 16px/18px Arial, Helvetica, sans-serif;
                -webkit-font-smoothing: antialiased;
                -webkit-appearance: none;
                -webkit-border-radius: 0;
                -moz-border-radius: 0;
                border-radius: 0;
                -webkit-box-shadow: none;
                -moz-box-shadow: none;
                box-shadow: none;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                -ms-box-sizing: border-box;
                box-sizing: border-box;
                min-height: 40px;
                height: 42px;
            }
            .field:focus {
                border-color: #c4c9ce;
            }
            .field_wrapper {
                position: relative;
            }

            /* First */
            .field_number {
                margin-bottom: 8px;
            }
            .field_wrapper .error {
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAABVUlEQVRIx2NgIAF80Db0AOIWEM1ACwA0eCMQ/0fC26ltQTvU4CdAXA3E96D8mdSyQA6IP0ANtYGKGQDxH6iYLjUsWQQ1bCma+DSo+EZKLbCBGvQTiBXR5ISA+DNU3psSS7ZDDWnHIV8Bld9LrgWZSJHNg0MNGxDfhqqrIMeSS1DNUQTUeUPVPQRiflIs6IVqPIwm7gIVd0ET3wIVn09OkjUj0hIVaOIAyRkTY8kKbEkWnyVQuQlEJWmk8AUlTWkSLQEl6bcE4xGUFPGlFHyWoKXIY7gsKIIqACVJNhxqjPGFO1CcGYjP48xbSEk2kECQ/ieylAAlHjlkiZnYkiwOQ8qJULMUJUmDSlGoAKhUNSCgGRRcuwklU7QkbQMSmA/lTCPChXgjHkcdtI4BqexRoXJFJwo19zWyT1qgwUEtXIfsE3u0upva2BXmNXtosXCGingCzAIAaR3CJY5MiGAAAAAASUVORK5CYII=) 0 0 no-repeat;
                width: 25px;
                height: 23px;
                position: absolute;
                top: 9px;
                right: 10px;
                display: none;
            }
            .field_wrapper .error-text {
                color: #f02b31;
                font-size: 12px;
                display: none;
            }

            /* errors form */
            .form.error .field {
                border: 1px solid #f02b31;
            }
            .form.error .error,
            .form.error .error-text {
                display: block;
            }

            /* Second */
            .label-sms {
                padding-top: 8px;
                display: inline-block;
            }
            .field_wrapper .field_sms {
                margin-top: 12px;
                margin-bottom: 3px;
            }
            .field_wrapper .error-text.error-sms {
                padding-top: 5px;
                margin-bottom: 6px;
            }
            .field_wrapper .resend {
                font-size: 12px;
                color: #6c7382;
                border-bottom: 1px solid #6c7382;
                display: inline-block;
                cursor: pointer;
                text-decoration: none;
            }

            /* placeholder */
            .field::-webkit-input-placeholder { color: #bec6cf; }
            .field:-moz-placeholder { color: #bec6cf; }
            .field::-moz-placeholder { color: #bec6cf; }
            .field:-ms-input-placeholder { color: #bec6cf; }

            .buttons {
                margin-top: 33px;
            }
            .buttons.tel{
                margin-top: 20px;
            }
            .button {
                padding: 0;
                height: 40px;
                min-height: 40px;
                display: block;
                width: 100%;
                border: none;
                color: #FFF;
                font: normal 14px 'Tele2 Bold', Arial, Helvetica, sans-serif;
                -webkit-font-smoothing: antialiased;
                cursor: pointer;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                background: #a4c800;
                background: -moz-linear-gradient(top, #a4c800 0%, #86b600 100%);
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a4c800), color-stop(100%,#86b600));
                background: -webkit-linear-gradient(top, #a4c800 0%,#86b600 100%);
                background: -o-linear-gradient(top, #a4c800 0%,#86b600 100%);
                background: -ms-linear-gradient(top, #a4c800 0%,#86b600 100%);
                background: linear-gradient(to bottom, #a4c800 0%,#86b600 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a4c800', endColorstr='#86b600',GradientType=0 );
                /* for nokia browsers */
                text-align: center;
                line-height: 40px;
                outline: none;
            }
            .button:hover {
                background: #b6d300;
                background: -moz-linear-gradient(top, #b6d300 0%, #9ec500 100%);
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b6d300), color-stop(100%,#9ec500));
                background: -webkit-linear-gradient(top, #b6d300 0%,#9ec500 100%);
                background: -o-linear-gradient(top, #b6d300 0%,#9ec500 100%);
                background: -ms-linear-gradient(top, #b6d300 0%,#9ec500 100%);
                background: linear-gradient(to bottom, #b6d300 0%,#9ec500 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b6d300', endColorstr='#9ec500',GradientType=0 );
            }
            .button:active {
                background: #89b800;
                background: -moz-linear-gradient(top, #89b800 0%, #a4c800 100%);
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#89b800), color-stop(100%,#a4c800));
                background: -webkit-linear-gradient(top, #89b800 0%,#a4c800 100%);
                background: -o-linear-gradient(top, #89b800 0%,#a4c800 100%);
                background: -ms-linear-gradient(top, #89b800 0%,#a4c800 100%);
                background: linear-gradient(to bottom, #89b800 0%,#a4c800 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#89b800', endColorstr='#a4c800',GradientType=0 );
                -webkit-box-shadow: inset 0 5px 5px rgba(0,0,0,.125);
                box-shadow: inset 0 5px 5px rgba(0,0,0,.125);
            }
            .button-confirm {
                margin-bottom: 10px;
            }
            .operamini .button-cancel:before {
                content: '';
                display: inline-block;
                height: 40px;
                vertical-align: middle;
            }
            .button-cancel {
                background: #c3cbd2;
                background: -moz-linear-gradient(top, #c3cbd2 0%, #afbbc4 100%);
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#c3cbd2), color-stop(100%,#afbbc4));
                background: -webkit-linear-gradient(top, #c3cbd2 0%,#afbbc4 100%);
                background: -o-linear-gradient(top, #c3cbd2 0%,#afbbc4 100%);
                background: -ms-linear-gradient(top, #c3cbd2 0%,#afbbc4 100%);
                background: linear-gradient(to bottom, #c3cbd2 0%,#afbbc4 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c3cbd2', endColorstr='#afbbc4',GradientType=0 );
                margin-right: 1%;
                text-align: center;
                line-height: 40px;
                text-decoration: none;
            }
            .button-cancel:hover {
                background: #cfd6dc;
                background: -moz-linear-gradient(top, #cfd6dc 0%, #bac5cc 100%);
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cfd6dc), color-stop(100%,#bac5cc));
                background: -webkit-linear-gradient(top, #cfd6dc 0%,#bac5cc 100%);
                background: -o-linear-gradient(top, #cfd6dc 0%,#bac5cc 100%);
                background: -ms-linear-gradient(top, #cfd6dc 0%,#bac5cc 100%);
                background: linear-gradient(to bottom, #cfd6dc 0%,#bac5cc 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd6dc', endColorstr='#bac5cc',GradientType=0 );
                color: #FFF;
            }
            .button-cancel:active {
                background: #b5c0c9;
                background: -moz-linear-gradient(top, #b5c0c9 0%, #c6cfd6 100%);
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b5c0c9), color-stop(100%,#c6cfd6));
                background: -webkit-linear-gradient(top, #b5c0c9 0%,#c6cfd6 100%);
                background: -o-linear-gradient(top, #b5c0c9 0%,#c6cfd6 100%);
                background: -ms-linear-gradient(top, #b5c0c9 0%,#c6cfd6 100%);
                background: linear-gradient(to bottom, #b5c0c9 0%,#c6cfd6 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5c0c9', endColorstr='#c6cfd6',GradientType=0 );
                -webkit-box-shadow: inset 0 5px 5px rgba(0,0,0,.125);
                box-shadow: inset 0 5px 5px rgba(0,0,0,.125);
            }

            /* ie10 fix */
            input::-ms-clear { display: none; }


            @media only screen and (min-width: 720px) {
                body {
                    font-size: 12px;
                }
            }
            @media only screen and (min-width: 320px) {
                body {
                    font-size: 12px;
                }
                .title {
                    font-size: 30px;
                }
            }

            @media only screen and (min-width: 400px) {
                body {
                    font-size: 12px;
                }
                .container {
                    max-width: 400px;
                    padding: 35px 25px 45px;
                }
                .main-content {
                    padding: 38px 49px 44px 57px;
                }
                .title {
                    font-size: 30px;
                }
                .payment-info tr td {
                    padding-right: 11px;
                }
                .button {
                    max-width: 139px;
                    width: 48%;
                    display: inline-block;
                }
                .button-confirm {
                    float: right;
                }
            }

            @media only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
                .field_wrapper .error {
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAACtklEQVRo3tVZUURDURgesaclRom0h4weMpapp+ilh9hTijFGjBEjIht7GjEiIkavMeolYvTQU8YeUqKniBF7KiUiIuoc/nH6/bs759x7ds+9fC9n5//u/92d+53z/zcUMnx9zM2PMkyEgnqx5GsM9wy/gEcYmwyKgAWGW0EAxgvDehCEOIkQxUzbLKJOJP0JiePxpq0ickSyB8Lv28TvRRuFtFGSLWJOA83pMERsErGLEvxhSBLzpmCpiXMrtoiIMXyg5OoO8yvEEkvYIKSKknpjiDrMjzB0ZYUPS8QS8XS3JOKyRFzOTyH45X1iCEvGtlBs2y8ReeKpphXik2AKYvy2H0Ie3G5wxAb6zDA2TBHYeb4Z4ho8k4QdV/2025oLvjKxRJeGIWSfsNuIC74wmITI2TAtIq1jt5q8eZNCmuhmvHAacZh/JcwtKXK3TYkoqq5lRSFxwo53h2G3DYkYaSF97JibSsyk3X7xk6wBIVEwD/Fe+16JSBBLqiYZqyQEYrbcnBhU/u6urN1qChlB3ReOUxPla1YhXlmIw6k670bIwPLVhBCIvUD3fvDKbsny1aCQOJzh9MtifgKFk6hIcqLxMLSFCN1K/bKYKF8/ZeyW4DkWOAoa8VRZfOTmRStrLs+SwLGiyZHVsmO+hHTLV4KrIPDMeGg6TR27TbtIYKXHY6DJUVRRfukygRTwvBtodNBlsWy30MeOzdTAsli1W6j4svdQ8ICPKouTg8rXqAc3FjmvPOCjyuK62F/yvHw1IQQ4M0S+q9RRxLF89VtIny7lHh88Q4OZkOUXy3EZ5XzNB+/QYCoAQsZRzq988NDKDy/OQjZRzud8cINof/JD4yJsaLahQuwnO70TZkfik7Kt4A9+tt9fFSQUqHX3GCABnb6nBdg51/j3cYYbcDTbcAjv9b9Ozh+M8kSCepYSbwAAAABJRU5ErkJggg==) 0 0 no-repeat;
                    background-size: 25px 23px;
                }
            }
        </style>

        <script language="JavaScript" type="text/javascript" >
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", init, false);
            }

            function disableBackButton() {
                //    window.alert("window.history");
                window.history.forward();
                //    setTimeout(disableBackButton(), 500);

            }

            function dummy4Firefox() {

            }


            function forwardGo() {
                window.history.go(1);
            }
            function backGo() {
                window.history.go(-1)
            }


        </script>
    </head>
    <body>


        <div class="page">
            <div class="container">
                <div class="main-content">

                    <div class="avgnum"><br/><br/><%=request.getSession().getAttribute("errText") == null ? "" : request.getSession().getAttribute("errText")%>
                    </div>
                    <div class="avgnum1"><%=request.getSession().getAttribute("successText") == null ? "" : request.getSession().getAttribute("successText")%>
                    </div>
                    <div class="alink">
                        <br/>
                        <%= request.getSession().getAttribute("fUrl") == null ? "" : request.getSession().getAttribute("fUrl")%>
                        <br/>
                    </div>
                </div>
            </div>
        </div>

    </body>
</html>
