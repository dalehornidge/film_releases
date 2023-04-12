import React, {useState} from "react";

const MovieForm = ({onMovieSubmit}) => {

    const [name, setName] = useState()
    const [url, setUrl] = useState()

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleUrlChange = (evt) => {
        setUrl(evt.target.value)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        const nameToSubmit = name.trim()
        const urlToSubmit = url.trim()
        if (!nameToSubmit || !urlToSubmit) return
        

        onMovieSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        })

        setName("")
        setUrl("")
    }

    return ( 
        <form
        onSubmit={handleFormSubmit} >
            <input type="text"
            placeholder="Film Name"
            value={name}
            onChange={handleNameChange} />
            <input 
            type="text"
            placeholder="IMDB URL"
            value={url} 
            onChange={handleUrlChange}
            />
            <input type="submit"
            value="Post"
            />
        </form>
     );
}
 
export default MovieForm;