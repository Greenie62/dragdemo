var dragContainer=document.querySelector(".dragcontainer");
var userTableContainer = document.querySelector(".usertablecontainer")


function fetchJobs(){
    return new Promise(resolve=>{
    fetch('/jobs.json')
    .then(jobs=>jobs.json())
    .then(jobs=>{
        resolve(jobs)
    })
})
}

function fetchDrivers(){
    return new Promise(resolve=>{
    fetch('/drivers.json')
    .then(drivers=>drivers.json())
    .then(drivers=>{
        resolve(drivers)
    })
})
}


async function renderDrivers(){
    let drivers = await fetchDrivers();
    console.log(drivers)
    let html=""
    drivers.map(d=>{
            let driverDiv=document.createElement("div");
            driverDiv.className="drivercard"

            let p_card=document.createElement("p");
            p_card.className="drivercard_p"
            p_card.appendChild(document.createTextNode('Driver Info:'))

            let divHeader=document.createElement("div");
            divHeader.className="drivercard_header"

            let divHeaderOne=document.createElement("div");
            divHeaderOne.className="drivercard_header_div_one"

          


            let h2Name=document.createElement("h2")
            h2Name.appendChild(document.createTextNode(`${d.firstname} ${d.lastname}`))
            let a_card=document.createElement("a");
            // p_card.className="drivercard_p"
            a_card.appendChild(h2Name)

            divHeaderOne.appendChild(a_card)

            driverDiv.appendChild(divHeaderOne)


            let divHeaderTwo=document.createElement("div");
            divHeaderTwo.className="drivercard_header_div"

            let pText=document.createElement("p");
            pText.appendChild(document.createTextNode(`Wants to return: ${d.returnLocation} - ${d.returnDate}`))

            divHeaderTwo.appendChild(pText)
            driverDiv.appendChild(p_card)
            divHeader.appendChild(divHeaderOne)
            divHeader.appendChild(divHeaderTwo)
            driverDiv.appendChild(divHeader)

            let cardBody=document.createElement("div");
            cardBody.className="drivercardbody";

            let p=document.createElement("p");
            p.appendChild(document.createTextNode('Schedule:'))

            cardBody.appendChild(p)
            
            d.jobs.map(j=>{
                let jobDiv=document.createElement("div");
                jobDiv.className='driver-job-item'
                jobDiv.setAttribute("data-location",j.location)
                jobDiv.setAttribute("data-destination",j.location)
                jobDiv.setAttribute("data-distance",j.distance)
                jobDiv.setAttribute("data-id",j.id)

                let flexDiv=document.createElement("div");
                flexDiv.className="location-flex"
                let aHref=document.createElement("a");
                aHref.setAttribute("href","#");
                aHref.appendChild(document.createTextNode(j.id))

                let pLoc=document.createElement("p")
                pLoc.appendChild(document.createTextNode(`${j.location} (ETD): \n M:${j.distance} - ${j.destination}`))
                flexDiv.appendChild(aHref)
                flexDiv.appendChild(pLoc)

                jobDiv.appendChild(flexDiv)

                let optionDiv=document.createElement("div")
                optionDiv.className="options_box"

                let optionOne=document.createElement("div")
                optionOne.className="option_div"
                let h4Option=document.createElement("h4");
                h4Option.appendChild(document.createTextNode("P"))
                optionOne.appendChild(h4Option)

                let optionTwo=document.createElement("div")
                optionTwo.className="option_div"
                let h4Optiontwo=document.createElement("h4");
                h4Optiontwo.appendChild(document.createTextNode("D"))
                optionOne.appendChild(h4Optiontwo)

                optionDiv.appendChild(optionOne)
                optionDiv.appendChild(optionTwo)
                jobDiv.appendChild(optionDiv)
                cardBody.appendChild(jobDiv)

            })


driverDiv.appendChild(cardBody);        
            
        userTableContainer.appendChild(driverDiv)

            })


 


    document.querySelectorAll(".drivercard_header").forEach((div,idx)=>{
        div.ondragover=(e)=>dragOver(e)
        div.ondragenter=(e)=>dragEnter(e)
        div.ondragleave=(e)=>dragLeave(e)
        div.ondrop=(e)=>onDropFx(e,idx)
    })
}



async function renderJobs(){
    let jobs = await fetchJobs();

    console.log(jobs)
    let html=""
    jobs.map(j=>{
        let dragDiv=document.createElement("div")
        dragDiv.className="dragdiv"
        dragDiv.setAttribute("draggable","true")
        dragDiv.setAttribute("data-id",j.id)
        dragDiv.setAttribute("data-location",j.location)
        dragDiv.setAttribute("data-destination",j.destination)
        dragDiv.setAttribute("data-distance",j.distance)
        let p=document.createElement("p");
        let a=document.createElement("a");
        a.setAttribute("href","#")
        a.appendChild(document.createTextNode(j.id))
        p.appendChild(a)
        p.appendChild(document.createTextNode(`${j.location}-${j.destination} Miles:${j.distance}`))
        dragDiv.appendChild(p)
        // console.log(dragDiv)
        dragContainer.appendChild(dragDiv)

    })

    document.querySelectorAll(".dragdiv").forEach((div,idx)=>{
        div.ondragstart=(e)=>dragStart(e)
        div.ondragend=(e)=>dragEnd(e,idx)
    })
}


renderJobs()

renderDrivers()