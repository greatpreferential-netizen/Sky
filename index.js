<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>账号价值评估（统一排版版）</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1, h2 {
            color: #333;
            text-align: center;
        }
        .form-group {
            width: 100%; 
            margin-bottom: 30px;
        }
        label {
            display: block;
            margin-bottom: 12px;
            font-weight: bold;
            color: #555;
        }
        select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            margin-bottom: 15px;
        }

        /* 通用选项容器：统一间距与内边距 */
        .checkbox-group {
            display: flex;
            flex-wrap: wrap;       
            margin-top: 10px;
            border: 1px solid #eee;
            border-radius: 4px;
        }

        /* 通用选项样式：文本居中 + 交互反馈 */
        /* 通用选项样式：文本左对齐 + 垂直居中 */
        .checkbox-item {
            display: flex;
            align-items: center;         /* 垂直居中 */
            justify-content: flex-start; /* 水平左对齐（核心修改） */
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            box-sizing: border-box;
            white-space: nowrap; 
        }
        .checkbox-item.selected {
            background-color: #e3f2fd;
            border-color: #2196f3;
        }
        .checkbox-item input {
            margin-right: 4px;
        }

        /* ========== 毕业季 + 礼包：统一一行3个 ========== */
        .season-group, .gift-group {
            gap: 8px; /* 2个间隔，总16px */
            justify-content: flex-start; /* 左对齐，逐行排列 */
            padding: 10px; /* 左右内边距对称，保证左右空间一致 */
        }
        .season-group .checkbox-item {
            width: calc( (100% - 16px) / 3 ); 
            font-size: 13px;
            min-width: 70px; /* 毕业季名称较短，稍窄 */
        }
        /* ========== 礼包选项：文字超框优化 ========== */
        .gift-group .checkbox-item {
            font-size: 12px; /* 从13px→12px，缩小字体 */
            padding: 4px 6px; /* 左右内边距从8px→6px，释放空间 */
            min-width: 90px; /* 适当降低最小宽度，适配小字体（原100px→90px） */
        }

        /* 按钮 & 结果样式（保持不变） */
        .btn {
            background-color: #2196f3;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            margin-right: 10px;
        }
        .btn-reset {
            background-color: #7f8c8d;
        }
        .btn:hover {
            opacity: 0.9;
        }
        .button-group {
            text-align: center;
            margin: 30px 0;
        }
        #result {
            display: none;
            margin-top: 30px;
            padding: 20px;
            border-radius: 8px;
            background-color: #e8f5e9;
            border: 1px solid #c8e6c9;
        }
        .result-item {
            margin: 10px 0;
            font-size: 16px;
        }
        .result-label {
            display: inline-block;
            width: 120px;
            font-weight: bold;
            color: #2e7d32;
        }
        .total-price {
            font-size: 20px;
            color: #e74c3c;
            font-weight: bold;
            margin-top: 20px;
            text-align: center;
        }
        .counter {
            text-align: right;
            margin-bottom: 10px;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>账号价值评估</h1>
        
        <form id="valuationForm">
            <div class="form-group">
                <label for="server">选择区服</label>
                <select name="server" id="server">
                    <option value="ios">iOS</option>
                    <option value="android_official">安卓官服</option>
                    <option value="huawei">华为渠道服</option>
                    <option value="oppo">OPPO渠道服</option>
                </select>
            </div>
            
            <div class="form-group">
                <label>已毕业季节 (选择所有已毕业的季节)
                    <div class="counter">已选择: <span id="seasonCounter">0</span></div>
                </label>
                <div id="seasons" class="checkbox-group season-group"></div>
            </div>
            
            <div class="form-group">
                <label>已拥有礼包 (选择所有已拥有的礼包)
                    <div class="counter">已选择: <span id="giftCounter">0</span></div>
                </label>
                <div id="gifts" class="checkbox-group gift-group"></div>
            </div>
            
            <div class="button-group">
                <button type="submit" class="btn btn-submit">计算价值</button>
                <button type="button" class="btn btn-reset">重置</button>
            </div>
            
            <div id="result">
                <h2>评估结果</h2>
                <div class="result-item">
                    <span class="result-label">区服:</span>
                    <span id="serverName"></span>
                </div>
                <div class="result-item">
                    <span class="result-label">基础价值:</span>
                    <span id="serverBase">0</span> 元
                </div>
                <div class="result-item">
                    <span class="result-label">毕业季节数:</span>
                    <span id="seasonCount">0</span> 个
                </div>
                <div class="result-item">
                    <span class="result-label">季节总价值:</span>
                    <span id="seasonTotal">0</span> 元
                </div>
                <div class="result-item">
                    <span class="result-label">拥有礼包数:</span>
                    <span id="giftCount">0</span> 个
                </div>
                <div class="result-item">
                    <span class="result-label">礼包总价值:</span>
                    <span id="giftTotal">0</span> 元
                </div>
                <div class="total-price">
                    账号总价值: <span id="totalPrice">0</span> 元
                </div>
            </div>
        </form>
    </div>

    <script>
    // 毕业季价格表（内部计算，不显示）
    const seasonPrices = {
        "感恩季": 2000, "追光季": 2000, "归属季": 1200, "音韵季": 3500,
        "魔法季": 1000, "圣岛季": 500, "预言季": 800, "梦想季": 300,
        "集结季": 300, "小王子季": 600, "风行季": 300, "潜海季": 250,
        "表演季": 500, "破晓季": 200, "欧若拉季": 200, "追忆季": 200,
        "夜行记": 200, "拾光季": 200, "归巢季": 200, "九色鹿季": 300,
        "筑巢季": 200, "二重奏季": 200, "姆明季": 200, "彩染季": 200,
        "青鸟季": 260, "暮星季": 260
    };

    // 礼包数据（可替换为新模板）
    const giftData = [
        {name: "创始人礼包", price: 15}, {name: "大音乐家礼包", price: 60},
        {name: "合伙人礼包", price: 90}, {name: "万圣节礼包", price: 80},
        {name: "圣诞帽", price: 15}, {name: "情人秋千", price: 68},
        {name: "中国绊爱套装", price: 64}, {name: "中国灯笼", price: 44},
        {name: "女巫帽", price: 34}, {name: "蛛网斗篷", price: 45},
        {name: "圣诞鹿角", price: 45}, {name: "暖冬瑞雪", price: 45},
        {name: "大桔大利", price: 3}, {name: "新春福娃", price: 86},
        {name: "情人跷跷板", price: 64}, {name: "温暖绒帽", price: 34},
        {name: "花憩茶座", price: 64}, {name: "清香粽叶", price: 46},
        {name: "小王子狐狸", price: 34}, {name: "小王子围巾", price: 46},
        {name: "贝壳发卡", price: 3}, {name: "夏日阳伞", price: 64},
        {name: "小王子行星夹克", price: 86}, {name: "玉兔礼包", price: 9},
        {name: "冥龙南瓜", price: 6}, {name: "蛛网朋克", price: 16},
        {name: "巫树犄角", price: 34}, {name: "疯女巫长裙", price: 34},
        {name: "多彩绒绒帽", price: 34}, {name: "雪花发卡", price: 6},
        {name: "白雪斗篷", price: 68}, {name: "雪花水晶球", price: 68},
        {name: "年年有鱼", price: 6}, {name: "鲤跃龙门", price: 64},
        {name: "情人小船", price: 64}, {name: "优雅小憩茶桌", price: 64},
        {name: "海龟斗篷", price: 45}, {name: "雏鸟之琴", price: 15},
        {name: "音韵吉他", price: 45}, {name: "凯旋手碟", price: 64},
        {name: "周年电吉他", price: 98}, {name: "水母肩饰", price: 9},
        {name: "篝火点心", price: 64}, {name: "皮皮猫", price: 34},
        {name: "皮皮猫装扮", price: 64}, {name: "奔离远行发型", price: 9},
        {name: "星月头冠", price: 15}, {name: "奔离远行服饰", price: 34},
        {name: "彩虹耳饰", price: 9}, {name: "彩虹耳机", price: 34},
        {name: "欧若拉之声", price: 45}, {name: "致爱装扮", price: 34},
        {name: "奉献斗篷", price: 46}, {name: "欧若拉之翼", price: 78},
        {name: "保暖雪人套装", price: 45}, {name: "球赛礼包", price: 45},
        {name: "祥云瑞气服饰", price: 34}, {name: "祥云瑞气纸伞", price: 45},
        {name: "优雅领巾", price: 15}, {name: "惊喜手杖", price: 45},
        {name: "四叶草头饰", price: 3}, {name: "园丁装扮", price: 34},
        {name: "野餐礼包", price: 64}, {name: "自然之声", price: 15},
        {name: "中国版爱大铁头", price: 45}, {name: "周年庆抱枕", price: 34},
        {name: "暗菜装扮", price: 45}, {name: "夏日有友", price: 34},
        {name: "凯旋提琴", price: 64}, {name: "跃动跑鞋", price: 24},
        {name: "夏日凉鞋", price: 34}, {name: "夏日冲浪", price: 45},
        {name: "玉兔拖鞋", price: 23}, {name: "时尚火焰墨镜", price: 9},
        {name: "时尚爱心墨镜", price: 15}, {name: "阔腿牛仔裤", price: 34},
        {name: "吸蟹伯爵面具", price: 9}, {name: "吸蟹伯爵斗篷", price: 45},
        {name: "蛛丝斗篷", price: 60}, {name: "古典音乐桌椅", price: 64},
        {name: "文雀装扮", price: 34}, {name: "飞蛾装扮", price: 34},
        {name: "雪人暖心靴", price: 45}, {name: "暖冬夹棉斗篷", price: 45},
        {name: "神鹿祝福头饰", price: 45}, {name: "异彩莲花斗篷", price: 64},
        {name: "肯德基联动礼包", price: 64}, {name: "金鳞耳坠", price: 6},
        {name: "龙鳞束身长袍", price: 34}, {name: "盘龙围巾斗篷", price: 45},
        {name: "浪漫流星斗篷", price: 58}, {name: "荷叶伞", price: 45},
        {name: "风之旅人", price: 98}, {name: "迷你大耳狗发饰", price: 24},
        {name: "大耳狗装扮", price: 45}, {name: "大耳狗服饰", price: 45},
        {name: "大耳狗抱枕", price: 45}, {name: "海蓝波浪发型", price: 24},
        {name: "小狗周年发饰", price: 15}, {name: "周年线框斗篷", price: 64},
        {name: "向日葵连衣裙", price: 24}, {name: "锦标赛桂冠", price: 15},
        {name: "挂肩外袍", price: 34}, {name: "飞鸟纸伞", price: 45},
        {name: "彩色泡泡机", price: 45}, {name: "日光耳环", price: 9},
        {name: "遥鲲披肩斗篷", price: 48}, {name: "满月耳坠", price: 9},
        {name: "月华霓裳", price: 45}, {name: "优雅三件套", price: 45},
        {name: "树精肩饰", price: 9}, {name: "史力奇帽子", price: 15},
        {name: "史力奇套装", price: 34}, {name: "姆明饰品套装", price: 39},
        {name: "恶作剧鸦羽斗篷", price: 59}, {name: "恶作剧飞行扫帚", price: 64},
        {name: "姆明妈妈手作斗篷", price: 98}, {name: "进行曲制服", price: 34},
        {name: "立式钢琴", price: 15}, {name: "仙境茶会门扉", price: 64},
        {name: "爱丽丝围裙套装", price: 43}, {name: "献瑞折扇", price: 15},
        {name: "衔福献瑞", price: 64}, {name: "心心相印发饰", price: 9},
        {name: "渐变双马尾发型", price: 45}, {name: "宝藏猎人", price: 45},
        {name: "玫瑰褶边斗篷", price: 45}, {name: "超凡风之旅人", price: 98}
    ];

    // 区服-季节映射（保持不变）
    const serverSeasons = {
        ios: [
            "感恩季", "追光季", "归属季", "音韵季", 
            "魔法季", "圣岛季", "预言季", "梦想季", 
            "集结季", "小王子季", "风行季", "潜海季", 
            "表演季", "破晓季", "欧若拉季", "追忆季", 
            "夜行记", "拾光季", "归巢季", "九色鹿季", 
            "筑巢季", "二重奏季", "姆明季", "彩染季", 
            "青鸟季", "暮星季"
        ],
        android_official: [
            "魔法季", "圣岛季", "预言季", "梦想季", 
            "集结季", "小王子季", "风行季", "潜海季", 
            "表演季", "破晓季", "欧若拉季", "追忆季", 
            "夜行记", "拾光季", "归巢季", "九色鹿季", 
            "筑巢季", "二重奏季", "姆明季", "彩染季", 
            "青鸟季", "暮星季"
        ],
        huawei: [
            "魔法季", "圣岛季", "预言季", "梦想季", 
            "集结季", "小王子季", "风行季", "潜海季", 
            "表演季", "破晓季", "欧若拉季", "追忆季", 
            "夜行记", "拾光季", "归巢季", "九色鹿季", 
            "筑巢季", "二重奏季", "姆明季", "彩染季", 
            "青鸟季", "暮星季"
        ],
        oppo: [
            "魔法季", "圣岛季", "预言季", "梦想季", 
            "集结季", "小王子季", "风行季", "潜海季", 
            "表演季", "破晓季", "欧若拉季", "追忆季", 
            "夜行记", "拾光季", "归巢季", "九色鹿季", 
            "筑巢季", "二重奏季", "姆明季", "彩染季", 
            "青鸟季", "暮星季"
        ]
    };

    // 渲染毕业季（一行3个）
    function renderSeasons(server) {
        const seasonsContainer = document.getElementById('seasons');
        seasonsContainer.innerHTML = '';
        
        if (server && serverSeasons[server]) {
            serverSeasons[server].forEach(season => {
                const label = document.createElement('label');
                label.className = 'checkbox-item';
                label.innerHTML = `
                    <input type="checkbox" name="seasons" value="${season}">
                    <span class="checkbox-text">${season}</span>
                `;
                label.addEventListener('click', function(e) {
                    if (e.target.tagName !== 'INPUT') {
                        const input = this.querySelector('input');
                        input.checked = !input.checked;
                    }
                    this.classList.toggle('selected', this.querySelector('input').checked);
                    updateCounters();
                });
                seasonsContainer.appendChild(label);
            });
        }
        updateCounters();
    }

    // 渲染礼包（一行3个，匹配新设计）
    function renderGifts() {
        const giftsContainer = document.getElementById('gifts');
        giftsContainer.innerHTML = '';
        
        giftData.forEach(gift => {
            const label = document.createElement('label');
            label.className = 'checkbox-item';
            label.innerHTML = `
                <input type="checkbox" name="gifts" value="${gift.name}">
                <span class="checkbox-text">${gift.name}</span>
            `;
            label.addEventListener('click', function(e) {
                if (e.target.tagName !== 'INPUT') {
                    const input = this.querySelector('input');
                    input.checked = !input.checked;
                }
                this.classList.toggle('selected', this.querySelector('input').checked);
                updateCounters();
            });
            giftsContainer.appendChild(label);
        });
        updateCounters();
    }

    // 更新选择计数器
    function updateCounters() {
        const seasonCount = document.querySelectorAll('#seasons input:checked').length;
        const giftCount = document.querySelectorAll('#gifts input:checked').length;
        
        document.getElementById('seasonCounter').textContent = seasonCount;
        document.getElementById('giftCounter').textContent = giftCount;
    }

    // 计算价值（表单提交）
    function handleSubmit(e) {
        e.preventDefault();
        const server = document.querySelector('select[name="server"]').value;
        
        if (!server) {
            alert('请选择区服');
            return;
        }
        
        const serverNameMap = {
            'ios': 'iOS', 'android_official': '安卓官服',
            'huawei': '华为渠道服', 'oppo': 'OPPO渠道服'
        };
        
        // 获取所有选中项
        const selectedSeasons = [];
        serverSeasons[server].forEach(season => {
            const input = document.querySelector(`#seasons input[value="${season}"]`);
            if (input && input.checked) selectedSeasons.push(season);
        });
        
        const selectedGifts = [];
        giftData.forEach(gift => {
            const input = document.querySelector(`#gifts input[value="${gift.name}"]`);
            if (input && input.checked) selectedGifts.push(gift.name);
        });
        
        if (selectedSeasons.length === 0) {
            alert('请至少选择1个已毕业的季节');
            return;
        }
        
        // 计算价格（使用隐藏的价格数据）
        const serverBasePrice = {
            'ios': 150, 'android_official': 120,
            'huawei': 80, 'oppo': 80
        }[server];
        
        let seasonTotal = selectedSeasons.reduce((sum, s) => sum + (seasonPrices[s] || 0), 0);
        let giftTotal = selectedGifts.reduce((sum, g) => {
            const gift = giftData.find(item => item.name === g);
            return sum + (gift ? gift.price : 0);
        }, 0);
        
        const totalPrice = serverBasePrice + seasonTotal + giftTotal;
        
        // 展示结果
        document.getElementById('serverName').textContent = serverNameMap[server];
        document.getElementById('serverBase').textContent = serverBasePrice;
        document.getElementById('seasonCount').textContent = selectedSeasons.length;
        document.getElementById('seasonTotal').textContent = seasonTotal;
        document.getElementById('giftCount').textContent = selectedGifts.length;
        document.getElementById('giftTotal').textContent = giftTotal;
        document.getElementById('totalPrice').textContent = totalPrice;
        
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    }

    // 重置表单
    function resetForm() {
        document.getElementById('valuationForm').reset();
        document.querySelectorAll('.checkbox-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
        document.getElementById('result').style.display = 'none';
        updateCounters();
    }

    // 页面初始化
    document.addEventListener('DOMContentLoaded', () => {
        renderSeasons('ios'); // 初始显示iOS区季节
        renderGifts();       // 初始显示所有礼包
        document.querySelector('select[name="server"]').addEventListener('change', (e) => renderSeasons(e.target.value));
        document.getElementById('valuationForm').addEventListener('submit', handleSubmit);
        document.querySelector('.btn-reset').addEventListener('click', resetForm);
    });
    </script>
</body>
</html>