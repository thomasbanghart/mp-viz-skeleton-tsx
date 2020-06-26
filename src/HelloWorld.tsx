import * as React from 'react' 
import { useState, useEffect, FunctionComponent } from 'react'

type HelloWorldProps = {
    message: string
}

export const HelloWorld: FunctionComponent<HelloWorldProps> = (props: HelloWorldProps) => {
    const [message, setMessage] = useState<string>("Hello World")

    useEffect(() => {
        setMessage(props.message)
    }, [props])

    return(
    <>{message}</>
    )
};
