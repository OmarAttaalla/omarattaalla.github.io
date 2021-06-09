// const http = require('http')
// const port = 3000;

// const server = http.createServer(function(req, res) {

// })

// server.listen(port, function(error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Server");
//     }
// })

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

var Sorting = false;



function ready() {
    var AddStickButton = document.getElementById("AddButton")
    var InputElement = document.getElementById("HeightInput")
    var SelectionSortButton = document.getElementById("SelectionSort")
    var AllSticks = document.getElementsByClassName("SingleBar")

    AllSticks[0].style.height = "400px"

    AddStickButton.addEventListener("click", function(event) {
        var AllSticks = document.getElementsByClassName("SingleBar")

        if (AllSticks.length < 19) {
            if (InputElement.value > 0 && InputElement.value <= 400) {
                var NewStick = document.createElement("li")
                var BarHolder = document.getElementById("BarHolder")

                NewStick.classList.add("SingleBar")
                NewStick.style.height = InputElement.value + "px"
                BarHolder.append(NewStick)
            }
        }
    })

    SelectionSortButton.addEventListener("click",function(event) {
        SelectionSort()
    })



}


function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(x);
        }, 800);
    });
}

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed;
  }
  
async function SelectionSort() {
    var AllSticks = document.getElementsByClassName("SingleBar")

    for (var i = 0; i < AllSticks.length; ++i) {
        AllSticks[i].style.backgroundColor = "green";
        await resolveAfter2Seconds(10);
        var SmallestElement = AllSticks[i]

        for (var g = i + 1; g < AllSticks.length; ++g) {
            if (roughScale(AllSticks[g].style.height,10) < roughScale(SmallestElement.style.height,10)) {
                console.log("G Height: " + AllSticks[g].style.height)
                console.log("Smallest Height: " + SmallestElement.style.height)
                if (SmallestElement !== AllSticks[i]) {
                    SmallestElement.style.backgroundColor = "aliceblue"
                }
                SmallestElement = AllSticks[g];
                SmallestElement.style.backgroundColor = "green";
                await resolveAfter2Seconds(10);
            } else {
                AllSticks[g].style.backgroundColor = "red"
                await resolveAfter2Seconds(10);
                AllSticks[g].style.backgroundColor = "aliceblue"
            }
        }

        var SmallestHeight = SmallestElement.style.height
        SmallestElement.style.height = AllSticks[i].style.height
        AllSticks[i].style.height = SmallestHeight

        await resolveAfter2Seconds(10);

        AllSticks[i].style.backgroundColor = "aliceblue"
        SmallestElement.style.backgroundColor = "aliceblue"
        await resolveAfter2Seconds(10);
    }
}

