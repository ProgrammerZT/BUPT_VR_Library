export const floorTab=()=>{
  const floorMax = 4
  const up = $('#up')
  const down = $('#down')

  up.click( function upFloor() {
    //切换楼层
    const floor = $('template').get(1)
    if (floor.id < floorMax) {
      const id = parseInt(floor.id)
      $(floor).attr('id',(id + 1)) 
      let tab_index = 'tab' + floor.id
      const radio = $('#'+tab_index)
      radio.prop('checked',true)
      // getTabShow()
    } else {
      alert('~这里已经是图书馆的最高层了哦,沿途看看呗~')
    }
  })

  down.click( function DownFloor() {
    //切换楼层
    const floor = $('template').get(1)
    if (floor.id > 1) {
      const id = parseInt(floor.id)
      $(floor).attr('id',(id - 1)) 
      let tab_index = 'tab' + floor.id
      const radio = $('#'+tab_index)
      radio.prop('checked',true)
    } else {
      alert('~这里就是一楼了哈,进馆转转吧~')
    }
  })
}

