const printFunction = () => {
    console.log("Hello")
}

const executeAfterDelay = (timeout, func) => {
    setTimeout(func, timeout * 1000)
}

executeAfterDelay(5, printFunction);