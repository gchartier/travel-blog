migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ioyqlszpqj2rzc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0aztflt",
    "name": "pictureAltText",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlcweov7",
    "name": "stampAltText",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ioyqlszpqj2rzc")

  // remove
  collection.schema.removeField("g0aztflt")

  // remove
  collection.schema.removeField("jlcweov7")

  return dao.saveCollection(collection)
})
