import React, { useState } from 'react';
import './Cookies.css';

export default function CheckCookies() {
    const [hide, setHide] = useState(false);
    const showModalStyle = {
        display: "block"
      };
    
      const hideModalStyle = {
        display: "none"
      };

    const cookieDate = localStorage.getItem('cookieDate');
    // Если записи про куки нет или она просрочена на 1 год (31536000 мсек в году), 
    //то показываем информацию про куки
    if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
       console.log(cookieDate);
    }

    // В локальное хранилище записывается текущая дата
    function cookieHandler() {
        localStorage.setItem( 'cookieDate', Date.now() );
        console.log( localStorage.setItem( 'cookieDate', Date.now() ));
        setHide(!hide);
    }

     return(
        <>
        <div className="cookies_notification" style={hide ? hideModalStyle : showModalStyle }>
            <p className="cookies_text">Cookies and IP addresses allow us to deliver and improve our web content and to provide you with a personalized experience. 
            Our website uses cookies and collects your IP address for these purposes. <a className="cookies_learnMore" href="https://www.jetbrains.com/legal/docs/company/useterms/">Learn more</a></p>
            <div className="cookies_block">
                <div className="cookies_block_imgTop"></div>
                    <div className="cookies_blockText">
                        <div className="cookies_block_imgLeft"></div>
                        <div className="cookies_blockText_text">
                            <p className="cookies_blockText_textMain">JetBrains may use cookies and my IP address to collect individual statistics and to provide me with personalized offers and ads subject to the <a className="cookies_rules" href="https://www.jetbrains.com/legal/docs/privacy/privacy/">Privacy Policy</a> and the <a className="cookies_rules" href="https://www.jetbrains.com/legal/docs/company/useterms/">Terms of Use</a>. JetBrains may use <a className="cookies_rules" href="https://www.jetbrains.com/legal/docs/privacy/privacy/">third-party services</a> for this purpose. I can revoke my consent at any time by visiting the <a className="cookies_rules" href="https://www.jetbrains.com/opt-out/">Opt-Out page</a>.</p>
                        </div>
                        <button onClick={cookieHandler}  className="button cookies_accept">[<span>Y</span>es, I agree]</button>
                        <button onClick={() => {setHide(!hide)}} className="button cookies_cancel">[<span>N</span>o, thanks]</button>
                        <div className="cookies_block_imgRight"></div>
                    </div>
                <div className="cookies_block_imgTop"></div>
            </div>
            <p className="cookies_rt">~ root#</p>
            <div onClick={() => {setHide(!hide)}} className="cookies_close">[X]</div>
        </div>
        </>
    )
}
