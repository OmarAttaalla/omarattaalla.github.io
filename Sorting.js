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
    var InsertionSortButton = document.getElementById("InsertionSort")
    var QuickSortButton = document.getElementById("QuickSort")
    var AllSticks = document.getElementsByClassName("SingleBar")
    var AddRandomSticksButton = document.getElementById("AddRandomize")

    AllSticks[0].style.height = "400px"

    AddStickButton.addEventListener("click", function(event) {
        var AllSticks = document.getElementsByClassName("SingleBar")

        if (AllSticks.length < 19) {
            if (InputElement.value > 0 && InputElement.value <= 400) {
                let NewStick = document.createElement("li")
                var BarHolder = document.getElementById("BarHolder")

                NewStick.classList.add("SingleBar")
                NewStick.style.height = InputElement.value + "px"
                BarHolder.append(NewStick)

                NewStick.addEventListener("click", function(event) {
                    if (Sorting == true) {return}
        
                    NewStick.remove()

                })
            }
        }
    })

    AddRandomSticksButton.addEventListener("click", function(event) {
        AddRandomSticks()
    })

    SelectionSortButton.addEventListener("click",function(event) {
        Comparisons = 0
        UpdateData()
        SelectionSort()
    })

    InsertionSortButton.addEventListener("click",function(event) {
        Comparisons = 0
        UpdateData()
        InsertionSort()
    })

    QuickSortButton.addEventListener("click", function(event) {
        Comparisons = 0
        UpdateData()
        QuickSort(0,document.getElementsByClassName("SingleBar").length - 1)
    })



}


function resolveAfterTime(x) {
    if (!x){ x = 800}
    return new Promise(resolve => { 
        setTimeout(() => {
        resolve(x);
        }, x);
    });
}

function PixelsToNum(x) {
    const parsed = parseInt(x, 10);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}

function UpdateData () {
    ComparisonHolder = document.getElementById("Comparisons")
    ComparisonHolder.innerHTML = "# of Comparisons: " + Comparisons
}

var Comparisons = 0;
  
async function SelectionSort() {
    if (Sorting == true) { return}

    Sorting = true;

    var AllSticks = document.getElementsByClassName("SingleBar")

    for (var i = 0; i < AllSticks.length; ++i) {
        AllSticks[i].style.backgroundColor = "green";
        await resolveAfterTime();
        var SmallestElement = AllSticks[i]

        for (var g = i + 1; g < AllSticks.length; ++g) {
            ++Comparisons
            UpdateData()
            if (PixelsToNum(AllSticks[g].style.height) < PixelsToNum(SmallestElement.style.height)) {
                if (SmallestElement !== AllSticks[i]) {
                    SmallestElement.style.backgroundColor = "aliceblue"
                }
                SmallestElement = AllSticks[g];
                SmallestElement.style.backgroundColor = "green";
                await resolveAfterTime();
            } else {
                AllSticks[g].style.backgroundColor = "red"
                await resolveAfterTime();
                AllSticks[g].style.backgroundColor = "aliceblue"
            }
        }

        var SmallestHeight = SmallestElement.style.height
        SmallestElement.style.height = AllSticks[i].style.height
        AllSticks[i].style.height = SmallestHeight

        await resolveAfterTime();

        AllSticks[i].style.backgroundColor = "aliceblue"
        SmallestElement.style.backgroundColor = "aliceblue"
        await resolveAfterTime();
    }

    Sorting = false;
}

async function InsertionSort () {
    if (Sorting == true) { return}

    Sorting = true;

    const AllSticks = document.getElementsByClassName("SingleBar")

    for (var i = 0; i < AllSticks.length; i++) {
        var g = i;

        AllSticks[i].style.backgroundColor = "yellow"
        await resolveAfterTime();

        //Check element to the left of g, seeing if it is smaller. If so, swap them
        let checked = false

        while (g >= 0) {
            if ( g >= 1 && PixelsToNum(AllSticks[g].style.height) < PixelsToNum(AllSticks[g - 1].style.height)) {
                ++Comparisons
                UpdateData()
                console.log(Comparisons)
                AllSticks[g].style.backgroundColor = "yellow"
                AllSticks[g - 1].style.backgroundColor = "yellow"
                await resolveAfterTime();

                const height = AllSticks[g].style.height
                AllSticks[g].style.height = AllSticks[g - 1].style.height
                AllSticks[g - 1].style.height = height
                await resolveAfterTime();

                AllSticks[g].style.backgroundColor = "green"
                await resolveAfterTime();
            } else {
                AllSticks[g].style.backgroundColor = "green"
                if (checked == false) {
                    checked = true
                    ++Comparisons
                    UpdateData()
                }
            }
            --g
        }
    }

    await resolveAfterTime();

    for (var i = 0; i < AllSticks.length; i++) {
        AllSticks[i].style.backgroundColor = "aliceblue"
    }

    Sorting = false;
}

var PreviousPivot;

async function QuickSort(low, high) {
    Sorting = true

    const AllSticks = document.getElementsByClassName("SingleBar")

    ++Comparisons
    UpdateData()
    if (low < high) {
        let pivot = await Partition(low, high);

        if (PreviousPivot) {
            PreviousPivot.style.backgroundColor = "aliceblue"
        }

        AllSticks[pivot].style.backgroundColor = "black"

        PreviousPivot = AllSticks[pivot]

        await resolveAfterTime();
 
        await QuickSort(low, pivot - 1);
        await QuickSort(pivot + 1, high);

        Sorting = false
    }

}


async function Partition(low,high) {
    const AllSticks = document.getElementsByClassName("SingleBar")

    pivot = AllSticks[high]
    i = (low - 1);

    let Traversed = []
 
    for (let j = low; j <= high - 1; j++) {
        AllSticks[j].style.backgroundColor = "yellow";
        Traversed.push(AllSticks[j])
        await resolveAfterTime();
        ++Comparisons
        UpdateData()
        if (PixelsToNum(AllSticks[j].style.height) < PixelsToNum(pivot.style.height)) {
            i++;
            AllSticks[i].style.backgroundColor = "green";
            AllSticks[j].style.backgroundColor = "green";

            Traversed.push(AllSticks[j])
            Traversed.push(AllSticks[i])

            await resolveAfterTime();

            let first = AllSticks[i].style.height
            AllSticks[i].style.height = AllSticks[j].style.height
            AllSticks[j].style.height = first
            await resolveAfterTime();
        }
    }

    let first = AllSticks[i + 1].style.height
    AllSticks[i + 1].style.height = AllSticks[high].style.height
    AllSticks[high].style.height = first

    await resolveAfterTime();

    for (let i = 0; i < Traversed.length; ++i) {
        Traversed[i].style.backgroundColor = "aliceblue"
    }

    return (i + 1);
}



function AddRandomSticks () {
    var AllSticks = document.getElementsByClassName("SingleBar")
    while (AllSticks.length < 19) {
        let NewStick = document.createElement("li")
        var BarHolder = document.getElementById("BarHolder")
        var RandomHeight = 400 - Math.floor(Math.random() * 400)

        NewStick.classList.add("SingleBar")
        NewStick.style.height = RandomHeight + "px"
        BarHolder.append(NewStick)

        NewStick.addEventListener("click", function(event) {
            if (Sorting == true) {return}

            NewStick.remove()
            
        })
    }
}