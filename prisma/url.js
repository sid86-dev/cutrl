
// /prisma/user.js
import prisma from './prisma'

// READ
export const getLongUrl = async id => {
    const record = await prisma.urls.findUnique({
        where: { id }
    })
    return record
}

// CREATE
export const createRecord = async (id, longUrl) => {
    const record = await prisma.urls.create({
        data: {
            id,
            longUrl
        }
    })
    return record
}

// UPDATE
export const updateRecord = async (id, updateData) => {
    const record = await prisma.urls.update({
        where: {
            id
        },
        data: {
            ...updateData
        }
    })
    return record
}

// DELETE
export const deleteRecord = async id => {
    const record = await prisma.urls.delete({
        where: {
            id
        }
    })
    return record
}
