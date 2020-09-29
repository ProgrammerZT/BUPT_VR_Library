export const request=()=>{
    let baseUrl='https://api.nekomio.com/api'
    let md5_1='092e3e701c63007bed77c50b85fbb7cf'
    $('a-image').get(0).setAttribute('position',{x:-3,y:2 ,z:-3})
    $.get(baseUrl,{md5:md5_1},function(data){
        console.log(data);
        handleData(data)
    })
}

function handleFloor(floor){
    const f = $('template').get(1)
    f.id=floor
    let tab_index = 'tab' + f.id
    const radio = $('#'+tab_index)
    radio.prop('checked',true)
}

function handleData(data){
    const {floor,pic,to}=data
    //设置floor
    handleFloor(floor)

    //设置pic
    $('a-sky').attr('src',pic)

    //设置小飞机的位置
    $('a-image').get(0).setAttribute('position',{x:-3,y:2 ,z:-3})
}