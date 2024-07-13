import { useParams } from "react-router-dom"
const data = [
    {id:1, name: 'Giga', age:27},
    {id:2, name: 'Dato', age:22},
    {id:3, name: 'Tengo', age:37}
]
const ParamPage = () => {
    const param = useParams()

    const user = data.find(user => user.id == param.id)
    if(!user){
        return <div>User Not Found</div>
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
        </div>
    )
}

export default ParamPage    