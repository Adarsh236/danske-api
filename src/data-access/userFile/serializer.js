const _serializeSingle = (userFile) => ({
    id: userFile._id,
    name: userFile.name,
    createdAt: userFile.createdAt,
    jsonFile: userFile.jsonFile,
});

const _serializeResult = (data) => ({
    result: data,
});

const serializer = (data) => {
    if (!data) return null;
    else if (Array.isArray(data)) data = data.map(_serializeSingle);
    else data = _serializeSingle(data);
    return _serializeResult(data);
};

export default serializer;
