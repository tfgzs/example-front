$.get('/ajax/index', function (d) {
    console.log(d)
    new Vue({
        el: '#app',
        data: {
            qingqingtuijian: d.model.qingqingtuijian_bookList,
            bannerList: d.model.bannerList,
            zhendianzhibao_bookList: d.model.zhendianzhibao_bookList,
            qingqingtuijian_bookList: d.model.qingqingtuijian_bookList,
            nanpintuijian_bookList: d.model.nanpintuijian_bookList,
            nvpintuijian_bookList: d.model.nvpintuijian_bookList,
            chinese_bookList: d.model.chinese_bookList,
            nonchinese_bookList: d.model.nonchinese_bookList,
            plate: d.model.plate
        }
    });
},'json');