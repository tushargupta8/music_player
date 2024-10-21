let forward=document.getElementById("forward")
    let  backward=document.getElementById("backward")
    let au=document.getElementById("a")
    let im=document.getElementById("ima")
    let arr=["2.mp3","3.mp3","4.mp3","5.mp3"]
    let arr1=["img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
    index=0
    forward.addEventListener("click",change1)
    backward.addEventListener("click",change2)
    function change1(){
        if (arr.length>index){
            au.setAttribute("src","mp3/"+arr[index])
            im.setAttribute("src","image/"+arr1[index])
     
            index=index+1
            console.log(index,arr[index])
        }
        else{
            index=index-1
            window.alert("Index out of range")
        }


    }
    function change2(){
        if (index>0){
        index=index-1
        
        console.log(index)
        au.setAttribute("src","mp3/"+arr[index])
        im.setAttribute("src","image/"+arr1[index])
        console.log(index,arr[index])
        }
        else{
            if (index==0){
            au.setAttribute("src","mp3/1.mp3")
            im.setAttribute("src","image/img1.jpg")
            index=index-1
            }else{
            window.alert("Index out of range")
            }
        }
    

    }