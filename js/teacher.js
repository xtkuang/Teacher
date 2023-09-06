    //名师介绍
    //教师添加删除2.修改num的数量(大于等于6不改)
    var num=12

    num = (function () {
        let result;
        $.ajax({
            type: 'get',
            url: 'https://hdums.hdu.edu.cn/gw/api/teacher/1/0',
            dataType: 'json',
            async:false, 
            success: (response) => {
                result = response.data.total;
            }
        })
        return result;
    })();

    if(num>6){
        for (let i = 7; i <= num; i++) {
            $(".ellipse3").append(`
                <div class="orbit" >
                    <div class="circle circle-left1"  index=`+i+` fix=`+i+`>
                        <div class="photo" ></div>
                        <div class="bac-circle"></div>
                    </div>
                </div>   
            `)
        }
    }

    nameArrayLocal=[]
    textArrayLocal=[]
    majorArrayLocal=[]
    imgArrayLocal=[]
    imgUrlArrayLocal=[]

    nameArray=[]
    textArray=[]
    majorArray=[]
    imgArray=[]
    imgUrlArray=[]

    //往前或往后移动数组指定位数  
    function rotateArray(arr, shiftBy) {
        const length = arr.length;

        if (length === 0) {
            return arr;
        }

        const shiftedArray = [];

        for (let i = 0; i < length; i++) {
            const newIndex = (i + shiftBy+length) % length;
            shiftedArray[newIndex] = arr[i];
        }

        return shiftedArray;
    }

    var urlParams = new URLSearchParams(window.location.search);

    // 从localStorage中获取存储的数据,网页初始加载local数据
    function updateLocalTeacher(){
        var teacherData = JSON.parse(localStorage.getItem("teacherResponse"));
        if(teacherData!==null &&num==teacherData.length){

            var num_start = parseInt(urlParams.get("num"))
            // 
            var num_now=0
            if(num_start)
            {
                num_now=4-num_start
            }
            //向右转num_now位   
            // 
            teacherData=rotateArray(teacherData,num_now)

            for(let i=0;i<num;i++){
                nameArrayLocal[i]=teacherData[i].name
                textArrayLocal[i]=teacherData[i].intro
                majorArrayLocal[i]=teacherData[i].title
                imgUrlArrayLocal[i]=teacherData[i].picture
                imgArrayLocal[i]=teacherData[i].picture_b64
            }

            for(let i=1;i<=num;i++){
                $("[fix="+i+"] .photo").css("background-image","url(data:image/jpeg;base64,"+imgArrayLocal[i-1]+"")
            }
            let teacher=$("[index='4']")
            let fix=teacher.attr("fix")-1
            $(".boxtext span").html(textArrayLocal[fix])
            $(".name span").html(nameArrayLocal[fix])
            $(".major span").html(majorArrayLocal[fix])
            $(".photoHolder .photo .img").css("background-image","url(data:image/jpeg;base64,"+imgArrayLocal[fix]+"")
        }
   
    }

    updateLocalTeacher()

    
    //请求后端数据
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://hdums.hdu.edu.cn/api/teacher_intro', true);
    xhr.responseType = 'json'; // 如果接口返回的是JSON数据
    xhr.onload = function() {

        var teacherResponse = xhr.response; // 获取服务器返回的数据
        // 存储数据到localStorage中
        localStorage.setItem('teacherResponse', JSON.stringify(teacherResponse));

        var num_start = parseInt(urlParams.get("num"))
        // 
        var num_now=0
        if(num_start)
        {
            num_now=4-num_start
        }
        // 

        teacherResponse=rotateArray(teacherResponse,num_now)

        for(let i=0;i<num;i++){
            nameArray[i]=teacherResponse[i].name
            textArray[i]=teacherResponse[i].intro
            majorArray[i]=teacherResponse[i].title
            imgUrlArray[i]=teacherResponse[i].picture
            imgArray[i]=teacherResponse[i].picture_b64
        }

        let teacher=$("[index='4']")
        let fix=teacher.attr("fix")-1

        for(let i=1;i<=num;i++){
            if(imgUrlArray[i-1]!=imgUrlArrayLocal[i-1]){
                
                imgUrlArrayLocal[i-1]=imgUrlArray[i-1]
                imgArrayLocal[i-1]=imgArray[i-1]
                $("[fix="+i+"] .photo").css("background-image","url(data:image/jpeg;base64,"+imgArrayLocal[i-1]+"").hide().fadeIn()
                if(i==teacher.attr("fix")){
                    
                    $(".photoHolder .photo .img").css("background-image","url(data:image/jpeg;base64,"+imgArrayLocal[fix]+"").hide().fadeIn()

                }
            }
        }

        if(textArray[fix]!=textArrayLocal[fix]){
            
            textArrayLocal[fix]=textArray[fix]
            $(".boxtext span").html(textArrayLocal[fix]).hide().fadeIn()
        }
        if(nameArray[fix]!=nameArrayLocal[fix]){
            nameArrayLocal[fix]=nameArray[fix]
            $(".name span").html(nameArrayLocal[fix]).hide().fadeIn()
        }
        if(majorArray[fix]!=majorArrayLocal[fix]){
            
            majorArrayLocal[fix]=majorArray[fix]
            $(".major span").html(majorArrayLocal[fix]).hide().fadeIn()
        }

        for(let i=0;i<num;i++){
            nameArrayLocal[i]=nameArray[i]
            textArrayLocal[i]=textArray[i]
            majorArrayLocal[i]=majorArray[i]

        }

    };
    xhr.send()
    const timeInterval=0.7
    let isAnimating=false
    //教师添加删除3.修改bottom变量名 (大于等于6可不改)
    function moveNext(){
        let left1=$("[index='1']")
        let left2=$("[index='2']")
        let mid=$("[index='3']")
        let right2=$("[index='4']")
        let right1=$("[index='5']")

        let bottom_left=$("[index="+num+"]")


        let circle=$("[index='3'] .bac-circle")
        let photo=$("[index='3'] .photo")
        let bar=$("[index='4'] .bac-circle")
        let circle2=$("[index='5'] .bac-circle")

        //教师添加删除4.修改变量名,使最后一个老师指向left1 (大于等于6可不改)
        left1.addClass("to-left2")
        left2.addClass("to-mid")
        mid.addClass("to-right2")
        right2.addClass("to-right1")
        right1.addClass("to-bottom-right")
        bottom_left.addClass("to-left1")

        circle.addClass("to-bar")
        bar.addClass("to-circle")
        circle2.addClass("to-left1-circle")
        photo.addClass("click")

    }

    function indexUpdateNext(){
        $(".circle").each(function(index){
            let newIndex= $(this).attr('index')
            newIndex=(newIndex ) % num + 1;
            $(this).attr('index',newIndex)
        })
    }

    //教师添加删除5.修改变量名,使最后一个老师的index为1  (大于等于6可不改)
    //idnex值应该为之前add多1
    function removeClassNext(){
        let left1=$("[index='2']")
        let left2=$("[index='3']")
        let mid=$("[index='4']")
        let right2=$("[index='5']")
        let right1=$("[index='6']")
        let bottom_left=$("[index='1']")


        let circle=$("[index='4'] .bac-circle")
        let bar=$("[index='5'] .bac-circle")
        let circle2=$("[index='6'] .bac-circle")
        let photo=$("[index='4'] .photo")

        //教师添加删除6.remove的样式要与之前添加的样式相对应  (大于等于6可不改)
        left1.removeClass("to-left2")
        left2.removeClass("to-mid")
        mid.removeClass("to-right2")
        right2.removeClass("to-right1")
        right1.removeClass("to-bottom-right")
        bottom_left.removeClass("to-left1")


        circle.removeClass("to-bar")
        circle2.removeClass("to-left1-circle")
        bar.removeClass("to-circle")
        photo.removeClass("click")
    }

    function stopClick(){
        $(".circle").each(function(){
            $(this).css('cursor', 'wait');
            $(this).css('pointer-events', 'none');
        })
    }

    function ableClick(){
        $(".circle").each(function(){
            $(this).css('cursor', 'pointer');
            $(this).css('pointer-events', 'auto');
        })
    }

    function changeBox(){

        let teacher=$("[index='3']")
        let fix=teacher.attr("fix")-1

        let name=$(".name span")
        let text=$('.boxtext span')
        let major=$(".major span")


        name.text(nameArrayLocal[fix]).hide().fadeIn();
        text.text(textArrayLocal[fix]).hide().fadeIn();
        major.text(majorArrayLocal[fix]).hide().fadeIn();
    }

    function changePhoto(){
        let photoName=$("[index='3']").find(".photo").css("background-image")
        // 
        $(".box .img").css("background-image",photoName)
    }

    $(".circle").click(function(){
        //在动画执行时,禁止再次点击操作
        stopClick()
        //动画执行
        moveNext();
        //改变左上角box里的文字内容
        changeBox()
        // 改变左上角box图片
        changePhoto()
        //动画结束后让circle的index+1,并且移除动画添加的类
        setTimeout(function() {
            indexUpdateNext()
            removeClassNext()
        }, timeInterval*1000);

        //在动画结束过0.7s后才可继续点击
        setTimeout(function() {
            ableClick()

        }, timeInterval*1000);

    })
    
