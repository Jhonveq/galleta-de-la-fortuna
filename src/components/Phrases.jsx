

const Phrase = (props) => {
    // const {data} = props



    return (
        <article className="fortune">
            <div>
             <h1>GALLETA DE LA FORTUNA</h1>
            </div>    
            <div>
             <h2>{props.phrase.phrase}</h2>
             <p>Autor: {props.phrase.author}</p>
            </div>
        </article>
    )
}

export default Phrase