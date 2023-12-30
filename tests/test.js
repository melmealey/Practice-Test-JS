/* DO NOT TOUCH THIS FILE */
/* DO NOT TOUCH THIS FILE */
/* DO NOT TOUCH THIS FILE */

const btn = document.querySelector('#test-btn')

const makePass = (selectorStr) => {
    const el = document.querySelector(selectorStr)
    el.setAttribute('class', ' score pass')
    el.textContent = 'PASSED'

}

const test = () => {

    for (let i = 0; i < testData.length; i++) {

        try {
            let pass = true;
            for (let j = 0; j < testData[i].params.length; j++) {

                const paramArray = Array.isArray(testData[i].params[j])? testData[i].params[j] : [testData[i].params[j]]

                const actual = eval(testData[i].name)(...paramArray)
                document.querySelectorAll('.actual')[i].textContent = actual
                if (JSON.stringify(actual) !== JSON.stringify(testData[i].expected[j])) {
                    pass = false;
                }
            }
            if (pass) {
                makePass(`tr:nth-child(${i + 2}) > .score`)
            }
        } catch (e) {
            document.querySelectorAll('.actual')[i].textContent = e.message
        }


    }
}

const appendTestResults = (testData) => {

    const testDiv = document.querySelector('#test-results')
    const tr = document.createElement('tr')
    tr.innerHTML = `

        <th>Pass/Fail</th>
        <th>Test Name</th>
        <th>Parameters</th>
        <th>Expected</th>
        <th>Actual</th>

    `
    testDiv.appendChild(tr)

    for (let i = 0; i < testData.length; i++) {
        const test = testData[i]
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td class="score">Fail</td>
            <td>${test.name}</td>
            <td>${test.params[testData[i].params.length-1]}</td>
            <td>${test.expected[testData[i].expected.length-1]}</td>
            <td class="actual"></td>
        `
        testDiv.appendChild(tr)
    }
}

appendTestResults(testData)

btn.addEventListener('click', test)