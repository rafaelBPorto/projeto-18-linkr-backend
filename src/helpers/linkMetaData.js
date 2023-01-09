import urlMetadata from "url-metadata";

export default async function linkMetaData(link) {
    try {
        const linkMetaData = await urlMetadata(link)
        const metaData = {
            linkTitle: linkMetaData.title,
            linkDescription: linkMetaData.description,
            linkUrl: linkMetaData.url,
            linkImage: linkMetaData.image
        }
        return metaData
    } catch (error) {
        return error
    }
}