const fs = require("fs");

const costsPath = "./src/db/costs/all-costs.json";

const getCostsByCategory = (req, res) => {
  const category = req.query.category;

  console.log(category);

  fs.readFile(costsPath, (err, data) => {
    if (err) {
      return console.error(err);
    }

    const costsList = JSON.parse(data.toString());

    if (!category) {
      return res.status(200).json(costsList);
    }

    const costsByCategory = costsList.filter(cost =>
      cost.categories.includes(category)
    );

    console.log(costsByCategory);

    let answerStatus = "success";

    if (!costsByCategory.length) {
      answerStatus = `"${category} not found "`;
    }

    const response = {
      status: answerStatus,
      costs: costsByCategory
    };

    res.status(200).json(response);
  });
};

module.exports = getCostsByCategory;