(function () {
   $(function(){
    const music = $('#music')
    const song = $('#guoge')
    
    // song.prop('src','./audio/guoge.mp3')
    const audio=document.getElementById('guoge')
    audio.src="audio/guoge.mp3"
    // setTimeout(()=>{
    //     audio.muted=false
    // },0)
    music.click(()=> {
        const src = music.prop('src')
        if (src.indexOf('on') > 0) {
            music.prop('src', 'images/off.png')
            song.get(0).pause()
        } else if (src.indexOf('off') > 0) {
            music.prop('src', 'images/on.png')
            song.get(0).play();
        }
    })

    song.get(0).onended=function(){
        music.prop('src', 'images/off.png')
        music.get(0).currentTime=0
    }
   }) 
})()