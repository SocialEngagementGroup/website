export const dynamic = 'force-dynamic';

export default async  function Dynamic(){
    return(
            <div className="p-5 border-2 border-blue-950 rounded-lg mt-5">
            <h1>Dynamic Page - Pre-rendered at Run time (it mean while user make request its request time)</h1>
            <div className="mt-4">
                {/* {catFact.fact} */}
                {new Date().toLocaleString()} 
                 <span>(as we dosent have any api so how do we let know next.js there is no api so how do we make this dynamic) this is dynamic page but see the time not change because its pre-render at request time</span>
            </div>
        </div>
    )
}