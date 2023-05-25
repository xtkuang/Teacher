var mind = {
    /* 元数据，定义思维导图的名称、作者、版本等信息 */
    "meta":{
        "name":"example",
        "author":"hizzgdev@163.com",
        "version":"0.2"
    },
    /* 数据格式声明 */
    "format":"node_array",
    /* 数据内容 */
    "data":[
        {"id":"root", "isroot":true, "topic":"jsMind"},

        {"direction":"right","id":"easy", "topic":"Easy","parentid":"root","background-color":"red" },
        {"id":"easy1", "parentid":"easy", "topic":"Easy to show"},
        {"id":"easy2", "parentid":"easy", "topic":"Easy to edit"},
        {"id":"easy3", "parentid":"easy", "topic":"Easy to store"},
        {"id":"easy4", "parentid":"easy", "topic":"Easy to embed"},

        {"id":"open", "parentid":"root", "topic":"Open Source", "expanded":false},
        {"id":"open1", "parentid":"open", "topic":"on GitHub"},
        {"id":"open2", "parentid":"open", "topic":"BSD License"},

        {"id":"powerful", "parentid":"root", "topic":"Powerful"},
        {"id":"powerful1", "parentid":"powerful", "topic":"Base on Javascript"},
        {"id":"powerful2", "parentid":"powerful", "topic":"Base on HTML5"},
        {"id":"powerful3", "parentid":"powerful", "topic":"<div class='line'>Node 6</div>"},
    ]
};

let options = {
    container:document.querySelector('.jsmind'),         // [必选] 容器的ID
    editable : true,       // 是否启用编辑
    theme : "custom",           // 主题
    // theme:null,
    mode :'side',           // 布局模式
    support_html : true,    // 是否支持节点里的HTML元素
    log_level: 'info',      // 日志级别
    view:{
        engine: 'canvas',   // 思维导图各节点之间线条的绘制引擎
        hmargin:100,        // 思维导图距容器外框的最小水平距离
        vmargin:50,         // 思维导图距容器外框的最小垂直距离
        line_width:1,       // 思维导图线条的粗细
        line_color:'#9cbde7',  // 思维导图线条的颜色
        draggable: true,   // 当容器不能完全容纳思维导图时，是否允许拖动画布代替鼠标滚动
        hide_scrollbars_when_draggable: true, // 当设置 draggable = true 时，是否隐藏滚动条
        node_overflow: 'hidden' // 节点文本过长时的样式
    },
    layout:{
        hspace:30,          // 节点之间的水平间距
        vspace:20,          // 节点之间的垂直间距
        pspace:13,          // 节点与连接线之间的水平间距（用于容纳节点收缩/展开控制器）
        cousin_space:0      // 相邻节点的子节点之间的额外的垂直间距
    },
    shortcut:{
        enable:true,        // 是否启用快捷键
        handles:{},         // 命名的快捷键事件处理器
        mapping:{           // 快捷键映射
            addchild   : [45, 4096+13], 	// <Insert>, <Ctrl> + <Enter>
            addbrother : 13,    // <Enter>
            editnode   : 113,   // <F2>
            delnode    : 46,    // <Delete>
            toggle     : 32,    // <Space>
            left       : 37,    // <Left>
            up         : 38,    // <Up>
            right      : 39,    // <Right>
            down       : 40,    // <Down>
        }
    },
 };


 var jm = new jsMind(options);
// 让 jm 显示这个 mind 即可
jm.show(mind); 
jm.add_node("root","root1", "hello", {"background-color":"red"});
console.log(mind.data);
function selected(){
    let select=jm.get_selected_node();
    const data="关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教。关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教。关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教。关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教。关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教。关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教。关于这个事，我简单说两句，你明白就行，总而言之，这个事呢，现在就是这个情况，具体的呢，大家也都看得到，也得出来说那么几句，可能，你听的不是很明白，但是意思就是那么个意思，不知道的你也不用去猜，这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教。"
    if(select){
        let showTopic = document.querySelector('.showTopic');
        let sonNode_num=select.children.length; 
        let Child_num=showTopic.children.length-1;
        let new_node=document.querySelector(".sonTopic").cloneNode("1");//克隆节点，"1"即包括子元素一起复制

        if(sonNode_num-1){
            document.querySelector(".branchTopic").innerText=select.topic;//修改分支标题
        }else{
            document.querySelector(".branchTopic").innerText="";
        }
        console.log("sonNode_num:"+sonNode_num);
        console.log("Child_num:"+Child_num);
        console.log(showTopic.children);
        
        if(Child_num>=sonNode_num){
            if(sonNode_num==0) sonNode_num=1;//叶子节点
            for(var i =sonNode_num+1;i<=Child_num;i++){//删除节点
                showTopic.removeChild(showTopic.children[1]);//删除第1个元素
            }
        }else{//增加元素 
            for(var i =Child_num+1;i<=sonNode_num;i++){
                let son=document.querySelector(".sonTopic");
                // let son=new_node;
                console.log(son);
                son.children[0].children[1]="";//主题名称
                son.children[1].children[1]="";//主题内容
                showTopic.appendChild(son);
            }
        }
    }
}
document.querySelector(".jsmind").onclick=selected;


