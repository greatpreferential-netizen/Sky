// 配置参数
const ITEMS_PER_PAGE = 20; // 每页显示的项目数量

// 毕业季价格表
const seasonPrices = {
    "感恩季": 2000, "追光季": 2000, "归属季": 1200, "音韵季": 3500,
    "魔法季": 1000, "圣岛季": 500, "预言季": 800, "梦想季": 300,
    "集结季": 300, "小王子季": 600, "风行季": 300, "潜海季": 250,
    "表演季": 500, "破晓季": 200, "欧若拉季": 200, "追忆季": 200,
    "夜行记": 200, "拾光季": 200, "归巢季": 200, "九色鹿季": 300,
    "筑巢季": 200, "二重奏季": 200, "姆明季": 200, "彩染季": 200,
    "青鸟季": 260, "暮星季": 260
};

// 礼包价格表（只保留名称和价格）
const giftData = [
    {name: "创始人礼包", price: 15},
    {name: "大音乐家礼包", price: 60},
    {name: "合伙人礼包", price: 90},
    {name: "万圣节礼包", price: 80},
    {name: "圣诞帽", price: 15},
    {name: "情人秋千", price: 68},
    {name: "中国绊爱套装", price: 64},
    {name: "中国灯笼", price: 44},
    {name: "女巫帽", price: 34},
    {name: "蛛网斗篷", price: 45},
    {name: "圣诞鹿角", price: 45},
    {name: "暖冬瑞雪", price: 45},
    {name: "大桔大利", price: 3},
    {name: "新春福娃", price: 86},
    {name: "情人跷跷板", price: 64},
    {name: "温暖绒帽", price: 34},
    {name: "花憩茶座", price: 64},
    {name: "清香粽叶", price: 46},
    {name: "小王子狐狸", price: 34},
    {name: "小王子围巾", price: 46},
    {name: "贝壳发卡", price: 3},
    {name: "夏日阳伞", price: 64},
    {name: "小王子行星夹克", price: 86},
    {name: "玉兔礼包", price: 9},
    {name: "冥龙南瓜", price: 6},
    {name: "蛛网朋克", price: 16},
    {name: "巫树犄角", price: 34},
    {name: "疯女巫长裙", price: 34},
    {name: "多彩绒绒帽", price: 34},
    {name: "雪花发卡", price: 6},
    {name: "白雪斗篷", price: 68},
    {name: "雪花水晶球", price: 68},
    {name: "年年有鱼", price: 6},
    {name: "鲤跃龙门", price: 64},
    {name: "情人小船", price: 64},
    {name: "优雅小憩茶桌", price: 64},
    {name: "海龟斗篷", price: 45},
    {name: "雏鸟之琴", price: 15},
    {name: "音韵吉他", price: 45},
    {name: "凯旋手碟", price: 64},
    {name: "周年电吉他", price: 98},
    {name: "水母肩饰", price: 9},
    {name: "篝火点心", price: 64},
    {name: "皮皮猫", price: 34},
    {name: "皮皮猫装扮", price: 64},
    {name: "奔离远行发型", price: 9},
    {name: "星月头冠", price: 15},
    {name: "奔离远行服饰", price: 34},
    {name: "彩虹耳饰", price: 9},
    {name: "彩虹耳机", price: 34},
    {name: "欧若拉之声", price: 45},
    {name: "致爱装扮", price: 34},
    {name: "奉献斗篷", price: 46},
    {name: "欧若拉之翼", price: 78},
    {name: "保暖雪人套装", price: 45},
    {name: "球赛礼包", price: 45},
    {name: "祥云瑞气服饰", price: 34},
    {name: "祥云瑞气纸伞", price: 45},
    {name: "优雅领巾", price: 15},
    {name: "惊喜手杖", price: 45},
    {name: "四叶草头饰", price: 3},
    {name: "园丁装扮", price: 34},
    {name: "野餐礼包", price: 64},
    {name: "自然之声", price: 15},
    {name: "中国版爱大铁头", price: 45},
    {name: "周年庆抱枕", price: 34},
    {name: "暗菜装扮", price: 45},
    {name: "夏日有友", price: 34},
    {name: "凯旋提琴", price: 64},
    {name: "跃动跑鞋", price: 24},
    {name: "夏日凉鞋", price: 34},
    {name: "夏日冲浪", price: 45},
    {name: "玉兔拖鞋", price: 23},
    {name: "时尚火焰墨镜", price: 9},
    {name: "时尚爱心墨镜", price: 15},
    {name: "阔腿牛仔裤", price: 34},
    {name: "吸蟹伯爵面具", price: 9},
    {name: "吸蟹伯爵斗篷", price: 45},
    {name: "蛛丝斗篷", price: 60},
    {name: "古典音乐桌椅", price: 64},
    {name: "文雀装扮", price: 34},
    {name: "飞蛾装扮", price: 34},
    {name: "雪人暖心靴", price: 45},
    {name: "暖冬夹棉斗篷", price: 45},
    {name: "神鹿祝福头饰", price: 45},
    {name: "异彩莲花斗篷", price: 64},
    {name: "肯德基联动礼包", price: 64},
    {name: "金鳞耳坠", price: 6},
    {name: "龙鳞束身长袍", price: 34},
    {name: "盘龙围巾斗篷", price: 45},
    {name: "浪漫流星斗篷", price: 58},
    {name: "荷叶伞", price: 45},
    {name: "风之旅人", price: 98},
    {name: "迷你大耳狗发饰", price: 24},
    {name: "大耳狗装扮", price: 45},
    {name: "大耳狗服饰", price: 45},
    {name: "大耳狗抱枕", price: 45},
    {name: "海蓝波浪发型", price: 24},
    {name: "小狗周年发饰", price: 15},
    {name: "周年线框斗篷", price: 64},
    {name: "向日葵连衣裙", price: 24},
    {name: "锦标赛桂冠", price: 15},
    {name: "挂肩外袍", price: 34},
    {name: "飞鸟纸伞", price: 45},
    {name: "彩色泡泡机", price: 45},
    {name: "日光耳环", price: 9},
    {name: "遥鲲披肩斗篷", price: 48},
    {name: "满月耳坠", price: 9},
    {name: "月华霓裳", price: 45},
    {name: "优雅三件套", price: 45},
    {name: "树精肩饰", price: 9},
    {name: "史力奇帽子", price: 15},
    {name: "史力奇套装", price: 34},
    {name: "姆明饰品套装", price: 39},
    {name: "恶作剧鸦羽斗篷", price: 59},
    {name: "恶作剧飞行扫帚", price: 64},
    {name: "姆明妈妈手作斗篷", price: 98},
    {name: "进行曲制服", price: 34},
    {name: "立式钢琴", price: 15},
    {name: "仙境茶会门扉", price: 64},
    {name: "爱丽丝围裙套装", price: 43},
    {name: "献瑞折扇", price: 15},
    {name: "衔福献瑞", price: 64},
    {name: "心心相印发饰", price: 9},
    {name: "渐变双马尾发型", price: 45},
    {name: "宝藏猎人", price: 45},
    {name: "玫瑰褶边斗篷", price: 45},
    {name: "超凡风之旅人", price: 98}
];

// 区服对应的季节映射
const serverSeasons = {
    ios: [
        "感恩季", "追光季", "归属季", "音韵季", "魔法季", "圣岛季",
        "预言季", "梦想季", "集结季", "小王子季", "风行季", "潜海季",
        "表演季", "破晓季", "欧若拉季", "追忆季", "夜行记", "拾光季",
        "归巢季", "九色鹿季", "筑巢季", "二重奏季", "姆明季", "彩染季",
        "青鸟季", "暮星季"
    ],
    android_official: [
        "魔法季", "圣岛季", "预言季", "梦想季", "集结季", "小王子季",
        "风行季", "潜海季", "表演季", "破晓季", "欧若拉季", "追忆季",
        "夜行记", "拾光季", "归巢季", "九色鹿季", "筑巢季", "二重奏季",
        "姆明季", "彩染季", "青鸟季", "暮星季"
    ],
    huawei: [
        "魔法季", "圣岛季", "预言季", "梦想季", "集结季", "小王子季",
        "风行季", "潜海季", "表演季", "破晓季", "欧若拉季", "追忆季",
        "夜行记", "拾光季", "归巢季", "九色鹿季", "筑巢季", "二重奏季",
        "姆明季", "彩染季", "青鸟季", "暮星季"
    ],
    oppo: [
        "魔法季", "圣岛季", "预言季", "梦想季", "集结季", "小王子季",
        "风行季", "潜海季", "表演季", "破晓季", "欧若拉季", "追忆季",
        "夜行记", "拾光季", "归巢季", "九色鹿季", "筑巢季", "二重奏季",
        "姆明季", "彩染季", "青鸟季", "暮星季"
    ]
};

// 存储当前分页状态
const paginationState = {
    seasons: {
        currentPage: 1,
        totalPages: 1,
        items: []
    },
    gifts: {
        currentPage: 1,
        totalPages: 1,
        items: []
    }
};

// 动态渲染季节选项（带分页）
function renderSeasons(server) {
    const seasonsContainer = document.getElementById('seasons');
    seasonsContainer.innerHTML = '';
    
    if (server && serverSeasons[server]) {
        // 存储所有季节项
        paginationState.seasons.items = serverSeasons[server];
        // 计算总页数
        paginationState.seasons.totalPages = Math.ceil(
            paginationState.seasons.items.length / ITEMS_PER_PAGE
        );
        // 确保当前页有效
        if (paginationState.seasons.currentPage > paginationState.seasons.totalPages) {
            paginationState.seasons.currentPage = 1;
        }
        
        // 更新分页控件
        updatePagination('seasons');
        
        // 获取当前页的项目
        const startIndex = (paginationState.seasons.currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const currentItems = paginationState.seasons.items.slice(startIndex, endIndex);
        
        // 渲染当前页的项目
        currentItems.forEach(season => {
            const price = seasonPrices[season] || 0;
            const label = document.createElement('label');
            label.className = 'checkbox-item';
            label.innerHTML = `
                <input type="checkbox" name="seasons" value="${season}">
                <span class="checkbox-text">${season}</span>
                <span class="price-tag">¥${price}</span>
            `;
            label.addEventListener('click', function(e) {
                // 防止点击文本时触发两次事件
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

// 动态渲染礼包选项（带分页）
function renderGifts() {
    const giftsContainer = document.getElementById('gifts');
    giftsContainer.innerHTML = '';
    
    // 存储所有礼包
    paginationState.gifts.items = giftData;
    // 计算总页数
    paginationState.gifts.totalPages = Math.ceil(
        paginationState.gifts.items.length / ITEMS_PER_PAGE
    );
    // 确保当前页有效
    if (paginationState.gifts.currentPage > paginationState.gifts.totalPages) {
        paginationState.gifts.currentPage = 1;
    }
    
    // 更新分页控件
    updatePagination('gifts');
    
    // 获取当前页的项目
    const startIndex = (paginationState.gifts.currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = paginationState.gifts.items.slice(startIndex, endIndex);
    
    // 渲染当前页的项目
    currentItems.forEach(gift => {
        const label = document.createElement('label');
        label.className = 'checkbox-item';
        label.innerHTML = `
            <input type="checkbox" name="gifts" value="${gift.name}">
            <span class="checkbox-text">${gift.name}</span>
            <span class="price-tag">¥${gift.price}</span>
        `;
        label.addEventListener('click', function(e) {
            // 防止点击文本时触发两次事件
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

// 更新分页控件
function updatePagination(target) {
    const paginationContainer = document.getElementById(`${target}Pagination`);
    const state = paginationState[target];
    
    // 清空现有页码（保留上一页和下一页按钮）
    while (paginationContainer.children.length > 2) {
        paginationContainer.removeChild(paginationContainer.children[1]);
    }
    
    // 添加页码按钮
    for (let i = 1; i <= state.totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = `page-btn ${i === state.currentPage ? 'active' : ''}`;
        pageBtn.dataset.target = target;
        pageBtn.dataset.page = i;
        pageBtn.textContent = i;
        
        pageBtn.addEventListener('click', () => {
            state.currentPage = i;
            if (target === 'seasons') {
                renderSeasons(document.querySelector('select[name="server"]').value);
            } else {
                renderGifts();
            }
        });
        
        // 插入到"下一页"按钮前
        paginationContainer.insertBefore(pageBtn, paginationContainer.lastChild);
    }
    
    // 更新上一页/下一页按钮状态
    const prevBtn = paginationContainer.querySelector('.prev');
    const nextBtn = paginationContainer.querySelector('.next');
    
    prevBtn.classList.toggle('disabled', state.currentPage === 1);
    nextBtn.classList.toggle('disabled', state.currentPage === state.totalPages);
    
    // 上一页按钮事件
    prevBtn.onclick = () => {
        if (state.currentPage > 1) {
            state.currentPage--;
            if (target === 'seasons') {
                renderSeasons(document.querySelector('select[name="server"]').value);
            } else {
                renderGifts();
            }
        }
    };
    
    // 下一页按钮事件
    nextBtn.onclick = () => {
        if (state.currentPage < state.totalPages) {
            state.currentPage++;
            if (target === 'seasons') {
                renderSeasons(document.querySelector('select[name="server"]').value);
            } else {
                renderGifts();
            }
        }
    };
}

// 更新计数器
function updateCounters() {
    const seasonCount = document.querySelectorAll('#seasons input:checked').length;
    const giftCount = document.querySelectorAll('#gifts input:checked').length;
    
    document.getElementById('seasonCounter').textContent = seasonCount;
    document.getElementById('giftCounter').textContent = giftCount;
}

// 表单提交处理
function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const server = formData.get('server');
    
    if (!server) {
        alert('请选择区服');
        return;
    }
    
    const serverNameMap = {
        'ios': 'iOS', 'android_official': '安卓官服',
        'huawei': '华为渠道服', 'oppo': 'OPPO渠道服'
    };
    
    // 获取所有选中的季节和礼包（跨分页）
    const selectedSeasons = [];
    paginationState.seasons.items.forEach(season => {
        const input = document.querySelector(`#seasons input[value="${season}"]`);
        if (input && input.checked) {
            selectedSeasons.push(season);
        }
    });
    
    const selectedGifts = [];
    paginationState.gifts.items.forEach(gift => {
        const input = document.querySelector(`#gifts input[value="${gift.name}"]`);
        if (input && input.checked) {
            selectedGifts.push(gift.name);
        }
    });
    
    if (selectedSeasons.length === 0) {
        alert('请至少选择1个已毕业的季节');
        return;
    }
    
    const serverBasePrice = {
        'ios': 150, 'android_official': 120,
        'huawei': 80, 'oppo': 80
    }[server];
    
    let seasonTotal = 0;
    selectedSeasons.forEach(season => seasonTotal += seasonPrices[season] || 0);
    
    let giftTotal = 0;
    selectedGifts.forEach(giftName => {
        const gift = giftData.find(g => g.name === giftName);
        giftTotal += gift ? gift.price : 0;
    });
    
    const totalPrice = serverBasePrice + seasonTotal + giftTotal;
    
    // 更新结果
    document.getElementById('serverName').textContent = serverNameMap[server];
    document.getElementById('serverBase').textContent = serverBasePrice;
    document.getElementById('seasonCount').textContent = selectedSeasons.length;
    document.getElementById('seasonTotal').textContent = seasonTotal;
    document.getElementById('giftCount').textContent = selectedGifts.length;
    document.getElementById('giftTotal').textContent = giftTotal;
    document.getElementById('totalPrice').textContent = totalPrice;
    
    // 显示结果
    document.getElementById('result').style.display = 'block';
    
    // 滚动到结果
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

// 重置表单
function resetForm() {
    document.getElementById('valuationForm').reset();
    document.querySelectorAll('.checkbox-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
    document.getElementById('result').style.display = 'none';
    
    // 重置分页状态
    paginationState.seasons.currentPage = 1;
    paginationState.gifts.currentPage = 1;
    
    // 重新渲染
    renderSeasons(document.querySelector('select[name="server"]').value);
    renderGifts();
    
    updateCounters();
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始渲染iOS季节
    renderSeasons('ios');
    
    // 初始渲染礼包
    renderGifts();
    
    // 区服选择事件
    document.querySelector('select[name="server"]').addEventListener('change', (e) => {
        paginationState.seasons.currentPage = 1; // 重置分页
        renderSeasons(e.target.value);
    });
    
    // 表单提交事件
    document.getElementById('valuationForm').addEventListener('submit', handleSubmit);
    
    // 重置按钮事件
    document.querySelector('.btn-reset').addEventListener('click', (e) => {
        e.preventDefault();
        resetForm();
    });
});
    