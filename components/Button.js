function Button(props)
{
    let conf = {
        text: 'Hello world',
    }
    conf = {...conf, ...props};
    console.log(conf)

    return <button>{conf.text}</button>
}

export default Button;