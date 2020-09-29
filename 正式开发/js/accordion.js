export const getTabShow=()=>{
  const floor = $('template').get(1)
  let tab_index = 'tab' + floor.id
  console.log(tab_index)
  const radio = $('#'+tab_index)
  radio.prop('checked',true)
}