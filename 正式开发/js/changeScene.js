export const changeScene=()=>{
  const left_plane = $('#left_fly')
  const right_plane = $('#right_fly')
  const sky = $('#sky')

  //下面的两个left就是传入getFloor中的元素
  let imageId_left = 'sechelt'
  let imageId_right = 'cube'

  left_plane.click(() =>{
    sky.attr('src', '#' + imageId_left)
  })

  right_plane.click (()=>{
    sky.attr('src', '#' + imageId_right)
  })
  //下面要设置当前所在floor的值



  //在tab栏中切换
  const floor = $('template').get(1)
  let tab_index = 'tab' + floor.id
  const radio = $('#'+tab_index)
  radio.prop('checked',true)
}

