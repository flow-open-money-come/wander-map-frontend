# Wander Map

Wander Map 是一個結合台灣步道資訊檢索及遊歷心得分享的二合一平台。 此專案參考
了[健行筆記](https://hiking.biji.co/)及[台灣山林悠遊網](https://recreation.forest.gov.tw/)，
並以地圖搜尋為特色，串連步道資訊檢索及論壇兩大主要系統。

## 主要功能 （之後補上操作 gif）

### 地圖搜尋系統

首頁的地圖搜尋能即時地顯示符合之步道，點選步道後，使用者可查看該步道的基本資訊及
近況，或曾到過該步道的使用者發表的貼文。

### 步道系統

除了以地圖搜尋之外，在全部步道頁面，使用者也可選擇使用關鍵字，或以高度和地區等步
道特性來篩選步道。單一步道頁面提供使用者檢視該步道基本資訊、地理資訊及該地點近七
天的天氣狀況，更可在下方和大家共同交流步道狀況。 使用者也可進一步檢示該步道下其
他使用者所留下的心得紀錄。

### 論壇系統

使用者在論壇當中可以關鍵字或標籤來搜尋心得，並且在每篇心得底下，會員們能夠一起討
論交流。

### 會員系統

註冊成為會員之使用者可以發表心得 (CRUD) 及評論 (CRUD)。在個人後台除了能檢視個人
資訊外，也可管理個人發表過的文章、收藏之步道、按讚過的步道，也能擁有自己專屬的備
忘錄 (CRUD)。

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

| 套件                                                                       | 敘述                                                                                                                                                              |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React](https://reactjs.org/) (Hook)                                       | UI implementation library                                                                                                                                         |
| [React Router](https://reactrouter.com/)                                   | SPA routing implementation                                                                                                                                        |
| [styled-components](https://styled-components.com/docs/basics)             | 實作 CSS-in-JS                                                                                                                                                    |
| [Google-map-react](https://www.npmjs.com/package/google-map-react)         | is a component written over a small set of the Google Maps API. It allows you to render any React component on the Google Map.                                    |
| [ckeditor5-react](https://www.npmjs.com/package/@ckeditor/ckeditor5-react) | CKEditor 5 builds are a set of ready-to-use rich text editors. Every "build" provides a single type of editor with a set of features and a default configuration. |
| [jwt-decode](https://www.npmjs.com/package/jwt-decode)                     | decoding JWTs token which are Base64Url encoded                                                                                                                   |
| [axios](https://axios-http.com/docs/intro)                                 | a promise-based HTTP Client for node.js and the browser. It                                                                                                       |
| [sweetalert](https://sweetalert.js.org/guides/)                            | a replacement for JS alert                                                                                                                                        |
|                                                                            |                                                                                                                                                                   |

| 其他                                                                                             | 敘述                           |
| ------------------------------------------------------------------------------------------------ | ------------------------------ |
| [prettier](https://prettier.io/)                                                                 | 維持專案程式碼風格統一         |
| [ESLint](https://create-react-app.dev/docs/setting-up-your-editor/)                              | Create-react-app eslint config |
| [Netlify](https://docs.netlify.com/?_ga=2.190209259.1714598831.1634974332-1934839556.1633767074) | 前端部屬                       |
| [Figma](https://www.figma.com/)                                                                  | WireFrame 繪製                 |
|                                                                                                  |                                |

| 第三方 API                                                                                  | 敘述                                                 |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [林務局開放資料](https://recreation.forest.gov.tw/Service/OpenData)                         | 首頁：步道路況資訊                                   |
| [中央氣象局](https://opendata.cwb.gov.tw/devManual/insrtuction)                             | 單一步道資訊頁面：當地近七天天氣                     |
| [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) | 首頁及單一步道資訊頁面：地圖搜尋功能及步道地點標示圖 |
| [imgur api](https://apidocs.imgur.com/)                                                     | 新增文章、新增步道及會員個人後台：圖片上傳           |
|                                                                                             |                                                      |

## 如何執行

1. Clone 本專案至本地端
2. `npm install` 安裝專案 dependencies。
3. 在專案根目錄新增環境變數檔案 `.env`，填入專案所需之所有環境變數。
4. `npm run build` 建立專案 production 版本。
5. `npm run deploy` 在 GitHub 上部屬本專案，設定部屬 branch 為 gh-pages。

## 專案分工

此專案為 Lidemy 程式導師實驗計畫的五名學生共同完成的，以下為專案分工。

- [@cmtilo](https://github.com/cmtilo): 專案構想、wireframe 繪製、前端（會員個人
  頁面（公開＆會員）、新增步道頁面、新增心得頁面
- [@ddylanlin](https://github.com/ddylanlin): 專案雛形發想、wireframe 繪製、前端
  （管理員後台、單一步道頁面）、後端（詳見
  [Wander Map 後端 repository](https://github.com/flow-open-money-come/wander-map-backend)
  readme）
- [@torai55](https://github.com/torai55):專案構想、後端（詳見
  [Wander Map 後端 repository](https://github.com/flow-open-money-come/wander-map-backend)
  readme）
- [@WenYHsieh](https://github.com/WenYHsieh): 專案構想、wireframe 繪製、前端 （
  主要負責人。功能測試拓荒（google map, 圖片上傳, ckeditor 串接）、首頁、全部步
  道頁面、會員系統、部屬）
- [@yymarlerr](https://github.com/yymarlerr): 專案雛形發想、專案構想、wireframe
  繪製、前端 （單一心得頁面、全部心得頁面 ）、後端（詳見
  [Wander Map 後端 repository](https://github.com/flow-open-money-come/wander-map-backend)
  readme）

## [專案後端](https://github.com/flow-open-money-come/wander-map-backend)

Wander Map 的 api server。使用 express 作為 web 框架、MySQL 儲存資料。提供驗證使
用者註冊登入、心得與步道的 CRUD 等功能。

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
