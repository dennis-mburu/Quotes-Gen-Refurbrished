const quotes = qts.map(qt => {
    qt.quote = qt.text
    delete qt.text
    return qt
})