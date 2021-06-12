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
    var InsertionSortButton = document.getElementById("InsertionSort")
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

                    console.log("Removed")
                })
            }
        }
    })

    AddRandomSticksButton.addEventListener("click", function(event) {
        AddRandomSticks()
    })

    SelectionSortButton.addEventListener("click",function(event) {
        SelectionSort()
    })

    InsertionSortButton.addEventListener("click",function(event) {
        InsertionSort()
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

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed;
  }
  
async function SelectionSort() {
    if (Sorting == true) { return}

    Sorting = true;

    var AllSticks = document.getElementsByClassName("SingleBar")

    for (var i = 0; i < AllSticks.length; ++i) {
        AllSticks[i].style.backgroundColor = "green";
        await resolveAfterTime();
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
        while (g >= 0 ) {
            if ( g >= 1 && roughScale(AllSticks[g].style.height,10) < roughScale(AllSticks[g - 1].style.height,10)) {
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

async function QuickSort() {
    if(i >= k){
        return;
    }
    const AllSticks = document.getElementsByClassName("SingleBar")

    let pivot = medianOfThree(AllSticks[i], AllSticks[(i+k)/2], AllSticks[k]);
    let lowIndex = i;
    let highIndex = k;
    let done = false;

    while(!done){
        while(AllSticks[lowIndex] < pivot){
            lowIndex += 1;
        }
        while(pivot < AllSticks[highIndex]){
            highIndex -= 1;
        }
        if(lowIndex >= highIndex){
            done = true;
        }
        else{
            swap(AllSticks[lowIndex],AllSticks[highIndex]);
            lowIndex += 1;
            highIndex -= 1;
        }
    }


    Quicksort_medianOfThree(AllSticks, i, highIndex);
    Quicksort_medianOfThree(AllSticks, highIndex + 1, k);
}


function medianOfThree(first,middle,last){
    if (roughScale(first.style.height,10) > roughScale(middle.style.height,10)) {
		if (roughScale(middle.style.height,10) > roughScale(last.style.height,10)) {
			return middle;
		}
		else if (roughScale(first.style.height,10) > roughScale(last.style.height,10)) {
			return last;
		}
		else {
			return first;
		}
	}
	else {
		if (roughScale(first.style.height,10) > roughScale(last.style.height,10)) {
			return first;
		}
		else if (roughScale(middle.style.height,10) > roughScale(last.style.height,10)) {
			return last;
		}
		else {
			return middle;
		}
	}
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
            
            console.log("Removed")
        })
    }
}

