class FormattedDate{
    formatDate(dateString) {
        const date = new Date(dateString)
        return date.toISOString().slice(0, 10)
    }
}

module.exports = new FormattedDate();