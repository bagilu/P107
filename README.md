# P107 假裝忙碌的螢幕

## 專案名稱

**P107 慈濟大學 經營管理學系 智慧商情研究室動態資訊展示牆**

英文名稱：**P107 Simulated Business Intelligence Operations Dashboard**

## 專案定位

本專案是一個純前端的展示型網頁，用於營造「智慧商情研究室正在進行大量資料蒐集、校園營運分析、空氣品質監測、空間使用判讀與 AI 洞察生成」的視覺效果。

本系統所顯示之數據均為模擬資料，適合用於：

1. 研究室門口展示螢幕
2. 系所導覽
3. 招生活動
4. 管理學、資訊系統、資料視覺化課程示範
5. 學生專題概念展示

## 重要聲明

畫面中的資料是隨機產生的模擬資料，不代表真實監測結果。系統右上角已標示：

> 模擬展示資料｜非即時監測數據

## 檔案說明

- `index.html`：主畫面
- `style.css`：視覺設計與動畫樣式
- `script.js`：假資料產生、文字雨、Robot Log、圖表、時鐘與狀態更新
- `README.md`：系統說明

## 使用方式

直接開啟 `index.html` 即可執行。

若要放到 GitHub Pages：

1. 建立 GitHub repository
2. 上傳本資料夾內的檔案
3. 到 Settings → Pages
4. 選擇 main branch / root
5. 儲存後即可取得公開網址

## 第一版特色

- Matrix 風格文字雨背景
- Robot Data Stream 自動更新
- 校園營運模擬地圖
- 移動節點動畫
- CO₂、PM2.5、溫度、濕度、噪音、人流假資料
- 商情分析 KPI
- AI Insight 自動切換
- 科技風深色玻璃介面
- 不需資料庫
- 不需 Supabase
- 不需登入

## 後續可擴充方向

1. 接入真實 Google Sheets 資料
2. 接入 Supabase 資料庫
3. 新增全螢幕按鈕
4. 加入真正校園 SVG 地圖
5. 增加多頁輪播模式
6. 加入不同展示主題，例如招生、課程、專題成果、研究能量
7. 支援大螢幕 16:9、直式螢幕、電視牆模式

## 風格設定

本版採用：

**電腦高手風格 70% + 賽博科技風 20% + 學術研究室風 10%**

設計關鍵字：

- Cyber Intelligence Operations Room
- Smart Campus Simulation
- Business Intelligence Wall
- Hacker Terminal Style
- Neon Dashboard
