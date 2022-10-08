import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

export default function DeskTopHP({topA,page1}) {

    const [firstA,setfirstA] = useState(false)
    const [secondA,setSecondA] = useState(false)

    useEffect(()=>{
        const arr = [...topA]
        setfirstA(arr.pop())
        setSecondA(arr)
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.topWrapper}>
                <div className={styles.topBar}>
                    <div className={styles.subcontainer + " " + styles.row}>
                        <div className={styles.headerLogo + " " + styles.section} id="header-logo" name="Header Logo"><div className="widget Header" data-version="2" id="Header1">
                            <div className="header-widget">
                                <a className="header-image-wrapper" href="https://techno-omtemplates.blogspot.com/">
                                    <img alt="Techno" data-height="40" data-width="160" src="https://blogger.googleusercontent.com/img/a/AVvXsEgeyTWYH7C6s3wohQdBb-BCA5QGT2apXCeoAjAZLmsnZw6XnvCFtMMV2PmPMpnjVVeiM0oNV8P_eya5hh1fTVwIWr4Vg9nKK07gMsalzFKzCACwgcEQlSSDn_uRI_k-9P1-8x4u_Yi0HH0NoLxxLspuXa9KYDblTlnc6FP76DVMv6iDFaurSwG6r8Dc=s160" />
                                </a>
                            </div>
                        </div></div>
                        <div className={styles.headerMenu}>

                            <span className="slide-menu-toggle"></span>
                            <div className="main-menu section" id="main-menu" name="Main Menu"><div className="widget LinkList show-menu" data-version="2" id="LinkList74">
                                <ul id="main-menu-nav" role="menubar">
                                    <li><a href="/" role="menuitem">Home</a></li>
                                    <li className={styles.hasSub}><a href="#" role="menuitem">Features</a><ul className="sub-menu m-sub"><li className={styles.hasSub}><a href="#" role="menuitem">Multi DropDown</a><ul className="sub-menu2 m-sub"><li><a href="#" role="menuitem">DropDown 1</a></li><li><a href="#" role="menuitem">DropDown 2</a></li><li><a href="#" role="menuitem">DropDown 3</a></li></ul></li><li><a href="https://techno-omtemplates.blogspot.com/p/post-format-and-page-markup.html" role="menuitem">ShortCodes</a></li><li><a href="https://www.sorabloggingtips.com/2017/01/how-to-add-sitemap-widget-in-blogspot-blogs.html" role="menuitem">SiteMap</a></li><li><a href="https://techno-omtemplates.blogspot.com/omtemplates" role="menuitem">Error Page</a></li></ul></li>
                                    <li className="has-sub mega-menu">
                                        <a href="/search/?&amp;max-results=9" role="menuitem">Mega Menu</a>
                                        <ul className="mega-menu-inner"><div className="mega-item item-0">
                                            <div className="mega-content">
                                                <div className="post-image-wrap"><a className="post-image-link" href="https://techno-omtemplates.blogspot.com/2016/03/big-saving-days-sale-on-flipkart-starts.html"><img className="post-thumb lazy-yard" alt="" src="https://1.bp.blogspot.com/-5GxwqmyLW3M/YPOkmOUSkCI/AAAAAAAAHdU/9gmN4qalwvkzfjAxmmuWBEWNFHLfksqVQCLcBGAsYHQ/w268-h140-p-k-no-nu/11%2B%25281%2529.jpg" /></a><span className="post-tag">Apps</span></div><h2 className="post-title"><a href="https://techno-omtemplates.blogspot.com/2016/03/big-saving-days-sale-on-flipkart-starts.html">Big Saving Days sale on Flipkart starts.</a></h2><div className="post-meta"><span className="post-date">March 18, 2016</span></div></div></div><div className="mega-item item-1"><div className="mega-content"><div className="post-image-wrap"><a className="post-image-link" href="https://techno-omtemplates.blogspot.com/2016/03/xiaomi-is-going-to-launch-mi-11-ultra.html"><img className="post-thumb lazy-yard" alt="" src="https://1.bp.blogspot.com/-RP4lY5hxXEk/YPOkmJLoSoI/AAAAAAAAHdY/XUdVfrrOBocdXSkOScj9JsX9z7JZh-5DwCLcBGAsYHQ/w268-h140-p-k-no-nu/13%2B%25281%2529.jpg" /></a><span className="post-tag">Business</span></div><h2 className="post-title"><a href="https://techno-omtemplates.blogspot.com/2016/03/xiaomi-is-going-to-launch-mi-11-ultra.html">Xiaomi is going to launch the Mi 11 Ultra 67W fast charge.</a></h2><div className="post-meta"><span className="post-date">March 17, 2016</span></div></div></div><div className="mega-item item-2"><div className="mega-content"><div className="post-image-wrap"><a className="post-image-link" href="https://techno-omtemplates.blogspot.com/2016/03/brampton-electric-hand-tiny-folding-e.html"><img className="post-thumb lazy-yard" alt="" src="https://1.bp.blogspot.com/-5am8HiZAdbY/YPOkm4HAIfI/AAAAAAAAHdg/ui1pMxfb6aARzZPp4rRdrKcFdXA5H7lDgCLcBGAsYHQ/w268-h140-p-k-no-nu/14%2B%25281%2529.jpg" /></a><span className="post-tag">Computer</span></div><h2 className="post-title"><a href="https://techno-omtemplates.blogspot.com/2016/03/brampton-electric-hand-tiny-folding-e.html">Brampton Electric hand A tiny folding e-bike.</a></h2><div className="post-meta"><span className="post-date">March 17, 2016</span></div></div></div><div className="mega-item item-3"><div className="mega-content"><div className="post-image-wrap"><a className="post-image-link" href="https://techno-omtemplates.blogspot.com/2016/03/lenovo-yoga-7-review-benchmark.html"><img className="post-thumb lazy-yard" alt="" src="https://1.bp.blogspot.com/-rMuHRGOlTds/YPQgd8Z9qtI/AAAAAAAAHeE/XKYKe8plYyg960KO8Qqh3kETPaXiOUhMwCLcBGAsYHQ/w268-h140-p-k-no-nu/21%2B%25281%2529.jpg" /></a><span className="post-tag">Game</span></div><h2 className="post-title"><a href="https://techno-omtemplates.blogspot.com/2016/03/lenovo-yoga-7-review-benchmark.html">Lenovo Yoga 7 review The benchmark.</a></h2><div className="post-meta"><span className="post-date">March 17, 2016</span></div></div></div></ul></li>
                                    <li className={styles.hasSub}><a href="#" role="menuitem">Documentation</a><ul className="sub-menu m-sub"><li><a href="https://www.sorabloggingtips.com/2022/09/how-to-setup-techno-blogger-template.html" role="menuitem">Web Documentation</a></li><li><a href="https://youtu.be/qsczvGWqydY" role="menuitem">Video Documentation</a></li></ul></li>
                                    <li><a href="https://www.omtemplates.com/2022/09/techno-blogger-template.html" role="menuitem">Download This Template</a></li>
                                </ul>
                            </div></div>
                            <div className="top-bar-social social mobile-social"><ul>
                                <li className="facebook"><a href="https://www.facebook.com/omtemplates/" target="_blank" title="facebook"></a></li>
                                <li className="twitter"><a href="https://twitter.com/LiveBlogger1" target="_blank" title="twitter"></a></li>
                                <li className="instagram"><a href="https://www.instagram.com/livebloggerofficial/" target="_blank" title="instagram"></a></li>
                                <li className="pinterest"><a href="#" target="_blank" title="pinterest"></a></li>
                            </ul></div>
                        </div>
                        <div className="top-bar-social social section" id="top-bar-social" name="Social Top"><div className="widget LinkList" data-version="2" id="LinkList73">
                            <div className="widget-content">
                                <ul>
                                    <li className="facebook"><a href="https://www.facebook.com/omtemplates/" target="_blank" title="facebook"></a></li>
                                    <li className="twitter"><a href="https://twitter.com/LiveBlogger1" target="_blank" title="twitter"></a></li>
                                    <li className="instagram"><a href="https://www.instagram.com/livebloggerofficial/" target="_blank" title="instagram"></a></li>
                                    <li className="pinterest"><a href="#" target="_blank" title="pinterest"></a></li>
                                </ul>
                            </div>
                        </div></div>
                    </div>
                </div>
                <div className={styles.mainContent}>
                    {firstA && (
                        <div className={styles.articlesFirst}>
                            <div className={styles.img}>
                                <Image
                                    src={firstA?.poster}
                                    width={500}
                                    height={400}
                                    layout={"fill"}
                                    
                                />
                            </div>
                            <div className={styles.articleInfo}>
                                <div className={styles.cat}>{firstA?.category?.name || "A LA Une"}</div>
                                <h2 className={styles.title}>
                                    {firstA?.title}
                                </h2>
                                <div className={styles.desc}>
                                    {firstA?.description}
                                </div>
                                <div className={styles.more}>
                                    READ MORE
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={styles.articlesSecond}>
                        {secondA?.length > 0 && (
                            secondA?.map((a,index)=>{
                                return(
                                    <div key={index} className={styles.article}>
                                        <div className={styles.img}>
                                            <Image
                                                src={a?.poster||"https://picsum.photos/400/300"}
                                                width={500}
                                                height={400}
                                                layout={"fill"}
                                                
                                            />
                                        </div>
                                        <div className={styles.articleInfo}>
                                            <div className={styles.cat}>{a?.category?.name || "A LA Une"}</div>
                                            <h2 className={styles.title}>
                                                {a?.title}
                                            </h2>
                                        </div>
                                    </div>
                                )

                            })
                        )}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
