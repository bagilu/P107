const rand = (min, max, decimals = 0) => {
  const v = Math.random() * (max - min) + min;
  return Number(v.toFixed(decimals));
};

// Clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString('zh-TW', { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();

// Matrix rain
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
let w, h, columns, drops;
const tokens = '慈濟大學經營管理智慧商情研究室AI BI KPI ROI ESG CRM ERP CO2 PM25 FLOW CLEAN RISK 010101'.split('');
function resizeMatrix() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  columns = Math.floor(w / 18);
  drops = Array(columns).fill(1).map(() => Math.random() * h / 18);
}
window.addEventListener('resize', resizeMatrix);
resizeMatrix();
function drawMatrix() {
  ctx.fillStyle = 'rgba(2, 6, 13, 0.12)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#4cffe2';
  ctx.font = '16px Consolas, monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = tokens[Math.floor(Math.random() * tokens.length)];
    ctx.fillText(text, i * 18, drops[i] * 18);
    if (drops[i] * 18 > h && Math.random() > 0.976) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 45);

// Robot log
const logMessages = [
  ['ok', 'BOT-03 connected to Campus Flow Node.'],
  ['ok', 'Classroom utilization matrix refreshed.'],
  ['warn', 'Zone C cleaning priority recalculated.'],
  ['ok', 'CO2 sensor packet normalized.'],
  ['ok', 'Student density estimate updated.'],
  ['ok', 'Business intelligence summary generated.'],
  ['warn', 'Dining area traffic expected to increase.'],
  ['ok', 'Space allocation index synchronized.'],
  ['ok', 'AI agent scanned simulated service requests.'],
  ['warn', 'Noise index variance detected near Zone D.'],
  ['ok', 'Operational dashboard cache rebuilt.'],
  ['ok', 'Resource efficiency model completed cycle.'],
  ['warn', 'High-flow corridor candidate identified.'],
  ['ok', 'Environmental baseline adjusted.']
];
const robotLog = document.getElementById('robotLog');
function addLog() {
  const now = new Date().toLocaleTimeString('zh-TW', { hour12: false });
  const [type, msg] = logMessages[Math.floor(Math.random() * logMessages.length)];
  const div = document.createElement('div');
  div.className = 'log-line';
  div.innerHTML = `<span class="time">[${now}]</span> <span class="${type}">${type.toUpperCase()}</span> ${msg}`;
  robotLog.prepend(div);
  while (robotLog.children.length > 24) robotLog.removeChild(robotLog.lastChild);
}
for (let i = 0; i < 18; i++) addLog();
setInterval(addLog, 900);

// Sensors
const sensors = [
  { name: 'CO₂', unit: 'ppm', min: 440, max: 880, displayMax: 1000, d: 0 },
  { name: 'PM2.5', unit: 'μg/m³', min: 3, max: 26, displayMax: 35, d: 1 },
  { name: 'Temp.', unit: '°C', min: 22.5, max: 28.2, displayMax: 35, d: 1 },
  { name: 'Humidity', unit: '%', min: 52, max: 76, displayMax: 100, d: 0 },
  { name: 'Noise', unit: 'dB', min: 36, max: 68, displayMax: 90, d: 0 },
  { name: 'Occupancy', unit: '%', min: 21, max: 95, displayMax: 100, d: 0 }
];
const sensorList = document.getElementById('sensorList');
function updateSensors() {
  sensorList.innerHTML = sensors.map(s => {
    const v = rand(s.min, s.max, s.d);
    const pct = Math.min(100, (v / s.displayMax) * 100);
    return `<div class="sensor-row"><span>${s.name}</span><div class="bar"><span style="width:${pct}%"></span></div><span class="value">${v} ${s.unit}</span></div>`;
  }).join('');
}
setInterval(updateSensors, 1500);
updateSensors();

// KPIs
const kpis = ['Space Utilization', 'Service Response', 'Learning Flow Index', 'Resource Efficiency', 'Cleaning Stability', 'Decision Readiness'];
const kpiList = document.getElementById('kpiList');
function updateKpis() {
  kpiList.innerHTML = kpis.map(k => `<div class="kpi-row"><span>${k}</span><span>${rand(68, 97, 1)}%</span></div>`).join('');
  document.getElementById('efficiencyIndex').textContent = rand(76, 94, 1);
  document.getElementById('dataPackets').textContent = String(rand(18000, 98000)).padStart(6, '0');
  const risk = Math.random() > 0.86 ? 'MED' : 'LOW';
  document.getElementById('riskLevel').textContent = risk;
}
setInterval(updateKpis, 2200);
updateKpis();

// Zone statuses
const zoneNames = ['A 教學區', 'B 圖書館', 'C 行政區', 'D 餐飲區', 'E 研究室'];
const statuses = ['Stable', 'High Flow', 'Cleaning', 'Normal', 'Observed', 'Optimized'];
function updateZones() {
  document.getElementById('zoneStatuses').innerHTML = zoneNames.map(z => `<div><strong>${z}</strong><br>${statuses[Math.floor(Math.random()*statuses.length)]} · ${rand(22, 96)}%</div>`).join('');
}
setInterval(updateZones, 2600);
updateZones();

// AI insight and ticker
const modes = ['Campus Flow Intelligence', 'Operational Resource Model', 'Environmental Risk Scanner', 'Service Efficiency Monitor', 'Strategic Campus BI Core'];
const insights = [
  'AI Insight: Current classroom utilization remains stable; Zone B shows rising movement density.',
  'AI Insight: Dining area traffic is expected to increase within 12 minutes.',
  'AI Insight: Cleaning priority is recommended for Zone C based on simulated flow intensity.',
  'AI Insight: CO₂ values remain within acceptable demonstration range.',
  'AI Insight: Resource allocation index suggests balanced service load across campus zones.',
  'AI Insight: Smart campus narrative is ready for visitor demonstration mode.'
];
const tickers = [
  'SIMULATION FEED | campus flow model refreshed | AI business intelligence cycle completed | no real personal data collected | demonstration only',
  'P107 DISPLAY | smart operations wall | robot log active | map nodes moving | environmental values simulated | campus BI narrative online',
  'RESEARCH LAB MODE | CRM ERP KPI ESG AI BI | service efficiency model | space utilization matrix | cleaning status inference'
];
function updateInsight() {
  document.getElementById('analysisMode').textContent = modes[Math.floor(Math.random()*modes.length)];
  document.getElementById('aiInsight').textContent = insights[Math.floor(Math.random()*insights.length)];
  document.getElementById('tickerText').textContent = tickers[Math.floor(Math.random()*tickers.length)];
}
setInterval(updateInsight, 5000);
updateInsight();

// Air quality chart
const chart = document.getElementById('chartCanvas');
const c = chart.getContext('2d');
let data = Array.from({ length: 34 }, () => rand(20, 80));
function drawChart() {
  data.push(rand(22, 86));
  data = data.slice(-34);
  const W = chart.width, H = chart.height;
  c.clearRect(0, 0, W, H);
  c.strokeStyle = 'rgba(76,255,226,0.16)';
  c.lineWidth = 1;
  for (let x = 0; x < W; x += 30) { c.beginPath(); c.moveTo(x,0); c.lineTo(x,H); c.stroke(); }
  for (let y = 0; y < H; y += 30) { c.beginPath(); c.moveTo(0,y); c.lineTo(W,y); c.stroke(); }
  c.beginPath();
  data.forEach((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - (v / 100) * (H - 24) - 12;
    if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
  });
  c.strokeStyle = '#4cffe2';
  c.lineWidth = 3;
  c.shadowColor = '#4cffe2';
  c.shadowBlur = 12;
  c.stroke();
  c.shadowBlur = 0;
  c.fillStyle = 'rgba(132,255,120,0.85)';
  c.font = '14px Consolas';
  c.fillText('AQI / CO₂ / PM2.5 fused simulation trend', 14, 24);
}
setInterval(drawChart, 900);
drawChart();
