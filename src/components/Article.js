import'./Article.css';


function Article(props)
{
    return(
        <article>
            {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad eos itaque sit fugiat est similique harum voluptatibus debitis magni, aperiam porro asperiores illo nemo? Neque laboriosam adipisci aliquid officia.</p> */}
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        </article>
        
    )
}


export default Article;
