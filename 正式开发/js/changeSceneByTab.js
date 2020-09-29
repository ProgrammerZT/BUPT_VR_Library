export const changeSceneByTab=()=>{
    $("ul").on('click','li',function(e){
        
        //找到ul的data-index 這個值就是層數了
        console.log(this);
        const index=$(this).data('requestid')
        console.log(index);


        //利用localStorage 设置当前的id号码
        // window.localStorage.setItem('id',index)

        //修改当前的层数
        
       

        // const url=https://api.nekomio.com/api?md5=
    })
}