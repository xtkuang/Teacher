
// // jm.add_node(parent_node, node_id, topic, data, direction)
// function a (data){//data为一个数组
//     //创建根节点
//     mind.data[0]=data[0];
//     //添加1级子节点
//     let regexp_1=/1\-\d/;
//     for(let i=1;i<data.length;i++){
//         if(data[i].id.test(regexp_1)){
//             
//             jm.add_node(1,data[i].id,data[i].topic,{
//                 "background-color":"#000daa",
//             })


//         }
//     }
    
// }
// 
//jm.add_node(parent_node, node_id, topic, data, direction)


$.ajax({
    type:"get",
    url:"https://hdums.hdu.edu.cn/api/article",
    dataType:"json",
    async:"false",
    success:function (data) {
        let options = {
            container:document.querySelector('.jsmind'),         // [必选] 容器的ID
            editable : true,       // 是否启用编辑
            theme : "custom",           // 主题
            mode :'side',           // 布局模式
            support_html : true,    // 是否支持节点里的HTML元素
            log_level: 'info',      // 日志级别
            view:{
                engine: 'canvas',   // 思维导图各节点之间线条的绘制引擎
                hmargin:100,        // 思维导图距容器外框的最小水平距离
                vmargin:50,         // 思维导图距容器外框的最小垂直距离
                line_width:2,       // 思维导图线条的粗细
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
         let mind={
            "meta":{
                "name":"",
                "author":"",
            },
            "format":"node_array",
            "data":[]
        }
        data[0][0]["topic"]=data[0][0].title;
        
        let array=data[0];
        mind.data=data[0];
        let jm = new jsMind(options);
        jm.show(mind);
        // function selected(jm, data){

        //     let select=jm.get_selected_node();
        //     if(select){
        //         let showTopic = document.querySelector('.showTopic');
        //         let sonNode_num=select.children.length; 
        //         let Child_num=showTopic.children.length-1;
        //         let new_node=document.querySelector(".sonTopic").cloneNode("1");//克隆节点，"1"即包括子元素一起复制
        //         
        //         
        //         
        //         //2.创建删除节点
        //         if(Child_num>=sonNode_num){
        //             if(sonNode_num==0) sonNode_num=1;//叶子节点
        //             for(var i =sonNode_num+1;i<=Child_num;i++){//删除节点
        //                 showTopic.removeChild(showTopic.children[1]);//删除第1个元素
        //             }
        //         }else{//增加元素 
        //             for(var i =Child_num+1;i<=sonNode_num;i++){
        //                 // let son=document.querySelector(".sonTopic");
        //                 let son=new_node;
        //                 
        //                 son.children[0].children[1]="";//主题名称
        //                 son.children[1].children[1]="";//主题内容
        //                 showTopic.appendChild(son);
        //             }
        //         }
        //         //3.修改数据
        //         if(sonNode_num){
        //             document.querySelector(".branchTopic").innerText=select.topic;//修改分支标题
        //         }else{
        //             document.querySelector(".branchTopic").innerText="";
        //         }
        //     //     for(let i=0;i<sonNode_num;i++){
                    
        //     //     }
        //      }
        // }
        document.querySelector(".jsmind").onclick=()=>{
            let select=jm.get_selected_node();

            if(select){
                let showTopic = document.querySelector('.showTopic');
                let sonNode_num=select.children.length;   
                let Child_num=showTopic.children.length-1;
                let new_node=document.querySelector(".sonTopic").cloneNode("1");//克隆节点，"1"即包括子元素一起复制
                
                
                
                //2.创建删除节点
                if(Child_num>=sonNode_num){
                    if(sonNode_num==0){
                        sonNode_num=1;//叶子节点
                        for(var i =sonNode_num+1;i<=Child_num;i++){//删除节点
                            showTopic.removeChild(showTopic.children[1]);//删除第1个元素
                        }
                        sonNode_num=0;
                    } else{
                        for(var i =sonNode_num+1;i<=Child_num;i++){//删除节点
                            showTopic.removeChild(showTopic.children[1]);//删除第1个元素
                        }
                    }
                }else{//增加元素 
                    for(let i =Child_num+1;i<=sonNode_num;i++){
                        let son=new_node.cloneNode("1");
                        // 
                        // 
                        // 
                        //son.children[0].children[1].innerText=i;//主题名称
                        //son.children[1].children[1].innerText=i;//主题内容
                        showTopic.appendChild(son);
                    }
                }
                //3.修改数据
                if(sonNode_num){//如果不是叶子节点
                    document.querySelector(".branchTopic").innerText=select.topic;//修改分支标题
                    for(let i=0;i<sonNode_num;i++){
                        let son_node=showTopic.children[i+1];
                        
                        
                        son_node.children[0].children[1].innerText=select.children[i].topic;//主题名称
                        son_node.children[1].children[1].innerText=select.children[i].data.content;//主题名称
                    }
                }else{//如果是叶子节点
                    document.querySelector(".branchTopic").innerText="";
                    let son_node=showTopic.children[1];
                    son_node.children[0].children[1].innerText=select.topic;//主题名称
                    son_node.children[1].children[1].innerText=select.data.content;//主题名称
                }
                
            }
        }
        jm.select_node("1")
        document.querySelector(".jsmind").click();
    }       
})



