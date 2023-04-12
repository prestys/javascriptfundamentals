let counter = 0

const increment = () => {
    x = counter + 1
    console.log(x)
    counter = x
}

const interval = (interval, func) => {
    setInterval(func, interval)
}

interval(1000, increment)