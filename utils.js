export const parseData = (data) => {
    return {
        ...data, 
        title: data.title.toUpperCase(),
        publicationDateTimeStamp: (new Date(data.publicationDate)).getTime()
    }
}

export const parseDataArray = (arr) => {
    return arr.map(book => parseData(book))
}