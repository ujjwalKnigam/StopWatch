var h = 0;
var m = 0;
var s = 0;
let second 
function setDefault()
{
    document.getElementById("hours").innerHTML = h<10 ? `0${h}` : h;
    document.getElementById("minutes").innerHTML = m<10 ? `0${m}` : m;
    document.getElementById("seconds").innerHTML = s<10 ? `0${s}` : s;
}
function start()
{
    second = setInterval(() => 
    {
        s = s + 1   
        if (s == 60)
        {
            s = 0;
            m = m + 1;
        }
        if (m == 60)
        {
            m = 0;
            h = h + 1;
        }
        document.getElementById("hours").innerHTML = h<10 ? `0${h}` : h;
        document.getElementById("minutes").innerHTML = m<10 ? `0${m}` : m;
        document.getElementById("seconds").innerHTML = s<10 ? `0${s}` : s;
    },1000); 
}
function stop()
{
    clearInterval(second);
}
function restart()
{
    h = 0;
    m = 0;
    s = 0;
    clearInterval(second)
    document.getElementById("hours").innerHTML = h<10 ? `0${h}` : h;
    document.getElementById("minutes").innerHTML = m<10 ? `0${m}` : m;
    document.getElementById("seconds").innerHTML = s<10 ? `0${s}` : s;

}