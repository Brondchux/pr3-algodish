/*==================

await Dish.find({}, null, {sort: { _id: -1}, limit: 5})
await Dish.find({}).sort({_id: -1}).limit(5).exec()

==================*/