const allDogs = [
    {
        dogName: "Abby",
        breed: "Sharpei",
        age: 7,
        month: 1
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5,
        month: 6
    },
    {
        dogName: "Allie",
        breed: "America Pit Bull Terrier",
        age: 6,
        month: 9
    },
    {
        dogName: "Arlo",
        breed: "Australian Cattle Dog",
        age: 1,
        month: 6
    },
    {
        dogName: "Aveda",
        breed: "Pit Bull",
        age: 6,
        month: 1
    },
    {
        dogName: "Benji",
        breed: "German Shepherd",
        age: 2,
        month: 1
    },
    {
        dogName: "Bjorn",
        breed: "Pit Bull",
        age: 1,
        month: 6
    },
    {
        dogName: "Bones",
        breed: "Terrier",
        age: 14,
        month: 1
    },
    {
        dogName: "Bronson",
        breed: "American Pit Bull Terrier",
        age: 6
    },
    {
        dogName: "Bubbie",
        breed: "Black-Mouth Cur",
        age: 1,
    },
]


const selectedDogs = [];
let ageR;
let currentOne = 1;

function showInfo(age) {
    alert("Below is the list of dogs above the age of " + age + " that is up for adoption. Thank you!")
    ///let pop = document.querySelector(".selectedPetInfo");
    ageR = age;
    selectedDogs.length = 0;
    allDogs.forEach(arrayDogs);
    console.log(allDogs);
    console.log(selectedDogs);
    console.log(age);
    displayInfo();
    ///pop.innerHTML = "Dog Name: " + allDogs[5].dogName + "<br>" + "Dog Breed: " + allDogs[5].breed + "<br>" + "Dog Age: " + allDogs[5].age;
}

function arrayDogs(age, index, arr) {
    if (arr[index].age > ageR) {
        selectedDogs.push(arr[index]);
        console.log(allDogs[index]);
    }
    console.log(ageR);
    return (allDogs[index]);
}

function displayInfo() {
    console.log("Now");
    let display = document.querySelector(".selectedPetInfo");
    ///var displayed = display.innerHTML;
    ///display.innerHTML = displayed + "<br>" + "<br>" + "Dog Name: " + allDogs[ages].dogName +
    ///        "<br>" + "Dog Breed: " + allDogs[ages].breed +
    ///        "<br>" + "Dog Age: " + allDogs[ages].age;
    let text = "<ul>";
    for (let i = 0; i < selectedDogs.length; i++) {
       ///display.innerHTML = displayed + "Dog Name: " + selectedDogs[i].dogName +
       ///    "<br>" + "Dog Breed: " + selectedDogs[i].breed +
       ///    "<br>" + "Dog Age: " + selectedDogs[i].age;
        text += "<br>" + "<li>" + selectedDogs[i].dogName +
            "<br>" + "Dog Breed: " + selectedDogs[i].breed +
            "<br>" + "Dog Age: " + selectedDogs[i].age + " Year(s) and " + selectedDogs[i].month + " Month(s)" + "</li>";
    }
    text += "</ul>";
    display.innerHTML = text;
}