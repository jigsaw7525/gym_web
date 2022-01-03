const nameEl = document.querySelector("#name");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const bmiBtn = document.querySelector("#bmi-btn");
const result = document.querySelector("#result");

console.log(nameEl, heightEl, weightEl);

comment = [
    { bmi: 18.5, comment: "過輕" },
    { bmi: 24, comment: "正常" },
    { bmi: 100, comment: "過重" }
];

function getBmi(height, weight, point = 2) {
    let bmi = (weight / (height / 100) ** 2).toFixed(point);
    return bmi;
}

bmiBtn.addEventListener("click", () => {
    bmi = getBmi(heightEl.value, weightEl.value);
    console.log(bmi);

    let weight = weightEl.value;
    let height = heightEl.value;
    if (weight == "" || height == "") {
        alert("輸入錯誤");
    }
    else {
        let bmiComment = "過重";
        for (let i = 0; i < comment.length; i++) {
            if (bmi <= comment[i]["bmi"]) {
                bmiComment = comment[i]["comment"];
                break;
            }
        }
        alert(`${nameEl.value} bmi = ${bmi}`);
        result.innerHTML = `<h2>bmi = ${bmi}<br>${bmiComment}</h2>`;

    }
})
