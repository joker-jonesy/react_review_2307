function ContentContainer(props){
    return(
        <section>
            <h1>This sections stuff</h1>
            {props.children}
        </section>
    )
}

export default ContentContainer;