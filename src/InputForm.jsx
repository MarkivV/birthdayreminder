const {useState} = require("react");

function InputForm({addBirth}){
    const [userInput, setUserInput] = useState([])
    const [userAge, setUserAge] = useState([])
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleChangeAge = (e) => {
        setUserAge(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addBirth(userInput, userAge)
        setUserInput("")
        setUserAge("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} placeholder={"Input"}/>
            <input type="text" value={userAge} onChange={handleChangeAge} placeholder={"Input"}/>
            <button>Add</button>
        </form>
    )
}

export default InputForm