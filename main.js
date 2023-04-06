let list = document.querySelector('#list')


// let url = https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

let topStories = []
let topDetails = []

async function getTopStories() {
    let url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    let res = await fetch(url)
    let data = await res.json()
    for (let i = 0; i < 100; i++) {
        topStories.push(data[i])
    }
    console.log(topStories)

    topStories.forEach(async (story) => {
        let url = `https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`
        let res = await fetch(url)
        let details = await res.json()
        topDetails.push(details)

        let title = details.title
        let score = details.score
        let user = details.by
        let comments = details.kids
        let unix = details.time
        let currDate = Date.now().toLocaleString()
        let date = new Date(unix * 1000).getHours()
        console.log(currDate)
        console.log(date)

        let li = document.createElement('li')
        let a = document.createElement('a')
        let p = document.createElement('p')

        p.innerText = `${score} points by ${user}  | ${comments.length} comments`
        a.innerText = title
        a.href = '#'
        p.setAttribute('id', 'liP')
        // li.innerText = title

        li.append(a)
        li.appendChild(p)
        list.append(li)
        console.log(details.title)
    })
}

getTopStories()

console.log(topDetails)

// function getTopDetails() {
//     for (let i = 0; i < topDetails.length; i++) {
//         let detail = topDetails[i]
//         let h4 = document.createElement('h4')
//         h4.innerText = 
//         console.log(detail)
//     }
// }
