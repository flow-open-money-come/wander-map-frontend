# wander-map-frontend

[![badge](https://img.shields.io/badge/API%20Documentation-OK-brightgreen)](https://hackmd.io/@FPgogo/H1l8ogI-Y/https%3A%2F%2Fhackmd.io%2FGMJP6yXKQXCXAT4gDXsJPQ)
[![badge](https://img.shields.io/badge/Database%20Structure-OK-brightgreen)](https://dbdiagram.io/d/61386313825b5b0146f81dd5)

> _Wondering where to go? [Wandermap](https://wandermap.netlify.app)!_

☞ [介紹影片點這邊](https://www.youtube.com/watch?v=zMnWJXnUKdg&feature=youtu.be&ab_channel=cmt)


## 專案簡介

提供戶外行程路線地點的檢視以及記錄心得行程的開放論壇平台。其中又以 [健行筆記](https://hiking.biji.co/) 與 [臺灣山林悠遊網](https://recreation.forest.gov.tw/) 的部份頁面作為功能與頁面的參考。再以地圖搜尋為特色，主打此功能增加差異性，改善使用者體驗。

提供一個開放的交流平台。使用者可以檢視閱覽路線及地點詳細的資訊，並且分享自己的行程記錄。

### Pages

[🛤Demo](https://wandermap.netlify.app)

[📙 WANDER MAP 說明書 | HackMD](https://hackmd.io/eD_eEfrGTy6BN5RsBHkjaw?view)

[📜 API 文件 | HackMD](https://hackmd.io/GMJP6yXKQXCXAT4gDXsJPQ?view)

[📊 資料庫關聯圖 | dbdiagram](https://dbdiagram.io/d/61386313825b5b0146f81dd5)

[📚 功能架構圖 | Figma](https://www.figma.com/file/DYDg1Xje14r4k0zkGqD0tC/WanderMap-%E5%8A%9F%E8%83%BD%E6%9E%B6%E6%A7%8B%E5%9C%96?node-id=0%3A1)

[📖 User flow | whimsical](https://whimsical.com/user-flow-KZZHcksrFpVsZERH85MLYc)

:octocat: [前端 repository](https://github.com/flow-open-money-come/wander-map-frontend)

:octocat: [後端 repository](https://github.com/flow-open-money-come/wander-map-backend)

## 主要功能

### 地圖搜尋系統

首頁的地圖搜尋能即時地顯示符合之步道，點選步道後，使用者可查看該步道的基本資訊及近況，或曾到過該步道的使用者發表的貼文。  
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E5%9C%B0%E5%9C%96%E6%90%9C%E5%B0%8B%E7%B3%BB%E7%B5%B1.gif)

### 步道系統

除了以地圖搜尋之外，在全部步道頁面，使用者也可選擇使用關鍵字，或以高度和地區等步道特性來篩選步道。  
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E5%85%A8%E9%83%A8%E6%AD%A5%E9%81%93%E7%AF%A9%E9%81%B8%E6%90%9C%E5%B0%8B%E9%80%B2%E5%96%AE%E4%B8%80%E6%AD%A5%E9%81%93.gif)


單一步道頁面提供使用者檢視該步道基本資訊、地理資訊及該地點近七天的天氣狀況，更可在下方和大家共同交流步道狀況。 使用者也可進一步檢示該步道下其他使用者所留下的心得紀錄。  
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E5%9C%B0%E5%9C%96%E9%80%B2%E5%85%A5%E5%96%AE%E4%B8%80%E6%AD%A5%E9%81%93%E5%8F%8A%E5%85%A8%E9%A0%81%E7%80%8F%E8%A6%BD.gif)

### 論壇系統

使用者在論壇當中可以關鍵字或標籤來搜尋心得文章。
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E8%AB%96%E5%A3%87%E6%90%9C%E5%B0%8B%E7%AF%A9%E9%81%B8%E6%96%87%E7%AB%A0.gif)


並且在每篇心得文章底下，會員們能夠一起討論交流！
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E5%96%AE%E4%B8%80%E5%BF%83%E5%BE%97%E9%A0%81%E9%9D%A2.gif)

### 會員系統

註冊成為會員之使用者可以發表心得文章 (CRUD) 及評論 (CRUD)。在個人後台除了能檢視個人資訊外，也可管理個人發表過的文章、收藏之步道、按讚過的步道，也能擁有自己專屬的裝備清單 (CRUD)。
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E8%A8%BB%E5%86%8A%E6%88%90%E5%8A%9F.gif)
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E5%BE%8C%E5%8F%B0%E4%BF%AE%E6%94%B9%E8%B3%87%E8%A8%8A.gif)
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E6%96%B0%E5%A2%9E%E6%96%87%E7%AB%A0%E4%B8%A6%E6%94%B6%E8%97%8F.gif)
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E8%A3%9D%E5%82%99%E6%B8%85%E5%96%AE.gif)
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E6%94%B6%E8%97%8F%E6%96%87%E7%AB%A0.gif)

身為管理員，能夠管理步道 (CRUD)、管理使用者（停權復權）及管理文章 (CRUD)。
![](https://github.com/flow-open-money-come/wander-map-frontend/blob/readme/%E7%AE%A1%E7%90%86%E5%93%A1%E5%BE%8C%E5%8F%B0.gif)

|測試帳號|密碼|權限|
|---|---|---|
|admintest@gmail.com|admintest123|管理員|
|yoyo@gmail.com|123123qweqwe|普通會員|


> 權限系統： 主要三種角色，權限低到高分別為未登入使用者、會員及管理員。
>
> 1. 未登入使用者：
>    - 使用地圖、關鍵字或者篩選功能搜尋步道，並查看步道相關資訊及討論區。
>    - 使用關鍵字或標籤功能搜尋心得，並查看心得及討論區。
>    - 查看會員公開頁面。
> 2. 會員：
>    - 使用地圖、關鍵字或者篩選功能搜尋步道、查看步道相關資訊及討論區，並可以搜
>      藏喜歡的步道。
>    - 使用關鍵字或標籤功能搜尋心得、查看心得及討論區，並可以按讚覺得不錯的心得
>      。
>    - 查看其他會員公開頁面。
>    - 擁有個人後台，能夠管理搜藏之步道、按讚的心得、發表的文章及裝備清單。
>    - 發表心得。
>    - 在步道和心得下的討論區留言。
> 3. 管理員：
>    - 擁有一般會員的所有權限。
>    - 在管理員後台能夠管理全部步道、會員發表的心得及會員權限。
>    - 能夠編輯刪除留言區會員的留言。

## 使用技術

| 套件                                                                       | 敘述                                                              |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [React](https://reactjs.org/) (Hook)                                       | SPA, UI building of reusable function components and custom hooks |
| React Context                                                              | menage data through the nested component tree                     |
| [React Router](https://reactrouter.com/)                                   | For SPA routing implementation                                    |
| [styled-components](https://styled-components.com/docs/basics)             | For CSS-in-JS implementation                                      |
| [Google-map-react](https://www.npmjs.com/package/google-map-react)         | A component written over a small set of the Google Maps API.      |
| [ckeditor5-react](https://www.npmjs.com/package/@ckeditor/ckeditor5-react) | CKEditor 5 builds are a set of ready-to-use rich text editors.    |
| [jwt-decode](https://www.npmjs.com/package/jwt-decode)                     | Decoding JWTs token which are Base64Url encoded                   |
| [axios](https://axios-http.com/docs/intro)                                 | A promise-based HTTP Client for node.js and the browser.          |
| [sweetalert](https://sweetalert.js.org/guides/)                            | A replacement for JS alert                                        |

| 其他                                                                                             | 敘述                           |
| ------------------------------------------------------------------------------------------------ | ------------------------------ |
| [prettier](https://prettier.io/)                                                                 | 維持專案程式碼風格統一         |
| [ESLint](https://create-react-app.dev/docs/setting-up-your-editor/)                              | Create-react-app eslint config |
| [Netlify](https://docs.netlify.com/?_ga=2.190209259.1714598831.1634974332-1934839556.1633767074) | 前端部屬工具                   |
| [Figma](https://www.figma.com/)                                                                  | WireFrame 繪製                 |

| 第三方 API                                                                                  | 敘述                                                 |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [林務局開放資料](https://recreation.forest.gov.tw/Service/OpenData)                         | 首頁：步道路況資訊                                   |
| [中央氣象局](https://opendata.cwb.gov.tw/devManual/insrtuction)                             | 單一步道資訊頁面：當地近七天天氣                     |
| [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) | 首頁及單一步道資訊頁面：地圖搜尋功能及步道地點標示圖 |
| [imgur API](https://apidocs.imgur.com/)                                                     | 新增文章、新增步道及會員個人後台：圖片上傳           |

## 如何執行

### Clone 本專案至本地端

### `npm install`

安裝專案 dependencies。

### 建立環境變數檔

在專案根目錄新增環境變數檔案 `.env`，填入專案所需之所有環境變數。

### `npm run build`

建立專案 production 版本。

### `npm run deploy`

在 GitHub 上部屬本專案，設定部屬 branch 為 gh-pages。


## 專案架構
```shell
.
├── .env                            # 環境變數存放處
├── .DS_Store                       
├── .gitignore                      
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
└── src 
    ├── components                  # 各頁面共用 components，依照類型不同歸在不同 system
    │   ├── adminSystem             # 管理員後台相關 components
    │   ├── common                  # 公用 components
    │   ├── formSystem              # 表單相關 components
    │   ├── forumSystem             # 論壇系統相關 components
    │   ├── todoSystem              # 使用者裝備清單相關 components
    │   ├── trailSystem             # 步道系統相關 components
    │   └── userSystem              # 使用者相關 components
    ├── constants                   # 常數檔，包括 global style 及共用 style
    ├── hooks                       # Custom hooks
    ├── icons
    └── pages                       
        ├── AdminPage               # 管理員後台頁面
        ├── ArticlePages            # 文章相關頁面
        │   ├── AllArticlesPage     # 全部文章頁面
        │   ├── ArticlePage         # 單一文章頁面
        │   └── ArticlePostPage     # 新增文章頁面
        ├── HomePage                # 首頁
        ├── LoginPage               # 登入頁
        ├── RegisterPage            # 註冊頁面
        ├── TrailPages              # 步道相關頁面
        │   ├── AllTrailsPage       # 全部步道頁面
        │   ├── TrailPage           # 單一步道頁面
        │   └── TrailPostPage       # 新增步道頁面
        └── UserPages               # 使用者相關頁面
            ├── UserBackstage       # 使用者後台頁面
            └── UserOverviewPage    # 使用者公開個人頁面
```

## Author

👤 [@cmtilo](https://github.com/cmtilo)
```markdown
 . ＿＿ ∧ ∧             
／＼   (*ﾟ∀ﾟ)＼      專案構想、wireframe 繪製、
＼／|￣￣∪ ∪￣|＼   前端（會員個人頁面（公開＆會員）、
 ＼|    Cmt   |     新增步道頁面、新增文章頁面）
     ￣￣￣￣￣
```

👤 [@ddylanlin](https://github.com/ddylanlin)
```markdown
 . ＿＿ ∧ ∧             
／＼   (*ﾟ∀ﾟ)＼      專案雛形發想、wireframe 繪製、
＼／|￣￣∪ ∪￣|＼   前端（管理員後台、單一步道頁面、新增編輯步道頁面）、
 ＼|   Dylan  |     後端（trail API、article API、swagger 文件、部署）
     ￣￣￣￣￣
```

👤 [@torai55](https://github.com/torai55)
```markdown
 . ＿＿ ∧ ∧             
／＼   (*ﾟ∀ﾟ)＼      專案構想、資料庫規劃
＼／|￣￣∪ ∪￣|＼   後端（user API、article API、trail API、
 ＼|   Torai  |     權限控制、logger、API 文件、swagger 文件、部署）
     ￣￣￣￣￣
```

👤 [@WenYHsieh](https://github.com/WenYHsieh)
```markdown
 . ＿＿ ∧ ∧             
／＼   (*ﾟ∀ﾟ)＼      專案構想、wireframe 繪製、
＼／|￣￣∪ ∪￣|＼   前端 （首頁、全部步道頁面、會員系統、
 ＼|     Yu   |      新增編輯文章頁面、會員後台、部署）
     ￣￣￣￣￣
```

👤 [@yymarlerr](https://github.com/yymarlerr)
```markdown
 . ＿＿ ∧ ∧             
／＼   (*ﾟ∀ﾟ)＼      專案雛形發想、專案構想、wireframe 繪製、
＼／|￣￣∪ ∪￣|＼   前端 （單一文章頁面、全部文章頁面）、
 ＼|    Ader  |     後端（article API）
     ￣￣￣￣￣
```


## Licence

[MIT](https://choosealicense.com/licenses/mit/)
