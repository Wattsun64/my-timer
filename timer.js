(function() {
    var s = 0,
    m = 0,
    minutes = document.getElementById('minutes'),
    sec = document.getElementById('seconds'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    reset = document.getElementById('reset'),
    t;

    minutes.textContent = m;
    sec.textContent = '0' + s;

    start.addEventListener('click', function(){ t = setInterval(timer, 1000); })

    stop.addEventListener('click', function() { clearInterval(t) })

    reset.addEventListener('click', function() { 
        s = 0;
        m = 0; 
        sec.textContent = '0' + s;
        minutes.textContent = m;
     });

    function timer() {
        if ( s < 9 ) {
            sec.textContent = '0' + (s+=1)
        } else {
            sec.textContent = s+=1

            if ( s === 60 ) {
                s = 0;
                sec.textContent = '0' + s;
                minutes.textContent = m+=1; 
            }
        }
    }
    
}())