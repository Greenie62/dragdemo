let el=""

function dragStart(e){
    // e.preventDefault()
    console.log("start")
    el=e.target;
}


function dragEnd(e,idx){
    // e.preventDefault()
    console.log("end")
    let jobs=document.querySelectorAll(".dragdiv");
    jobs[idx].innerHTML=""
    jobs[idx].style.backgroundColor='lightgray'
   

   
}

function dragOver(e){
    e.preventDefault()
    console.log("over")
}

function dragEnter(e){
    e.preventDefault()
    e.target.style.background='lightgray'
    console.log("enter")
}

function dragLeave(e){
    e.preventDefault()
    e.target.style.background='none'

    console.log("leave")
}


function onDropFx(e,idx){
    console.log('droppp')
    // console.log(e.target)
    // console.log(e.target.nextElementSibling)
     console.log(e.target.nextElementSibling.children)
    let items = Array.from(e.target.nextElementSibling.children)
    // console.log(items)
    // console.log("idx: " + idx)
    // console.log(el)
    let job={
        id:el.getAttribute('data-id'),
        location:el.getAttribute('data-location'),
        destination:el.getAttribute('data-destination'),
        distance:el.getAttribute('data-distance')
    }

    console.log(job)
    console.log(items)


    //create new item
    // let dragDiv=document.createElement("div")
    // dragDiv.className="dragdiv"
    // dragDiv.setAttribute("draggable","true")
    // dragDiv.setAttribute("data-id",job.id)
    // dragDiv.setAttribute("data-location",job.location)
    // dragDiv.setAttribute("data-destination",job.destination)
    // dragDiv.setAttribute("data-distance",job.distance)
    // let p=document.createElement("p");
    // let a=document.createElement("a");
    // a.setAttribute("href","#")
    // a.appendChild(document.createTextNode(job.id))
    // p.appendChild(a)
    // p.appendChild(document.createTextNode(`${job.location}-${job.destination} Miles:${job.distance}`))
    // dragDiv.appendChild(p)
    // console.log(dragDiv)
    // dragContainer.appendChild(dragDiv)


    // items.push(dragDiv);

    // console.log(items)

    // }
    // let jobs_arr=[];
    // for(let i=0;i<items.length;i++){
    //     let job={
    //         id:items[i].getAttribute('data-id'),
    //         location:items[i].getAttribute('data-location'),
    //         destination:items[i].getAttribute('data-destination'),
    //         distance:items[i].getAttribute('data-distance'),
    
    //     }
    //     jobs_arr.push(job)
    // }
    // jobs_arr.push(job)
    // jobs_arr.shift()

    // console.log(jobs_arr)


    // e.target.nextElementSibling.innerHTML=""
    // let html="<div class='drivercardbody'><p>Schedule:</p>"
    // jobs_arr.map(j=>(
    //     html += `<div data-id=${j.id} data-location=${j.location} data-destination=${j.destination} data-distance=${j.distance} class='drivers-job-item'>
    //     <div class='location-flex'>
    //     <a href="#">${j.id}</a>
    //     <p>${j.location} (ETD): \n M:${j.distance} - ${j.destination}</p>
    //     </div>
    //     <div class='options_box'>
    //     <div class='option_div'>
    //     <h4>P</h4>
    //     </div>
    //     <div class='option_div'>
    //     <h4>D</h4>
    //     </div>
    //     </div>
    //     </div>`
    // ))

    // html += "</div>"


    // e.target.nextElementSibling.innerHTML=html



//     let jobDiv=document.createElement("div");

//     items.map(j=>{

    let jobDiv=document.createElement("div")
        jobDiv.className='driver-job-item'
        jobDiv.setAttribute("data-location",job.location)
        jobDiv.setAttribute("data-destination",job.location)
        jobDiv.setAttribute("data-distance",job.distance)
        jobDiv.setAttribute("data-id",job.id)

        let flexDiv=document.createElement("div");
        flexDiv.className="location-flex"
        let aHref=document.createElement("a");
        aHref.setAttribute("href","#");
        aHref.appendChild(document.createTextNode(job.id))

        let pLoc=document.createElement("p")
        pLoc.appendChild(document.createTextNode(`${job.location} (ETD): \n M:${job.distance} - ${job.destination}`))
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


        e.target.nextElementSibling.appendChild(jobDiv)

//     })

//     e.target.nextElementSibling.appendChild(jobDiv)

// driverDiv.appendChild(cardBody);        
    
// userTableContainer.appendChild(driverDiv)


// e.target.nextElementSibling.appendChild(newJob)

}