 //判断系统类型
 function OSnow () {
    var agent = navigator.userAgent.toLowerCase()
    var isMac = /macintosh|mac os x/i.test(navigator.userAgent)
    let box = document.querySelector(".prompt-box .prompt")
    let promot = "0"
    if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
        //your code
        promot = "F11"
        //alert("这是windows32位系统");
    }
    if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
        //your code
        promot = "F11"
        // alert("这是windows64位系统");
    }
    if (isMac) {
        promot = "shift+command+f"
        //your code
        //alert("这是mac系统");
    }
    
    box.innerHTML = "键盘输入" + promot + "全屏显示"
}
OSnow();
(function () {
    setTimeout(() => {
        let prompt = document.querySelector(".prompt-box")
        prompt.classList.add('box-load-in')
        setTimeout(() => {
            prompt.classList.remove('box-load-in')
            prompt.classList.add('box-load-out')
        }, 5000)
    }, 1000)

})()

page = ["./index.html", "./theory.html", "teacher.html", "./Future.html", "./Thanks.html", "./HotNews.html"]
let now_num = 0
let now_page = document.querySelector('.container')
let pre_num = [0]
let times = 1


//携带参数num时跳转到teacher页面
var urlParams = new URLSearchParams(window.location.search)
var num_start = parseInt(urlParams.get("num"))

if (num_start) {
    loadPage(2, 0)
}


function loadPage (num, bool) {

    if (now_num != num) {
        if (bool === 0) {
            times = 1
        }
        now_page.classList.remove('page-in')
        now_page.classList.add('page-out')
        setTimeout((num) => {
            now_page.classList.remove('page-out')
            now_page.classList.add('page-in')
            if(num_start&&num===2){
                document.querySelector('iframe').src = "teacher.html?num="+num_start
            }
            else{
                document.querySelector('iframe').src = page[num]
            }
            // document.querySelector('iframe').src = page[num]

        }, 300, num)
        //alert(times)
        if (times === 1)
            pre_num.push(num)
        now_num = num

    }
    //这里利用传入的num顺便实现按钮变色 
    let holder = document.querySelectorAll('.holder')

    for (var i = 0; i < 6; i++) {
        
        holder[i].classList.remove("selected")
    }
    holder[num].classList.add("selected")

}
function logout () {
    times++
    
    
    
    //alert(pre_num)
    let num = pre_num.length - times
    if (num > 0)
        loadPage(pre_num[num], 1)
    else
        loadPage(0, 1)

}