export const changeFloorByScene=()=>{
    $("ul").on('click','li',function(e){
        const ul=$(this).parent()
        //找到ul的data-index 這個值就是層數了
        const index=ul.data('index')
        
        //设置当前的层数
        $($('template').get(1)).prop('id',index)


        //在tab栏中更新当前层数
        const floor = $('template').get(1)
        let tab_index = 'tab' + floor.id
        console.log(tab_index)
        const radio = $('#'+tab_index)
        radio.prop('checked',true)
    })
}