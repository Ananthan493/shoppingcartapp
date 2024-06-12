import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewnews = () => {
    const [news,changeNews]=useState(
        [
            {
              "source": {
                "id": null,
                "name": "BusinessLine"
              },
              "author": "Team BL",
              "title": "RBI Monetary Policy 2024 Live: RBI holds repo rate at 6.50%; forecasts 7.2% GDP growth for FY25 - BusinessLine",
              "description": "RBI Monetary Policy News, RBI MPC Meeting June 2024 Live Updates: The Reserve Bank of India’s Monetary Policy Committee (MPC) has decided to keep the repo rate unchanged at 6.5% in its June 2024 meeting.",
              "url": "https://www.thehindubusinessline.com/money-and-banking/rbi-monetary-policy-committee-mpc-meeting-june-2024-live-news-updates/article68258609.ece",
              "urlToImage": "https://bl-i.thgim.com/public/incoming/qakqz8/article68236877.ece/alternates/LANDSCAPE_1200/2024-05-03T115952Z_1591295921_RC2V80ALAUDM_RTRMADP_3_INDIA-CENBANK-FOREXRESERVES.JPG",
              "publishedAt": "2024-06-07T06:22:30Z",
              "content": "<li></li>\r\nJune 07, 2024 12:29RBI MPC Live News Updates: Banks are investing enough but IT systems should keep pace with growth in business: RBI Guv Das\r\n<li></li>\r\nJune 07, 2024 12:26RBI MPC Live Ne… [+32966 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Elon Musk's Starship Does A Splashdown In The Sea: What It Means - NDTV",
              "description": "Elon Musk's SpaceX has achieved a remarkable feat with the successful splashdown of its Starship rocket system. This was the vehicle's fourth test flight and its first controlled return and soft ocean landing.",
              "url": "https://www.ndtv.com/world-news/elon-musk-s-starship-does-a-splashdown-in-the-sea-what-it-means-5836726",
              "urlToImage": "https://c.ndtvimg.com/2024-06/3tf8prhg_starship-reuters_625x300_07_June_24.jpeg?ver-20240506.08",
              "publishedAt": "2024-06-07T06:21:47Z",
              "content": "Splashdowns were first used in the early days of space exploration.\r\nElon Musk's SpaceX has achieved a remarkable feat with the successful splashdown of its Starship rocket system. This was the vehic… [+2482 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "NDA Govt Formation Live Updates: It’s official, Modi to take oath for 3rd time as PM on Sunday at 6 pm - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/india/elections-results-2024-live-updates-cabinet-bjp-nda-modi-india-congress-9377330/",
              "urlToImage": null,
              "publishedAt": "2024-06-07T06:20:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT News Desk",
              "title": "Latest News, Live Updates Today June 7, 2024: Explosion near vessel in Red Sea off Yemen, security firm says - Hindustan Times",
              "description": "Welcome to the live updates platform for Hindustan Times. Follow all the major news updates, headlines and breaking news stories from India and around the world right here. Track the real-time developments of major events for June 7, 2024.",
              "url": "https://www.hindustantimes.com/india-news/latest-world-news-today-live-updates-june-7-2024-101717706821479.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/07/550x309/Modi-giving-free-reachrge__1717744525916_1717744530265.jpg",
              "publishedAt": "2024-06-07T06:18:23Z",
              "content": "Get the latest news updates and breaking news stories from India and around the world right here. Disclaimer: This is an AI-generated live blog and has not been edited by Hindustan Times staff....Rea… [+7017 chars]"
            },
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "The Hindu",
              "title": "Sunita Williams dances onboard International Space Station after arrival on NASA's Boeing capsule - The Hindu",
              "description": null,
              "url": "https://www.thehindu.com/news/international/sunita-williams-dances-onboard-international-space-station-after-arrival-on-nasas-boeing-capsule/article68262147.ece",
              "urlToImage": null,
              "publishedAt": "2024-06-07T05:57:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "CNBCTV18"
              },
              "author": "Meghna Sen",
              "title": "Why are Paytm shares up 9% instead of the usual 5% upper circuit — Explained - CNBCTV18",
              "description": "The Paytm stock has lost about 54% of its market value since January 31, the day the central bank put strict restrictions on the Paytm Payments Bank.",
              "url": "https://www.cnbctv18.com/market/paytm-share-price-why-the-stock-is-up-9-pc-instead-of-the-usual-5-pc-upper-circuit-explained-19424997.htm",
              "urlToImage": "https://images.cnbctv18.com/uploads/2024/01/paytm.jpg?im=FitAndFill,width=500,height=300",
              "publishedAt": "2024-06-07T05:43:15Z",
              "content": "Shares of Paytm parent company One97 Communications Ltd. were trading with gains of more than 9% on Friday, June 7. The circuit filter for the Paytm stock has been revised higher to 10% from 5% earli… [+1657 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Financial Express"
              },
              "author": "The Financial Express",
              "title": "Vivo X Fold 3 Pro — top specs, features, India price, everything else to know - The Financial Express",
              "description": null,
              "url": "https://www.financialexpress.com/life/technology-vivo-x-fold-3-pro-top-specs-features-india-price-everything-else-to-know-3517474/",
              "urlToImage": null,
              "publishedAt": "2024-06-07T05:39:46Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT News Desk",
              "title": "Four Indian medical students drown in river near Russia's St. Petersburg, 1 rescued: Indian mission - Hindustan Times",
              "description": "The four students - two boys and two girls – were studying at nearby Novgorod State University in Veliky Novgorod city. | Latest News India",
              "url": "https://www.hindustantimes.com/india-news/four-indian-students-drown-in-river-near-russias-st-petersburg-1-rescued-indian-mission-101717737194999.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/07/1600x900/Volkhov_River_1717739978478_1717739995889.jpg",
              "publishedAt": "2024-06-07T05:18:05Z",
              "content": "Four Indian medical students drowned in a river near St. Petersburg in Russia, confirmed the Indian mission in the country on Friday, adding that they were coordinating with Russian authorities to se… [+2282 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "Health benefits of Karonda - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/web-stories/food/health-benefits-of-karonda/9376411/",
              "urlToImage": null,
              "publishedAt": "2024-06-07T05:15:58Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TOI Entertainment Desk",
              "title": "'Munjya' advance box office: Sharvari Wagh, Mona Singh starrer expected to earn Rs 1.5 crore on Day 1, re - TOI Etimes",
              "description": "Sharvari Wagh, Mona Singh, Abhay Verma starrer 'Munjya' has got a U/A certificate and is releasing in 1600 screens today. The film's advance bookings",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/munjya-advance-box-office-sharvari-wagh-mona-singh-starrer-expected-to-earn-rs-1-5-crore-on-day-1-releasing-in-1600-screens/articleshow/110783645.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-110784899,width-1070,height-580,imgsize-115854,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2024-06-07T04:58:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Moneycontrol News",
              "title": "RBI Monetary Policy 2024 highlights: RBI projects FY25 real GDP growth at 7.2%, CPI inflation at 4.5% for... - Moneycontrol",
              "description": "RBI Governor announced on June 7 that the benchmark interest rates remain unchanged at 6.5 percent",
              "url": "https://www.moneycontrol.com/news/business/banks/rbi-monetary-policy-2024-highlights-rbi-projects-real-gdp-growth-at-7-2-for-fy25-12743063.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240607044549_shaktikanta1.jpg",
              "publishedAt": "2024-06-07T04:46:08Z",
              "content": "Reserve Bank Governor Shaktikanta Das unveiled the latest monetary policy decision on June 7 and announced that the benchmark interest rates remained unchanged at 6.5 percent, a figure held steady si… [+2915 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "RBI Monetary Policy LIVE | Sensex, Nifty Flat Ahead Of RBI Policy; ICICI Bank Falls, Wipro Gains - CNBC-TV18",
              "description": "Asian markets trade mixed, while the Gift Nifty suggests a flat start for the Indian market. Ahead of the RBI Monetary Policy Committee's rate decision, the ...",
              "url": "https://www.youtube.com/watch?v=XsSrMncOogE",
              "urlToImage": "https://i.ytimg.com/vi/XsSrMncOogE/maxresdefault.jpg",
              "publishedAt": "2024-06-07T04:19:24Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT News Desk",
              "title": "Karnataka bans release of ‘Hamare Baarah’ film citing potential communal tension - Hindustan Times",
              "description": "The state government has taken this decision under sections of the Karnataka Cinemas (Regulation) Act, 1964. | Latest News India",
              "url": "https://www.hindustantimes.com/india-news/karnataka-bans-release-of-hamare-baarah-film-citing-potential-communal-tension-101717728674489.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/07/1600x900/Hamare-Baarah-696x464_1717730331484_1717730335683.jpg",
              "publishedAt": "2024-06-07T04:14:36Z",
              "content": "The Karnataka government has banned the release and broadcast of the Bollywood film Hamare Baarah for at least two weeks or until the next order, stating that if allowed to be released in the state, … [+2774 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Diya Sharma",
              "title": "Garena Free Fire MAX redeem codes for June 7, 2024: Win in-game items such as weapons, skins, character... - Moneycontrol",
              "description": "These codes provide players with opportunities to obtain premium in-game items such as skins, weapons, and character upgrades without any additional cost, adding to the game's overall appeal.",
              "url": "https://www.moneycontrol.com/technology/garena-free-fire-max-redeem-codes-for-june-7-2024-win-in-game-items-such-as-weapons-skins-character-upgrades-and-more-article-12743024.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240607040919_garena1.jpg",
              "publishedAt": "2024-06-07T04:09:43Z",
              "content": "Following the ban of its predecessor, Garena Free Fire, by the Indian government in 2022, Garena Free Fire Max quickly gained popularity as a leading battle royale game in India. Its vibrant graphics… [+1211 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": "Sahil Bakshi",
              "title": "Meet Saurabh Netravalkar, The Oracle Engineer From Mumbai Who Stunned Pakistan In Super Over - NDTV Sports",
              "description": "Born in Mumbai, Saurabh Netravalkar has played with Indian cricketers like KL Rahul, Mayank Agarwal, Harshal Patel, Jaydev Unadkat and Sandeep Sharma.",
              "url": "https://sports.ndtv.com/t20-world-cup-2024/meet-saurabh-netravalkar-the-oracle-engineer-from-mumbai-who-stunned-pakistan-in-super-over-5835814",
              "urlToImage": "https://c.ndtvimg.com/2024-06/r1ehq0q_netravalkar-_625x300_07_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
              "publishedAt": "2024-06-07T04:08:00Z",
              "content": "The cricket world witnessed one of the biggest upsets in the history of World Cups (be it T20 or ODI) as the USA stunned Pakistan in a Group A clash on Thursday night. It needed a special Super Over … [+2330 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India Today"
              },
              "author": "Ankita Chakravarti",
              "title": "New Leica app on iPhone will allow users to capture high-quality images like Leica cameras - India Today",
              "description": "Leica039s new LUX app for iPhone brings professional-grade photography to mobile users combining Leica039s iconic techniques with Fjorden Electra039s innovative app development",
              "url": "https://www.indiatoday.in/technology/news/story/new-leica-app-on-iphone-will-allow-users-to-capture-high-quality-images-like-leica-cameras-2550133-2024-06-07",
              "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/leica-leica-075635143-16x9_0.png?VersionId=NdlY58ryj1mApa5AjkJkMJVt9DpOvmh.",
              "publishedAt": "2024-06-07T03:52:03Z",
              "content": "iPhone users now have a new tool to enhance their photography skills with the launch of the Leica LUX app. This app, developed by Leica Camera AG in collaboration with Fjorden Electra AS, allows iPho… [+3043 chars]"
            },
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "The Hindu",
              "title": "Kangana Ranaut slap: CISF constable says her mother was at farmer’s protest - The Hindu",
              "description": null,
              "url": "https://www.thehindu.com/news/national/kangana-ranaut-slap-cisf-constable-says-her-mother-was-at-farmers-protest/article68261982.ece",
              "urlToImage": null,
              "publishedAt": "2024-06-07T03:48:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Nivedita",
              "title": "Increase sperm count naturally: Sleep well, manage weight, exercise regularly to boost libido, fertility - Moneycontrol",
              "description": "Boost libido, fertility: Male infertility refers to a man's inability to make his female partner pregnant, often due to the quality of his sperm. This can be linked to sexual function or semen quality. Here are some ways to improve male fertility.",
              "url": "https://www.moneycontrol.com/health-and-fitness/increase-sperm-count-naturally-sleep-well-manage-weight-exercise-regularly-to-boost-libido-fertility-article-12742706.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240606120346_Infertility.jpg",
              "publishedAt": "2024-06-07T03:30:12Z",
              "content": "If you and your partner are experiencing fertility issues, you're not alone. Infertility is more common than you might think, affecting about one in every six couples. While infertility is not always… [+2826 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Lok Sabha Election Results Live Updates: NDA Parliamentary Party Meeting Today - NDTV",
              "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
              "url": "https://www.ndtv.com/news",
              "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
              "publishedAt": "2024-06-07T03:15:43Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "India Today"
              },
              "author": "Janani K",
              "title": "Varalaxmi Sarathkumar invites Rajinikanth for her wedding with Nicholai Sachdev - India Today",
              "description": "Actor Varalaxmi Sarathkumar along with her entire family met Superstar Rajinikanth at his house in Chennai039s Poes Garden They invited his family for Varalaxmi039s wedding with Nicholai Sachdev",
              "url": "https://www.indiatoday.in/movies/regional-cinema/story/varalaxmi-sarathkumar-invites-rajinikanth-for-her-wedding-with-nicholai-sachdev-2550112-2024-06-07",
              "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/varalaxmi-sarathkumar-wedding-invite-rajinikanth-070426925-16x9_0.jpg?VersionId=jNRGps59RjUf7i8AHRG_q5jgTVPEONKl",
              "publishedAt": "2024-06-07T02:20:58Z",
              "content": "Tamil-Telugu actor Varalaxmi Sarathkumar, along with her family, visited Rajinikanth, his wife, Latha and daughter Aishwarya Rajinikanth at their home in Chennai's Poes Garden. The Sarathkumars, Vara… [+1268 chars]"
            }
        ] 
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                news.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.urlToImage} class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <p class="card-text">{value.title}</p>
                                                </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewnews