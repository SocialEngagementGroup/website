// if the button need to work with onlclikc it must use "use client" directive at the top of the file

import { getCatFacts } from "@/apis/api";
import Button from "@/components/button/btn";
// async

export default async function Static() {
    // Data fetching at build time useing server fetching
    const catFact = await getCatFacts();

    return (
        <div className="p-5 border-2 border-blue-950 rounded-lg mt-5">
            <h1>Static Page - Pre-rendered at Bild time</h1>
            <div className="mt-4">
                {catFact.fact}
                {/* Cat */}
            </div>

            {/* //but default button click event not work in ssr and ssg  */}
            {/* this error comes for next js intelegence build tool coz there is onlciker server side rendering and this is client side event */}

            {/* <button onClick={() => console.log("Button is clicked") } className="bg-blue-950 mt-5 p-2">click here</button> */}

            <Button>Click Here</Button>


            <div className="mt-4">
                {/* {catFact.fact} */}
                {new Date().toLocaleString()}
                <span>(as we dosent have any api so how do we let know next.js there is no api so how do we make this dynamic) this is dynamic page but see the time not change because its pre-render at request time</span>
            </div>
        </div>
    )
}