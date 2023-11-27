
taskbar = 0;

document.addEventListener('mousemove', function(e){
    x = e.clientX;
    y = e.clientY;
});

document .addEventListener("keydown", (event) => {
    if ((event. ctrlKey || event. metaKey) && event. key === "e") {
        document.getElementById("search").value = "https://";
        document.getElementById("search").style.display = "block";
        document.getElementById("searchbox").style.opacity = "1";
        document.getElementById("searchbox").style.left = x + 'px';
        document.getElementById("searchbox").style.top = y + 'px';
        document.getElementById("searchbox").style.display = "block";
        taskbar = 1;
    }
});

document.addEventListener ("keydown", function () {
    var q=event.keyCode || event.which;
    if (q==27)
    {
    document.getElementById("searchbox").style.opacity = "0";
    document.getElementById("search").style.display = "none";
    taskbar = 0;
    }
})

document.addEventListener ("keydown", function () {
    var z=event.keyCode || event.which;
    if (z==13) {
        if (taskbar == 1) {
            search = document.getElementById("search").value;
            if (search.includes('https://')) {
                window.open(search);
            }else{
                window.open("https://www.google.com/search?q=" + search);
            }


        }
    }

})




        
        
