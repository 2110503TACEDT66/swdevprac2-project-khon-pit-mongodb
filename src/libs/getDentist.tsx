export default async function getDentist(id:string) {
    const response = await fetch(`https://presentation-day-1-khon-pit-mongodb-liard.vercel.app/api/v1/dentists/${id}`)
    if(!response.ok){
        throw new Error(`Failed to fetch dentist ${id}`)
    }
    return await response.json()
}