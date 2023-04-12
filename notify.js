const notifyByEmail = (email) => {
    return `Email sent to: ${email}`
}

const notifyByText = (number) => {
    return `Text sent to: ${number}`
}

function notify(str, func) {
    return func(str)
}

notify("hello@makers.tech.test", notifyByEmail);
notify("+10000000000", notifyByText);